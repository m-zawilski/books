import PagesReadByBook from "@/app/@types/PagesReadByBook";

interface BookDataByDay {
  from: Date;
  pagesRead: PagesReadByBook[][];
}

const bookDataByDay: BookDataByDay = {
  from: new Date(2025, 0, 1),
  pagesRead: [
    [
      {
        bookId: 1,
        count: 90,
      },
    ],
    [
      {
        bookId: 1,
        count: 60,
      },
    ],
    [
      {
        bookId: 1,
        count: 90,
      },
    ],
    [
      {
        bookId: 1,
        count: 60,
      },
    ],
    [
      {
        bookId: 1,
        count: 192,
      },
      {
        bookId: 6,
        count: 4,
      },
      {
        bookId: 2,
        count: 30,
      },
    ],
    [
      {
        bookId: 2,
        count: 60,
      },
    ],
    [
      {
        bookId: 2,
        count: 30,
      },
    ],
    [
      {
        bookId: 2,
        count: 30,
      },
    ],
    [
      {
        bookId: 2,
        count: 90,
      },
    ],
    [
      {
        bookId: 2,
        count: 120,
      },
    ],
    [
      {
        bookId: 3,
        count: 60,
      },
    ],
    [
      {
        bookId: 3,
        count: 150,
      },
    ],
    [
      {
        bookId: 3,
        count: 90,
      },
    ],
    [
      {
        bookId: 3,
        count: 120,
      },
    ],
    [
      {
        bookId: 3,
        count: 90,
      },
      {
        bookId: 4,
        count: 30,
      },
    ],
    [
      {
        bookId: 4,
        count: 90,
      },
    ],
    [
      {
        bookId: 4,
        count: 240,
      },
    ],
    [
      {
        bookId: 4,
        count: 30,
      },
    ],
    [
      {
        bookId: 4,
        count: 172,
      },
      {
        bookId: 5,
        count: 159,
      },
    ],
    [
      {
        bookId: 5,
        count: 68,
      },
    ],
  ],
};

export default bookDataByDay;
