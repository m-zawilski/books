export default interface Book {
  author: string;
  title: string;
  startPage: number;
  lastPage: number;
  currentPage: number;
  startDate: Date;
  endDate: Date | null;
  imageUrl: string;
  language: string;
  type: string;
}
