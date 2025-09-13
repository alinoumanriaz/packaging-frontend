"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_REVIEWS } from "@/graphql/queries/review.query";
import { FiSearch, FiStar } from "react-icons/fi";
import PaginationClient from "@/components/PaginationClient";
import ReviewCard from "@/components/ReviewCard";

interface Review {
  _id: string;
  customerName: string;
  slug: string;
  imageUrl: string;
  content: string;
  createdAt: string;
  rating?: number;
}

const ReviewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const itemsPerPage = 9;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1); 
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data, loading, error } = useQuery(GET_ALL_REVIEWS, {
    variables: {
      page: currentPage,
      limit: itemsPerPage,
      search: debouncedSearch || undefined,
    },
    fetchPolicy: "network-only",
  });

  const reviews: Review[] = data?.getAllReviews?.reviews || [];
  const totalReviews = data?.getAllReviews?.totalReviews || 0;
  const totalPages = Math.ceil(totalReviews / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Reviews</h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our customers have to say about their experience with our products and services.
          </p>
        </div>

        {/* Search Bar */}
        {/* <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search reviews by customer name or content..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
            />
          </div>
        </div> */}

        {/* Results Summary */}
        {!loading && (
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              {totalReviews > 0 ? (
                <>
                  Showing {((currentPage - 1) * itemsPerPage) + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, totalReviews)} of{" "}
                  <span className="font-semibold">{totalReviews}</span> reviews
                  {debouncedSearch && (
                    <> for<span className="font-semibold">{debouncedSearch}</span></>
                  )}
                </>
              ) : (
                <>No reviews found{debouncedSearch && ` for "${debouncedSearch}"`}</>
              )}
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && reviews.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {reviews.map((review, index) => (
                <ReviewCard
                  key={review._id}
                  review={review}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <PaginationClient
                  currentPage={currentPage}
                  totalPages={totalPages}
                  itemsPerPage={itemsPerPage}
                  totalItems={totalReviews}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && reviews.length === 0 && debouncedSearch && (
          <div className="text-center py-20">
            <FiSearch className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews found</h3>
            <p className="text-gray-600">
              Try different search terms or browse all reviews.
            </p>
          </div>
        )}

        {!loading && reviews.length === 0 && !debouncedSearch && (
          <div className="text-center py-20">
            <FiStar className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
            <p className="text-gray-600">
              Be the first to leave a review for our products.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;