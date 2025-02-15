"use client";

import { useState } from "react";
import BookCard from "@/app/components/BookCard";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const BookList = ({ bookData }) => {
  const [selectedBook, setSelectedBook] = useState(bookData[0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:h-[320px] md:w-[900px] bg-gray-100 rounded-xl overflow-hidden ">
      <div className="flex flex-col overflow-scroll">
        {bookData.map((book) => {
          const totalPages = book.last_page - book.start_page;
          const totalReadPages =
            book.reads_on_date[0].current_page - book.start_page;
          const procentBookFinished = (totalReadPages / totalPages) * 100;
          const isFinished = procentBookFinished === 100;
          const isSelected = book.id === selectedBook.id;

          return (
            <button
              key={book.id}
              className={`min-h-11 ${isSelected ? "bg-gray-300" : "bg-gray-200"} text-center relative`}
              onClick={() => {
                setSelectedBook(book);
              }}
            >
              {isFinished ? (
                <span className="absolute start-1 top-0.5">
                  <CheckCircleIcon
                    width={40}
                    height={40}
                    className="text-green-600"
                  />
                </span>
              ) : (
                <span className="absolute start-1 top-0.5 flex">
                  <div className="relative size-10">
                    <svg
                      className="size-full -rotate-90"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-gray-200 dark:text-neutral-700"
                        strokeWidth="2"
                      ></circle>

                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        className="stroke-current text-green-600 dark:text-green-500"
                        strokeWidth="2"
                        strokeDasharray="100"
                        strokeDashoffset={100 - Math.round(procentBookFinished)}
                        strokeLinecap="round"
                      ></circle>
                    </svg>

                    <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <span className="text-center text-xs ">
                        {Math.round(procentBookFinished)}%
                      </span>
                    </div>
                  </div>
                </span>
              )}
              <p className="px-16">{book.title}</p>
            </button>
          );
        })}
      </div>
      <BookCard book={selectedBook} />
    </div>
  );
};

export default BookList;
