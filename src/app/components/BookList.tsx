"use client"

import useBooks from "@/app/hooks/useBooks"
import BookCard from "@/app/components/BookCard"

const BookList = () => {
  const { bookData } = useBooks()

  return (
    <div className="grid align-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 m-1 md:m-5">
      {Object.entries(bookData).map(([id, book]) => {
        return <BookCard key={id} book={book} />
      })}
    </div>
  )
}

export default BookList
