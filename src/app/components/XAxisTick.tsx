import { XAxisProps } from "recharts";
import { format } from "date-fns";

const XAxisTick = (props: XAxisProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-65)"
      >
        {format(new Date(payload.value), "dd/MM")}
      </text>
    </g>
  );
};

export default XAxisTick;
