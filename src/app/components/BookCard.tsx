import Image from "next/image";
import Book from "@/app/@types/Book";

interface Props {
  book: Book;
}

const BookCard = (props: Props) => {
  const { book } = props;

  const totalPages = book.lastPage - book.startPage;
  const totalReadPages = book.currentPage - book.startPage;
  const procentBookFinished = (totalReadPages / totalPages) * 100;

  return (
    <div className="bg-gray-100 h-[280px] w-[300px] md:w-[400px] rounded-xl grid grid-cols-2  overflow-hidden">
      <div className="relative">
        <Image layout="fill" src={book.imageUrl} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="px-2 py-1">
          <p className="text-lg">{book.title}</p>
          <p className="text-md text-gray-700">{book.author}</p>
        </div>
        <div className="h-6 bg-gray-300 text-center relative mt-auto">
          <div
            className={`h-6 absolute ${Math.round(procentBookFinished) === 100 ? "bg-green-400" : "bg-gray-400"}`}
            style={{
              width: `${procentBookFinished}%`,
            }}
          />
          <span className="relative">{`${procentBookFinished === 100 ? "Finished" : `${totalReadPages}/${totalPages} (${Math.round(procentBookFinished)}%)`}`}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
