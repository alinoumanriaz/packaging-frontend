// components/Pagination.tsx
"use client";

import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination = ({ currentPage, totalPages, itemsPerPage, totalItems }: Props) => {
  const renderPageNumbers = () => {
    const pages: React.JSX.Element[] = [];

    for (let i = 1; i <= totalPages; i++) {
      // Show all pages if totalPages is small
      if (totalPages <= 7 || i === 1 || i === totalPages || Math.abs(currentPage - i) <= 1) {
        pages.push(
          <Link
            key={i}
            href={`/blog?page=${i}`}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
              i === currentPage
                ? "z-10 bg-primary-800 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            }`}
          >
            {i}
          </Link>
        );
      } else if (
        (i === currentPage - 2 || i === currentPage + 2) &&
        !pages.some((page) => page?.key === `ellipsis-${i}`)
      ) {
        pages.push(
          <span
            key={`ellipsis-${i}`}
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
          >
            ...
          </span>
        );
      }
    }

    return pages;
  };

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      {/* Mobile view */}
      <div className="flex flex-1 justify-between sm:hidden">
        {currentPage > 1 ? (
          <Link
            href={`/blog?page=${currentPage - 1}`}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </Link>
        ) : (
          <span className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-300 cursor-not-allowed">
            Previous
          </span>
        )}
        {currentPage < totalPages ? (
          <Link
            href={`/blog?page=${currentPage + 1}`}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </Link>
        ) : (
          <span className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-300 cursor-not-allowed">
            Next
          </span>
        )}
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startItem}</span> to{" "}
            <span className="font-medium">{endItem}</span> blogs of{" "}
            <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {currentPage > 1 ? (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <span className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-300 cursor-not-allowed">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}

            {renderPageNumbers()}

            {currentPage < totalPages ? (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <span className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-300 ring-1 ring-inset ring-gray-300 cursor-not-allowed">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;