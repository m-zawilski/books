"use client";

import useBooks from "@/app/hooks/useBooks";
import Book from "@/app/@types/Book";
import { useState } from "react";
import BookCard from "@/app/components/BookCard";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const bookSorter = ([, book1]: [string, Book], [, book2]: [string, Book]) => {
  if (book1.endDate && !book2.endDate) {
    return 1;
  } else if (!book1.endDate && book2.endDate) {
    return -1;
  } else if (book1.endDate && book2.endDate) {
    return book2.endDate.valueOf() - book1.endDate.valueOf();
  } else {
    return 0;
  }
};

const BookList = () => {
  const { bookData } = useBooks();

  const sortedBooks = Object.entries(bookData).sort(bookSorter);

  const [selectedBookId, setSelectedBookId] = useState<string | undefined>(
    sortedBooks[0][0]
  );

  const book = selectedBookId ? bookData[selectedBookId] : undefined;

  return (
    <div className="grid grid-cols-2 w-[90%] h-[320px] md:w-[900px] bg-gray-100 rounded-xl overflow-hidden ">
      <div className="flex flex-col">
        {sortedBooks.map(([id, book]) => {
          const totalPages = book.lastPage - book.startPage;
          const totalReadPages = book.currentPage - book.startPage;
          const procentBookFinished = (totalReadPages / totalPages) * 100;
          const isSelected = id === selectedBookId;

          return (
            <button
              key={id}
              className="h-6 bg-gray-300 text-center relative"
              onClick={() => {
                setSelectedBookId(isSelected ? undefined : id);
              }}
            >
              <div
                className={`h-6 absolute ${Math.round(procentBookFinished) === 100 ? "bg-green-400" : "bg-gray-400"}`}
                style={{
                  width: `${procentBookFinished}%`,
                }}
              />
              <span className={`relative ${isSelected ? "font-bold" : ""}`}>
                {book.title}
              </span>
              <span className="relative float-end">
                {procentBookFinished === 100 ? (
                  <CheckCircleIcon width={24} height={24} color="darkgreen" />
                ) : (
                  `${Math.round(procentBookFinished)}%`
                )}
              </span>
            </button>
          );
        })}
      </div>
      <div>{book && <BookCard book={book} />}</div>
    </div>
  );
};

export default BookList;
