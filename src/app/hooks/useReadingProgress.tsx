import bookDataByDay from "@/app/data/bookDataByDay";
import { add } from "date-fns/fp";
import { differenceInDays, endOfYear } from "date-fns";
import PagesReadByBook from "@/app/@types/PagesReadByBook";

interface DayProgress {
  date: Date;
  pagesRead: number;
  pagesSum: number;
}

interface ReadingProgress {
  date: number;
  pagesRead?: number;
  totalPagesRead?: number;
  pagesToRead?: number;
  pagesToReadExtra?: number;
}

const PAGES_PER_DAY = 30;
const EXTRA_EFFORT_MULTIPLIER = 1.333333;

function getPagesSum(pagesReadByBook: PagesReadByBook[]) {
  return pagesReadByBook.reduce((acc, book) => acc + book.count, 0);
}

const useReadingProgress = () => {
  const dailyProgress = new Array<DayProgress>(bookDataByDay.pagesRead.length);
  const pagesRead = getPagesSum(bookDataByDay.pagesRead[0]);
  dailyProgress[0] = {
    date: bookDataByDay.from,
    pagesRead: pagesRead,
    pagesSum: pagesRead,
  };

  for (let i = 1; i < bookDataByDay.pagesRead.length; i++) {
    const pagesRead = getPagesSum(bookDataByDay.pagesRead[i]);

    dailyProgress[i] = {
      date: add({ days: i }, bookDataByDay.from),
      pagesRead,
      pagesSum: dailyProgress[i - 1].pagesSum + pagesRead,
    };
  }

  const data: ReadingProgress[] = [
    ...dailyProgress.map((sum, i) => {
      return {
        date: sum.date.valueOf(),
        pagesRead: sum.pagesRead,
        totalPagesRead: sum.pagesSum,
        pagesToRead: (i + 1) * PAGES_PER_DAY,
        pagesToReadExtra: Math.round(
          (i + 1) * PAGES_PER_DAY * EXTRA_EFFORT_MULTIPLIER
        ),
      };
    }),
    ...new Array(
      differenceInDays(
        endOfYear(new Date()),
        dailyProgress[dailyProgress.length - 1].date
      )
    )
      .fill(0)
      .map((_, i) => {
        return {
          date: add(
            { days: i + 1 },
            dailyProgress[dailyProgress.length - 1].date
          ).valueOf(),
          pagesToRead: (dailyProgress.length + i + 1) * PAGES_PER_DAY,
          pagesToReadExtra: Math.round(
            (dailyProgress.length + i + 1) *
              PAGES_PER_DAY *
              EXTRA_EFFORT_MULTIPLIER
          ),
        };
      }),
  ];

  let bestDayIndex = 0;

  for (let i = 1; i < dailyProgress.length; i++) {
    if (dailyProgress[i].pagesRead > dailyProgress[bestDayIndex].pagesRead) {
      bestDayIndex = i;
    }
  }

  return {
    data,
    bestDay: {
      pages: dailyProgress[bestDayIndex].pagesRead,
      date: dailyProgress[bestDayIndex].date,
    },
  };
};

export default useReadingProgress;
