import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  const result = [];
  for (let initial = from; from <= to; from++) {
    result.push(initial);
  }
  return result;
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1 ? generatePagesArray(1, currentPage - 1) : [];
  const nextPages =
    currentPage < lastPage ? generatePagesArray(currentPage + 1, lastPage) : [];

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex items-center gap-2">
        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        <PaginationItem
          isCurrent
          number={currentPage}
          onPageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}
      </div>
    </div>
  );
}
