"use client";

import {
  CartesianAxis,
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
  getDaysInMonth,
  getDaysInYear,
  startOfMonth,
  startOfYear,
  sub,
} from "date-fns";
import useReadingProgress from "@/app/hooks/useReadingProgress";
import ReadingProgressChartTooltip from "@/app/components/ReadingProgressChartTooltip";
import dynamic from "next/dynamic";
import { useState } from "react";
import XAxisTick from "@/app/components/XAxisTick";

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
    sub(endOfMonth(new Date()), { days: 1 }).valueOf(),
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
            allowDataOverflow
            tick={<XAxisTick />}
            height={60}
            interval={isMonthView ? 0 : 15}
          />
          <CartesianAxis />
          <YAxis
            tick={false}
            axisLine={false}
            domain={[
              0,
              Math.round(
                isMonthView
                  ? bookStatistics.totalPagesRead / 80
                  : getDaysInYear(new Date()) * 0.5
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
