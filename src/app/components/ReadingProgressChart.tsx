"use client";

import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useBooks from "@/app/hooks/useBooks";
import {
  endOfMonth,
  endOfYear,
  format,
  getDaysInMonth,
  getDaysInYear,
  startOfMonth,
  startOfYear,
} from "date-fns";
import useReadingProgress from "@/app/hooks/useReadingProgress";
import ReadingProgressChartTooltip from "@/app/components/ReadingProgressChartTooltip";
import dynamic from "next/dynamic";
import { useState } from "react";

const LineChart = dynamic(
  () => import("recharts").then((recharts) => recharts.LineChart),
  {
    loading: () => <div className="bg-gray-100 w-90% h-[400px]" />,
    ssr: false,
  }
);

const ReadingProgressChart = () => {
  const { bookStatistics } = useBooks();
  const { data } = useReadingProgress();
  const [isMonthView, setIsMonthView] = useState(true);

  const monthViewDomain = [
    startOfMonth(new Date()).valueOf(),
    endOfMonth(new Date()).valueOf(),
  ];
  const yearViewDomain = [
    startOfYear(new Date()).valueOf(),
    endOfYear(new Date()).valueOf(),
  ];

  return (
    <>
      <button onClick={() => setIsMonthView(!isMonthView)}>
        {isMonthView ? "Show year view" : "Show month view"}
      </button>
      <ResponsiveContainer width="90%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="totalPagesRead"
            stroke="#8884d8"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pagesToRead"
            stroke="#cccccc"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pagesToReadExtra"
            stroke="#cccccc"
            dot={false}
          />
          <XAxis
            dataKey="date"
            type="number"
            scale="time"
            domain={isMonthView ? monthViewDomain : yearViewDomain}
            tickFormatter={(value) => format(new Date(value), "dd/MM")}
            allowDataOverflow
          />
          <YAxis
            domain={[
              0,
              Math.round(
                (bookStatistics.pagesPerDay *
                  (isMonthView
                    ? getDaysInMonth(new Date())
                    : getDaysInYear(new Date()))) /
                  100
              ) * 100,
            ]}
            allowDataOverflow
          />
          <Tooltip content={<ReadingProgressChartTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ReadingProgressChart;
