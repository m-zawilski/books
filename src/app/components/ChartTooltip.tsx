"use client";

import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { format } from "date-fns";

function ChartTooltip({
  payload,
  label,
  active,
}: TooltipProps<ValueType, NameType>) {
  const keyToTitle: Record<string, string> = {
    totalPagesRead: "Total pages",
    pagesToRead: "Minimal goal",
    pagesToReadExtra: "Optimal goal",
  };

  if (active && payload && payload.length > 0) {
    return (
      <div className="bg-gray-100">
        <p>{format(label, "dd MMM yyyy")}</p>
        {payload.map((payload) => (
          <p
            key={payload.name}
          >{`${keyToTitle[payload.name!]}: ${payload.value}`}</p>
        ))}
      </div>
    );
  }

  return null;
}

export default ChartTooltip;
