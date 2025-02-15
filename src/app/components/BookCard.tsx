import Image from "next/image";
import Book from "@/app/@types/Book";

const BookCard = (props) => {
  const { book } = props;

  if (!book) return;

  return (
    <div className="bg-gray-100 h-[100%] grid grid-cols-2 ">
      <div className="relative">
        <Image layout="fill" src={book.image_url} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="px-2 py-1">
          <p className="text-lg">{book.title}</p>
          <p className="text-md text-gray-700">{book.author}</p>
          <p>Start page: {book.start_page}</p>
          <p>Last page: {book.last_page}</p>
          <p>Current page: {book.reads_on_date[0].current_page}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
