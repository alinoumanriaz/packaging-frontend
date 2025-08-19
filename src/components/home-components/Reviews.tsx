"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Entrepreneur",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam temporibus quidem magni qui doloribus quasi natus inventore nisi velit minima.",
    },
    {
      name: "Jane Smith",
      role: "Marketing Director",
      content:
        "Exceptional service and quality products. Our packaging needs were met perfectly with creative solutions that impressed our clients.",
    },
    {
      name: "Michael Johnson",
      role: "E-commerce Owner",
      content:
        "The team delivered exactly what we needed on time. The custom boxes helped elevate our brand presentation significantly.",
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      content:
        "Excellent attention to detail and fast turnaround times. Our products have never looked better!",
    },
    {
      name: "David Brown",
      role: "Retail Owner",
      content:
        "The packaging solutions provided were both eco-friendly and visually stunning. Highly recommended!",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true }}
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
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white ring-1 ring-gray-200 p-6 rounded-lg shadow-md h-full m-1 ">
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <p className="text-gray-600 line-clamp-3 mb-6">
                  {testimonial.content}
                </p>

                <div className="flex items-center">
                  <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
