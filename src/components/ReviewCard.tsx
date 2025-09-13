import Image from "next/image";
import React from "react";
import { FiStar } from "react-icons/fi";
import { formatDate } from "./ReadableDate";

interface Review {
  _id: string;
  customerName: string;
  slug: string;
  imageUrl: string;
  content: string;
  createdAt: string;
  rating?: number;
}

interface ReviewCardProps {
  review: Review;
  className?: string;
  style?: React.CSSProperties;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, className = "", style }) => {


  // Generate star ratings (if rating is available)
  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${className}`}
      style={style}
    >
      <div className="p-6">
        {/* Header with customer info */}
        <div className="flex items-center mb-4">
          {review.imageUrl ? (
            <Image
              src={review.imageUrl}
              alt={review.customerName}
              width={50}
              height={50}
              className="h-12 w-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-lg mr-4">
              {review.customerName.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <h3 className="font-semibold text-gray-900">{review.customerName}</h3>
            <p className="text-sm text-gray-500">{formatDate(review?.createdAt)}</p>
          </div>
        </div>

        {/* Rating */}
        {renderStars(review.rating)}

        {/* Review Content */}
        <div className="mb-4">
          <p className="text-gray-700 line-clamp-4">{review.content}</p>
        </div>

        {/* Read More Link */}
        {/* <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Read full review
        </button> */}
      </div>
    </div>
  );
};

export default ReviewCard;