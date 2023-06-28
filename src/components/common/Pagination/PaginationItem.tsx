interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  number,
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <button className="bg-white w-[30px] h-[30px] font-PJ font-bold text-blue-secondary-blue text-xl text-center flex justify-center items-center border-[1px] rounded-[8px] border-blue-secondary-blue">
        {number}
      </button>
    );
  }

  return (
    <button
      onClick={() => onPageChange(number)}
      className="bg-white p-2 font-PJ font-regular text-gray-primary-gray text-lg text-center flex justify-center items-center"
    >
      {number}
    </button>
  );
}
