"use client";
import React, { useState } from "react";
import InputBox from "./InputBox";

const MiniRequestQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    quantity: "",
    boxStyle: "Gallant box style",
    productType: "",
    length: "",
    width: "",
    height: "",
    color: "Gallant color",
    comments: "",
    files: [] as File[],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="w-full p-6 rounded-lg  ring-1 ring-gray-200">
      <div className=" w-full">
        <div className="w-full flex-col flex space-y-2">
          <h1 className="text-2xl font-bold">Request Quote</h1>
          <p className="text-gray-600 text-sm">
            Fill out the form below to get a personalized quote
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col md:flex-row">
              <InputBox
                type="text"
                name="fullName"
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <InputBox
                type="text"
                name="email"
                label="Email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputBox
                type="text"
                name="contactNumber"
                label="Contact Number"
                placeholder="+1 (555) 000-0000"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 flex justify-center items-center space-x-1">
              <InputBox
                name="quantity"
                type="number"
                label="Stack Quantity"
                placeholder="Enter quantity needed"
                value={formData.quantity}
                onChange={handleChange}
              />
              <div className="w-full">
                <label htmlFor="">
                  Box Style
                  <select
                    id="gallantBox"
                    name="boxStyle"
                    value=""
                    onChange={handleChange}
                    className="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Box Style</option>
                    <option value="Type A">Type A</option>
                    <option value="Type B">Type B</option>
                    <option value="Type C">Type C</option>
                  </select>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
            >
              Submit Quick Request
            </button>
          </form>
        </div>

        {/* <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2">Premium Product Name</h2>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-600 ml-1">(AS) 5% reviews</span>
              </div>
  
              <div className="mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  In Black
                </span>
                <span className="text-sm text-gray-500">(Premium Quality)</span>
              </div>
  
              <p className="text-gray-700 mb-4">
                High-quality product with exceptional craftsmanship and attention to detail. Perfect
                for professional use with customizable options to meet your specific requirements.
              </p>
  
              <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                Product Image Placeholder
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default MiniRequestQuote;
