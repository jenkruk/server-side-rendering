import React from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { createPageURL, CreateParameters } from "../helpers/createPageURL";

interface PaginationProps {
  isPlaceholderData: boolean;
  setPage: (page: string) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  isPlaceholderData,
  setPage,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const pageValue = Number(currentPage);

  return (
    <footer className="fixed bottom-0 bg-accent text-lightest left-0 w-full py-8 text-center flex px-24 justify-between shadow-top shadow-md">
      <Link
        onClick={() => {
          if (!isPlaceholderData && pageValue > 1) {
            const valueToString = String(pageValue - 1);
            setPage(valueToString);
          }
        }}
        href={
          pageValue > 1
            ? createPageURL(pageValue - 1, searchParams, pathname)
            : createPageURL(1, searchParams, pathname)
        }
        className={`py-2 border-t border-b border-prehover hover:border-lightest ${
          isPlaceholderData ||
          (pageValue < 2 && "opacity-50 cursor-not-allowed disabled")
        }`}
      >
        Previous Page
      </Link>
      <div className="pageNumber py-2"> Page {currentPage}</div>
      <Link
        onClick={() => {
          if (!isPlaceholderData && pageValue > 1) {
            const valueToString = String(pageValue + 1);
            setPage(valueToString);
          }
        }}
        href={createPageURL(pageValue + 1, searchParams, pathname)}
        className={`py-2 border-t border-b border-prehover hover:border-lightest ${
          isPlaceholderData && "opacity-50 cursor-not-allowed"
        }`}
      >
        Next Page
      </Link>
    </footer>
  );
};

export default Pagination;
