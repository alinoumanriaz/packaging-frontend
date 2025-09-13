"use client";
import React, {
  useEffect,
  useReducer,
  useState,
  useRef,
  useCallback,
} from "react";
import Popup from "./popups/Popup";
import { FiSearch, FiX } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { GET_PAGINATED_PRODUCT_WITH_SEARCH } from "@/graphql/queries/product.query";
import { useQuery } from "@apollo/client";
import {
  filterReducer,
  initialFilterState,
} from "@/useReducerHooks/industries-filter-reducer";
import ProductCard, { ProductCardProps } from "./ProductCard";
import PaginationClient from "./PaginationClient";

interface Props {
  onClose: () => void;
}

const ITEMS_PER_PAGE = 15;

const SearchBox = ({ onClose }: Props) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);
  const { currentPage, searchText } = state;
  const [debouncedSearch, setDebouncedSearch] = useState(searchText);
  const [esc, setEsc] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus input on mount and add keyboard listener
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchText]);

  const { data, loading, error } = useQuery(GET_PAGINATED_PRODUCT_WITH_SEARCH, {
    variables: {
      page: currentPage,
      limit: ITEMS_PER_PAGE,
      search: debouncedSearch || undefined,
    },
    fetchPolicy: "network-only",
  });

  const allData: ProductCardProps[] =
    data?.getPaginatedProducts?.products || [];
  const totalProducts = data?.getPaginatedProducts?.totalProducts || 0;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const handlePageChange = useCallback((page: number) => {
    dispatch({ type: "SET_PAGE", payload: page });
    if (resultsRef.current) {
      resultsRef.current.scrollTop = 0;
    }
  }, []);

  const clearSearch = () => {
    dispatch({ type: "SET_SEARCH", payload: "" });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Popup>
      <div 
        ref={containerRef}
        className="bg-white md:rounded-xl pb-2 shadow-2xl w-full max-w-5xl h-dvh md:h-auto flex flex-col"
        // style={{ 
        //   maxHeight: '90vh',
        //   height: 'auto',
        //   minHeight: '300px'
        // }}
      >
        {/* Header with close button for mobile */}
        {/* <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
          <h2 className="text-lg font-semibold text-gray-800">Search Products</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            aria-label="Close search"
          >
            <RxCross2 className="size-5" />
          </button>
        </div> */}

        {/* Search input section */}
        <div className="p-4 md:p-6 md:pb-4">
          <div className="flex md:items-center md:space-x-4 space-x-2 space-y-0">
            <div className="flex-1 flex items-center border border-gray-200 rounded-xl px-3 md:px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200 shadow-sm bg-gray-50">
              <FiSearch className="text-gray-400 size-4 md:size-5 mr-2 md:mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchText}
                onChange={(e) =>
                  dispatch({ type: "SET_SEARCH", payload: e.target.value })
                }
                placeholder="Search products..."
                className="w-full outline-none text-gray-800 placeholder-gray-500 bg-transparent text-sm md:text-base"
              />
              {searchText && (
                <button
                  onClick={clearSearch}
                  className="p-1 text-gray-400 hover:text-gray-600 ml-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
                  aria-label="Clear search"
                >
                  <FiX className="size-3 md:size-4" />
                </button>
              )}
            </div>
            
            {/* Desktop close button */}
            <div className="flex items-center">
              <button
                onClick={onClose}
                onMouseEnter={() => setEsc(false)}
                onMouseLeave={() => setEsc(true)}
                className="p-2 w-12 h-10 flex justify-center items-center text-gray-400 ring-1 ring-gray-200 shadow-md hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="Close search"
              >
                {esc ? <div className="text-xs">ESC</div> : <RxCross2 className="size-4" />}
              </button>
            </div>
          </div>

          {/* Results summary */}
          {!loading && searchText && (
            <div className="mt-3 md:mt-4 flex justify-between items-center">
              <p className="text-xs md:text-sm text-gray-600">
                {totalProducts > 0 ? (
                  <>
                    Found{" "}
                    <span className="font-semibold text-gray-800">
                      {totalProducts}
                    </span>
                    {totalProducts === 1 ? " product" : " products"}
                  </>
                ) : (
                  <>No results found</>
                )}
              </p>
              {totalProducts > ITEMS_PER_PAGE && (
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                  Page {currentPage} of {totalPages}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results section with fixed footer space for pagination */}
        <div 
          ref={resultsRef} 
          className="flex-1 overflow-y-auto px-4 md:px-6 pb-4"
          
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center py-8 md:py-12">
              <div className="animate-spin rounded-full h-8 md:h-10 w-8 md:w-10 border-b-2 border-blue-500 mb-3 md:mb-4"></div>
              <p className="text-gray-500 text-sm">Searching products...</p>
            </div>
          ) : error ? (
            <div className="py-6 md:py-8 text-center">
              <div className="inline-flex items-center justify-center w-10 md:w-12 h-10 md:h-12 bg-red-50 rounded-full mb-3">
                <FiX className="text-red-500 text-lg md:text-xl" />
              </div>
              <p className="text-red-600 font-medium text-sm md:text-base mb-1">
                Error loading results
              </p>
              <p className="text-gray-500 text-xs md:text-sm">Please try again later</p>
            </div>
          ) : allData.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {allData.map((product, idx) => (
                  <div
                    key={product._id || idx}
                    className="animate-fadeIn"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <ProductCard data={product} />
                  </div>
                ))}
              </div>
            </>
          ) : searchText.length > 0 ? (
            <div className="py-8 md:py-12 text-center">
              <div className="inline-flex items-center justify-center w-12 md:w-16 h-12 md:h-16 bg-gray-100 rounded-full mb-4">
                <FiSearch className="text-gray-400 text-xl md:text-2xl" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-gray-700 mb-2">
                No results found
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                Try different keywords or check spelling
              </p>
            </div>
          ) : (
            <div className="py-12 md:py-16 text-center">
              <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-blue-50 rounded-full mb-4 md:mb-5 mx-auto">
                <FiSearch className="text-blue-500 text-2xl md:text-3xl" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-2">
                Search for products
              </h3>
              <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
                Enter keywords to find products in our catalog
              </p>
            </div>
          )}
        </div>

        {/* Pagination - Always at the bottom */}
        {!loading && allData.length > 0 && totalPages > 1 && (
          <div className=" bg-white sticky bottom-0 z-10">
            <div className="px-2 md:p-6">
              <PaginationClient
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={ITEMS_PER_PAGE}
                totalItems={totalProducts}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </Popup>
  );
};

export default SearchBox;