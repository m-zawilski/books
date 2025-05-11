export default interface Book {
  id: string;
  author: string;
  title: string;
  start_page: number;
  last_page: number;
  current_page: number;
  start_date: Date;
  end_date: Date | null;
  image_url: string;
  language: string;
  type: string;
  isFinished: boolean;
  reads_on_date: any[]; // TODO add a type
}
