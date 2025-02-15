import BookStatistics from "@/app/components/BookStatistics";
import BookList from "@/app/components/BookList";
import ReadingProgressChart from "@/app/components/ReadingProgressChart";
import { fetchBookByDayData, fetchBookData } from "@/app/data/bookData";

export default async function Home() {
  const bookData = await fetchBookData();
  const bookDataByDay = await fetchBookByDayData();

  return (
    <main className="my-12 flex flex-col items-center min-h-screen gap-8">
      <BookStatistics bookDataByDay={bookDataByDay} bookData={bookData} />
      <BookList bookData={bookData} />
      <ReadingProgressChart bookDataByDay={bookDataByDay} />
    </main>
  );
}
