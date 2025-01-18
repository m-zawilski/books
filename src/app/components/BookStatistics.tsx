"use client";

import useBooks from "@/app/hooks/useBooks";
import type { BookStatistics } from "@/app/hooks/useBooks";
import BookStatisticCard from "@/app/components/BookStatisticCard";
import useReadingProgress from "@/app/hooks/useReadingProgress";
import { format } from "date-fns";

const BookStatistics = () => {
  const { bookStatistics } = useBooks();
  const { bestDay } = useReadingProgress();

  const keyToTitle: Record<keyof BookStatistics, string> = {
    totalPagesRead: "Total pages",
    pagesPerDay: "Pages / day",
    totalBooksFinished: "Books finished",
    daysPerBook: "Days per book",
  };

  return (
    <div className="flex flex-wrap gap-3 m-4 justify-center">
      {Object.entries(bookStatistics).map(([key, value]) => {
        return (
          <BookStatisticCard
            key={key}
            value={value}
            title={keyToTitle[key as keyof BookStatistics]}
          />
        );
      })}
      <BookStatisticCard
        value={bestDay.pages.toString()}
        title={`Most pages (${format(bestDay.date, "dd MMM")})`}
      />
    </div>
  );
};

export default BookStatistics;
