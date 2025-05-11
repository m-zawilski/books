"use client";

import BookStatisticCard from "@/app/components/BookStatisticCard";
import { differenceInDays, format } from "date-fns";

interface BookStatistics {
  totalPagesRead: number;
  pagesPerDay: number;
  totalBooksFinished: number;
  daysPerBook: number;
  bestDay: number;
  currentDay: number;
}

const BookStatistics = ({ bookData, bookDataByDay }) => {
  const totalPagesRead = bookDataByDay.at(-1)?.total || 0;

  const pagesPerDay = (
    totalPagesRead / differenceInDays(new Date(), new Date(2025, 0, 0))
  ).toFixed(1);

  // TODO refactor
  const totalBooksFinished = bookData?.reduce((acc, book) => {
    const totalPages = book.last_page - book.start_page;
    const totalReadPages = book.reads_on_date[0].current_page - book.start_page;
    const procentBookFinished = (totalReadPages / totalPages) * 100;
    const isFinished = procentBookFinished === 100;

    if (isFinished) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const bookStatistics = {
    totalPagesRead,
    pagesPerDay,
    totalBooksFinished,
    daysPerBook: (
      differenceInDays(new Date(), new Date(2025, 0, 0)) / totalBooksFinished
    ).toFixed(1),
    bestDay: bookDataByDay.reduce((acc, value) => {
      if (value.pagesRead > acc.pagesRead) {
        return value;
      }
      return acc;
    }, bookDataByDay[0]),
    currentDay:
      differenceInDays(bookDataByDay.at(-1).date, new Date()) === 0
        ? bookDataByDay.at(-1).pagesRead
        : 0,
  };

  const keyToTitle: Record<keyof BookStatistics, string> = {
    totalPagesRead: "Total pages",
    pagesPerDay: "Pages / day",
    totalBooksFinished: "Books finished",
    daysPerBook: "Days per book",
    bestDay: `Most pages (${format(bookStatistics.bestDay.date, "dd MMM")})`,
    currentDay: "Pages today",
  };

  return (
    <div className="flex flex-wrap gap-3 m-4 justify-center">
      {Object.entries(bookStatistics).map(([key, value]) => {
        return (
          <BookStatisticCard
            key={key}
            value={key === "bestDay" ? value.pagesRead : value}
            title={keyToTitle[key as keyof BookStatistics]}
          />
        );
      })}
    </div>
  );
};

export default BookStatistics;
