interface Props {
  value: string | number;
  title: string;
}

const BookStatisticCard = (props: Props) => {
  const { value, title } = props;

  return (
    <div className="bg-gray-100 rounded-xl w-[170px] p-3">
      <p className="text-4xl text-center mb-3">{value}</p>
      <p className="text-center text-sm">{title}</p>
    </div>
  );
};

export default BookStatisticCard;
