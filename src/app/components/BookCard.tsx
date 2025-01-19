import Image from "next/image";
import Book from "@/app/@types/Book";

interface Props {
  book: Book;
}

const BookCard = (props: Props) => {
  const { book } = props;

  return (
    <div className="bg-gray-100 h-[100%] grid grid-cols-2 ">
      <div className="relative">
        <Image layout="fill" src={book.imageUrl} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="px-2 py-1">
          <p className="text-lg">{book.title}</p>
          <p className="text-md text-gray-700">{book.author}</p>
          <p>Start page: {book.startPage}</p>
          <p>Last page: {book.lastPage}</p>
          <p>Current page: {book.currentPage}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
