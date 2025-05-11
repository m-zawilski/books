import Book from "@/app/@types/Book";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { ReadOnDateDTO } from "@/app/@types/ReadOnDateDTO";
import { updateReadOnDate } from "@/app/data/bookData";

interface Props {
  book: Book;
}

function BookReadOnDateForm(props: Props) {
  const { book } = props;

  const currentPage = book.reads_on_date[0].current_page;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      start_pages: currentPage,
      end_pages: currentPage,
      date: format(new Date(), "yyyy-MM-dd"),
      book_id: book.id,
    } as ReadOnDateDTO,
  });

  if (!book) return null;

  const onSubmit = async (data: ReadOnDateDTO) => {
    await updateReadOnDate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <input type="number" step="1" {...register("end_pages")} />
      <input {...register("date")} type="date" />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Submit
      </button>
    </form>
  );
}

export default BookReadOnDateForm;
