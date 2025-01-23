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
  differenceInDays,
  endOfMonth,
  endOfYear,
  format,
  getDaysInYear,
  getMonth,
  startOfYear,
  sub,
} from "date-fns";
import useReadingProgress from "@/app/hooks/useReadingProgress";
import ChartTooltip from "@/app/components/ChartTooltip";
import dynamic from "next/dynamic";
import { useState } from "react";
import XAxisTick from "@/app/components/XAxisTick";
import { range } from "d3-array";

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
  const [monthFilter, setMonthFilter] = useState<number | undefined>(
    getMonth(new Date())
  );

  const getXDomain = () => {
    if (monthFilter !== undefined) {
      return [
        new Date(2025, monthFilter, 1).valueOf(),
        sub(endOfMonth(new Date(2025, monthFilter, 1)), { days: 1 }).valueOf(),
      ];
    } else {
      return [
        startOfYear(new Date()).valueOf(),
        endOfYear(new Date()).valueOf(),
      ];
    }
  };

  return (
    <>
      <div className="border-2">
        {range(12).map((i) => (
          <button
            key={i}
            onClick={() => setMonthFilter(i)}
            className={`py-2 px-3 ${monthFilter === i ? "bg-gray-200" : ""}`}
          >
            {format(new Date(2025, i, 1), "MMM")}
          </button>
        ))}
        <button
          onClick={() => setMonthFilter(undefined)}
          className={`border-l-2 py-2 px-3 ${monthFilter === undefined ? "bg-gray-200" : ""}`}
        >
          Year
        </button>
      </div>
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
            domain={getXDomain()}
            allowDataOverflow
            tick={<XAxisTick />}
            height={60}
            interval={monthFilter !== undefined ? 0 : 15}
          />
          <CartesianAxis />
          <YAxis
            tick={false}
            axisLine={false}
            // TODO revise the domain for months after January
            domain={[
              0,
              Math.round(
                monthFilter !== undefined
                  ? Math.max(
                      bookStatistics.totalPagesRead / 80,
                      differenceInDays(
                        new Date(2025, monthFilter + 1, 1),
                        new Date(2025, 0, 0)
                      ) * 0.5
                    )
                  : getDaysInYear(new Date()) * 0.5
              ) * 100,
            ]}
            allowDataOverflow
          />
          <Tooltip content={<ChartTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ReadingProgressChart;
