import BookStatistics from "@/app/components/BookStatistics";
import BookList from "@/app/components/BookList";
import ReadingProgressChart from "@/app/components/ReadingProgressChart";

export default function Home() {
  return (
    <main className="my-12 flex flex-col items-center min-h-screen">
      <BookStatistics />
      <ReadingProgressChart />
      <BookList />
    </main>
  );
}
