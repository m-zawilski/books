"use server";

import { supabase } from "@/utils/supabase/server";
import { addDays, differenceInDays, parse } from "date-fns";
import { ReadOnDateDTO } from "@/app/@types/ReadOnDateDTO";
import { revalidatePath } from "next/cache";

export async function fetchBookData() {
  // TODO cleanup & add types
  const supabaseClient = await supabase();
  const response = await supabaseClient
    .from("books")
    .select(
      `
        id,
        title,
        start_page,
        last_page,
        language,
        genre,
        image_url,
        created_at,
        updated_at,
        authors ( id, first_name, last_name ),
        book_readings ( start_date, end_date ),
        reads_on_date ( current_page:end_pages.max() )
      `
    )
    .order("updated_at", { ascending: false });

  return response.data;
}

export async function fetchBookByDayData() {
  const supabaseClient = await supabase();
  const response = await supabaseClient
    .from("reads_on_date")
    .select(
      `
        end_pages:end_pages.sum(),
        start_pages:start_pages.sum(),
        date
      `
    )
    .order("date")
    .gte("date", "2025-01-01");

  let currentDay = new Date(2025, 0, 1);
  let currentSum = 0;
  const arr = [];

  if (response.data) {
    for (let i = 0; i < response.data.length; i++) {
      const dataDay = response.data[i].date;
      while (
        differenceInDays(
          currentDay,
          parse(dataDay, "yyyy-MM-dd", new Date())
        ) !== 0
      ) {
        arr.push({
          date: currentDay,
          total: currentSum,
          pagesRead: 0,
        });
        currentDay = addDays(currentDay, 1);
      }
      currentSum =
        currentSum + response.data[i].end_pages - response.data[i].start_pages;
      arr.push({
        date: parse(dataDay, "yyyy-MM-dd", new Date()),
        total: currentSum,
        pagesRead: response.data[i].end_pages - response.data[i].start_pages,
      });
      currentDay = addDays(currentDay, 1);
    }
  }

  return arr;
}

export async function updateReadOnDate(readOnDate: ReadOnDateDTO) {
  const supabaseClient = await supabase();

  const response = await supabaseClient
    .from("reads_on_date")
    .update({
      end_pages: readOnDate.end_pages,
      updated_at: new Date(),
    })
    .match({ book_id: readOnDate.book_id, date: readOnDate.date });

  if (response.status === 204) {
    await supabaseClient.from("reads_on_date").insert({
      start_pages: readOnDate.start_pages,
      end_pages: readOnDate.end_pages,
      date: readOnDate.date,
      updated_at: new Date(),
      book_id: readOnDate.book_id,
    });
  }

  revalidatePath("/");
}
