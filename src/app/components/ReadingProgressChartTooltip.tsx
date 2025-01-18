"use client";

import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

function ReadingProgressChartTooltip({
  payload,
  label,
  active,
}: TooltipProps<ValueType, NameType>) {
  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-gray-100">
        <p>{label}</p>
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
        <p>{`${payload[1].name} : ${payload[1].value}`}</p>
        <p>{`${payload[2]?.name} : ${payload[2]?.value}`}</p>
      </div>
    );
  }

  return null;
}

export default ReadingProgressChartTooltip;
