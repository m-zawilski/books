"use client";

import bookData from "@/app/data/bookData";
import { differenceInDays } from "date-fns";

export interface BookStatistics {
  totalPagesRead: number;
  pagesPerDay: number;
  totalBooksFinished: number;
  daysPerBook: number;
}

const useBooks = () => {
  const totalPagesRead = Object.values(bookData).reduce(
    (acc, book) => acc + book.currentPage - book.startPage,
    0
  );

  const pagesPerDay =
    Math.round(
      (totalPagesRead / differenceInDays(new Date(), new Date(2025, 0, 0))) * 10
    ) / 10;

  const totalBooksFinished = Object.values(bookData).reduce(
    (acc, book) => acc + (book.endDate ? 1 : 0),
    0
  );

  const daysPerBook =
    Math.round(
      (differenceInDays(new Date(), new Date(2025, 0, 0)) /
        totalBooksFinished) *
        10
    ) / 10;

  return {
    bookData,
    bookStatistics: {
      totalPagesRead,
      pagesPerDay,
      totalBooksFinished,
      daysPerBook,
    } as BookStatistics,
  };
};

export default useBooks;
