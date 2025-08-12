import { useState } from "react";
import InputBox from "./InputBox";

export default function RequestQuote() {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        files: Array.from(e.target.files as FileList),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="w-full py-6 rounded-lg ">
      <div className="">
        <div>
          <h1 className="text-2xl font-bold mb-6">Request Quote</h1>
          <p className="text-gray-600 mb-6">
            Fill out the form below to get a personalized quote
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex">
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

            <div className="mb-4">
              <InputBox
                name="quantity"
                type="number"
                label="Stack Quantity"
                placeholder="Enter quantity needed"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <h2 className="text-xl font-bold mb-4">Product Specifications</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Box Style
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="gallantBox"
                  name="boxStyle"
                  value="Gallant box style"
                  checked={formData.boxStyle === "Gallant box style"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="gallantBox">Gallant box style</label>
              </div>

              <select
                name="productType"
                value={formData.productType}
                onChange={handleChange}
                className="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select product type</option>
                <option value="Type A">Type A</option>
                <option value="Type B">Type B</option>
                <option value="Type C">Type C</option>
              </select>
            </div>

            <div className="mb-4">
              <label className=" text-gray-700 font-sm mb-2">
                Dimensions (cm)
              </label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <input
                    type="number"
                    name="length"
                    placeholder="Length"
                    className="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.length}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="width"
                    placeholder="Width"
                    className="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.width}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="height"
                    placeholder="Height"
                    className="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-sm mb-2">
                Preferred Color
              </label>
              <select
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Gallant color">Gallant color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Black">Black</option>
              </select>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="mb-4">
              <label className="block text-gray-700 font-sm mb-2">
                Additional Comments
              </label>
              <textarea
                name="comments"
                placeholder="Any specific requirements or additional information."
                className="w-full px-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Attachments
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
                <label htmlFor="fileUpload" className="cursor-pointer block">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-1 text-sm text-gray-600">
                    Drop files here or{" "}
                    <span className="text-blue-600 font-medium">
                      click to upload
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {formData.files.length > 0
                      ? `${formData.files.length} file(s) selected`
                      : "Choose Files"}
                  </p>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
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
}
