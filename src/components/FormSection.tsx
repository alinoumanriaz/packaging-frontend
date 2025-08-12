import { ChangeEvent } from 'react';

interface FormSectionProps {
  formData: {
    fullName: string;
    email: string;
    contactNumber: string;
    quantity: string;
    boxStyle: string;
    productType: string;
    length: string;
    width: string;
    height: string;
    color: string;
    comments: string;
    files: File[];
  };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormSection({ formData, handleChange, handleFileChange }: FormSectionProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 md:mb-6">Request Quote</h1>
      <p className="text-gray-600 mb-6">Fill out the form below to get a personalized quote</p>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="contactNumber">
            Contact Number
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2" htmlFor="quantity">
            Stack Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter quantity needed"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="border-t border-gray-200 my-4 md:my-6"></div>

        <h2 className="text-xl font-bold">Product Specifications</h2>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Box Style</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="gallantBox"
              name="boxStyle"
              value="Gallant box style"
              checked={formData.boxStyle === 'Gallant box style'}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="gallantBox">Gallant box style</label>
          </div>

          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select product type</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
            <option value="Type C">Type C</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Dimensions (cm)</label>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div>
              <input
                type="number"
                name="length"
                placeholder="Length"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.length}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="number"
                name="width"
                placeholder="Width"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.width}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="number"
                name="height"
                placeholder="Height"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.height}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Preferred Color</label>
          <select
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Gallant color">Gallant color</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
          </select>
        </div>

        <div className="border-t border-gray-200 my-4 md:my-6"></div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Additional Comments</label>
          <textarea
            name="comments"
            placeholder="Any specific requirements or additional information."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Attachments</label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 md:p-6 text-center">
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              multiple
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer block"
            >
              <svg
                className="mx-auto h-8 w-8 md:h-12 md:w-12 text-gray-400"
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
                Drop files here or{' '}
                <span className="text-blue-600 font-medium">click to upload</span>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {formData.files.length > 0
                  ? `${formData.files.length} file(s) selected`
                  : 'Choose Files'}
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}