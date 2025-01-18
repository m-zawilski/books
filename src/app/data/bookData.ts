import Book from "@/app/@types/Book"

const bookData: Record<number, Book> = {
  1: {
    author: "Brandon Sanderson",
    title: "Rhythm of War",
    startPage: 737,
    lastPage: 1218,
    currentPage: 1218,
    startDate: new Date(2024, 11, 13),
    endDate: new Date(2025, 0, 5),
    imageUrl: "https://m.media-amazon.com/images/I/81ZR25hH7eL._SL1500_.jpg",
    language: "en",
    type: "fantasy",
  },
  2: {
    author: "Matt Dinniman",
    title: "Carl's Doomsday Scenario",
    startPage: 1,
    lastPage: 353,
    currentPage: 353,
    startDate: new Date(2025, 0, 5),
    endDate: new Date(2025, 0, 10),
    imageUrl: "https://m.media-amazon.com/images/I/816CCRv3GYL._SL1500_.jpg",
    language: "en",
    type: "fantasy",
  },
  3: {
    author: "Matt Dinniman",
    title: "The Dungeon Anarchist's Cookbook",
    startPage: 1,
    lastPage: 522,
    currentPage: 522,
    startDate: new Date(2025, 0, 11),
    endDate: new Date(2025, 0, 15),
    imageUrl: "https://m.media-amazon.com/images/I/81Tb1i-ozpL._SL1500_.jpg",
    language: "en",
    type: "fantasy",
  },
  4: {
    author: "Matt Dinniman",
    title: "The Gate of the Feral Gods",
    startPage: 1,
    lastPage: 571,
    currentPage: 369,
    startDate: new Date(2025, 0, 15),
    endDate: null,
    imageUrl: "https://m.media-amazon.com/images/I/81X+5EyPKvS._SL1500_.jpg",
    language: "en",
    type: "fantasy",
  },
}

export default bookData
