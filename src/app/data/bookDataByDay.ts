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
        count: 214,
      },
    ],
    [
      {
        bookId: 5,
        count: 163,
      },
    ],
    [
      {
        bookId: 5,
        count: 40,
      },
      {
        bookId: 8,
        count: 9,
      },
    ],
    [
      {
        bookId: 5,
        count: 142,
      },
      {
        bookId: 8,
        count: 29,
      },
    ],
    [
      {
        bookId: 6,
        count: 1,
      },
      {
        bookId: 8,
        count: 16,
      },
    ],
    [],
    [
      {
        bookId: 6,
        count: 4,
      },
      {
        bookId: 9,
        count: 47,
      },
    ],
    [],
    [
      {
        bookId: 9,
        count: 35,
      },
    ],
    [
      {
        bookId: 9,
        count: 39,
      },
    ],
    [
      {
        bookId: 9,
        count: 19,
      },
    ],
    [
      {
        bookId: 9,
        count: 22,
      },
    ],
    [],
    [],
    [
      {
        bookId: 9,
        count: 22,
      },
    ],
    [],
    [],
    [
      {
        bookId: 10,
        count: 78,
      },
    ],
    [],
    [
      {
        bookId: 9,
        count: 3,
      },
    ],
    [
      {
        bookId: 9,
        count: 24,
      },
    ],
    [
      {
        bookId: 9,
        count: 0,
      },
    ],
    [
      {
        bookId: 9,
        count: 24,
      },
    ],
    [
      {
        bookId: 9,
        count: 8,
      },
    ],
    [
      {
        bookId: 9,
        count: 29,
      },
    ],
    [
      {
        bookId: 9,
        count: 49,
      },
      {
        bookId: 11,
        count: 34,
      },
    ],
    [
      {
        bookId: 9,
        count: 0,
      },
      {
        bookId: 11,
        count: 0,
      },
    ],
  ],
};

export default bookDataByDay;
