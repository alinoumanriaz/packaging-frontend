"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Titles from "@/components/Titles";
import Container from "../Container";

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const testimonials = [
    {
      name: "John Doe",
      role: "Entrepreneur",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima. The quality of packaging exceeded our expectations and helped us stand out in the market.",
      date: "Oct 12, 2023",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Marketing Director",
      content:
        "Exceptional service and quality products. Our packaging needs were met perfectly with creative solutions that impressed our clients. The attention to detail and customer service was outstanding throughout the process.",
      date: "Sep 28, 2023",
      rating: 5,
    },
    {
      name: "Michael Johnson",
      role: "E-commerce Owner",
      content:
        "The team delivered exactly what we needed on time. The custom boxes helped elevate our brand presentation significantly. We've received numerous compliments from customers about our packaging.",
      date: "Nov 5, 2023",
      rating: 4,
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      content:
        "Excellent attention to detail and fast turnaround times. Our products have never looked better! The sustainable materials were a big plus for our eco-conscious brand.",
      date: "Aug 17, 2023",
      rating: 5,
    },
    {
      name: "David Brown",
      role: "Retail Owner",
      content:
        "The packaging solutions provided were both eco-friendly and visually stunning. Highly recommended! We've seen an increase in repeat orders since upgrading our packaging.",
      date: "Oct 30, 2023",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Creative Director",
      content:
        "Working with this team was a pleasure from start to finish. They understood our vision and executed it perfectly. The packaging has become part of our brand identity now.",
      date: "Sep 10, 2023",
      rating: 4,
    },
  ];

  // Render star ratings based on the rating value
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, idx) => (
      <svg
        key={idx}
        className={`w-4 h-4 ${
          idx < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <Container>
      <div className="mx-auto w-full">
        <div className="text-center mb-12">
          <Titles
            title="Customer Reviews"
            subtitle="Discover what our clients say about our packaging solutions and services"
          />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".review-pagination",
            bulletClass: "review-bullet",
            bulletActiveClass: "review-bullet-active",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="pb-16 relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="px-1">
              <div className="p-6 rounded-xl shadow-sm my-4 h-full flex flex-col transition-all duration-300 hover:shadow-md ring-1 ring-gray-200 bg-white">
                <div className="mb-4 flex-grow">
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-br from-primary-800 to-primary-800 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-xs text-gray-500">
                      {testimonial.date}
                    </span>
                  </div>

                  <div className="bg-green-50 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-green-800 mb-3">
                    ✓ Verified Buyer
                  </div>

                  <p
                    className={`text-gray-600 text-sm mb-3 ${
                      expandedReviews[index] ? "" : "line-clamp-4"
                    }`}
                  >
                    {testimonial.content}
                  </p>
                </div>

                {testimonial.content.length > 150 && (
                  <button
                    onClick={() => toggleReview(index)}
                    className="text-sm text-primary-800 hover:text-parimary-800 font-medium mt-auto"
                  >
                    {expandedReviews[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </SwiperSlide>
          ))}

          {/* Custom navigation buttons */}
          <div className="review-swiper-button-next bg-black/60 absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer rounded-full shadow-md p-2 hidden md:flex items-center justify-center w-10 h-10">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="review-swiper-button-prev bg-black/60 hover:bg-primary-800 absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer rounded-full shadow-md p-2 hidden md:flex items-center justify-center w-10 h-10">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </Swiper>
      </div>

      <style jsx>{`
        .review-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          border-radius: 50%;
          display: inline-block;
          margin: 0 4px;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .review-bullet-active {
          background: #3b82f6;
          opacity: 1;
          width: 24px;
          border-radius: 8px;
        }
        .review-swiper-button-next:hover,
        .review-swiper-button-prev:hover {
          background: #3b82f6;
        }
        .review-swiper-button-next:hover svg,
        .review-swiper-button-prev:hover svg {
          color: white;
        }
      `}</style>
    </Container>
  );
};

export default Reviews;
