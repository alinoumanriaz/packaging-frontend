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
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!formData.fullName || !formData.email || !formData.contactNumber) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.contactNumber);
      if (formData.boxStyle) formPayload.append("style", formData.boxStyle);
      if (formData.quantity) formPayload.append("stock", formData.quantity);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/order-save`,
        {
          method: "POST",
          body: formPayload,
          headers: {
            "x-secret-key": process.env.NEXT_PUBLIC_API_SECRET_KEY!,
          },
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.error || "Failed to submit quote request"
        );
      }

      // ✅ Success
      setSuccess("Quote request submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        quantity: "",
        boxStyle: "Gallant box style",
      });
    } catch (err: any) {
      console.error("Error creating order:", err);
      setError(err.message || "Failed to submit quote request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-6 rounded-lg ring-1 ring-gray-200">
      <div className="w-full flex-col flex space-y-2">
        <h1 className="md:text-2xl text-xl font-bold">Request Quote</h1>
        <p className="text-gray-600 text-sm">
          Fill out the form below to get a personalized quote
        </p>

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

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
              <label>
                Box Style
                <select
                  id="gallantBox"
                  name="boxStyle"
                  value={formData.boxStyle}
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
            disabled={loading}
            className="w-full bg-primary-800 transition-all duration-300 ease-in-out text-white py-3 px-4 rounded-md hover:scale-[101%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Quick Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MiniRequestQuote;
