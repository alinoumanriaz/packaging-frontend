"use client";
import { useState } from "react";
import InputBox from "./InputBox";
import { FiUpload, FiX, FiFile, FiImage } from "react-icons/fi";

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    quantity: "",
    boxStyle: "",
    productType: "",
    length: "",
    width: "",
    height: "",
    color: "",
    comments: "",
    files: [] as File[],
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [loading, setLoading] = useState(false); // Added missing loading state

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);
    const existingFilesSize = formData.files.reduce(
      (acc, file) => acc + file.size,
      0
    );
    const combinedSize = totalSize + existingFilesSize;

    if (combinedSize > 10 * 1024 * 1024) {
      setError("Total file size cannot exceed 10MB");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...selectedFiles],
    }));

    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    setUploadProgress(0);

    if (!formData.fullName || !formData.email || !formData.contactNumber) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      // Simulated upload progress (optional)
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 200);

      // 🔧 Build form data
      const formPayload = new FormData();
      formPayload.append("name", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.contactNumber);

      if (formData.productType)
        formPayload.append("material", formData.productType);
      if (formData.boxStyle) formPayload.append("style", formData.boxStyle);
      if (formData.quantity) formPayload.append("stock", formData.quantity);
      if (formData.length) formPayload.append("length", formData.length);
      if (formData.width) formPayload.append("width", formData.width);
      if (formData.height) formPayload.append("height", formData.height);
      if (formData.color) formPayload.append("color", formData.color);
      if (formData.comments) formPayload.append("comments", formData.comments);

      // Append files
      formData.files.forEach((file) => {
        formPayload.append("files", file); // must match `upload.array('files')` in backend
      });

      // 🔥 Send REST request
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/order-save`,
        {
          method: "POST",
          body: formPayload,
          headers:{
            "x-secret-key": process.env.NEXT_PUBLIC_API_SECRET_KEY!,
          }
        }
      );

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.error || "Failed to submit quote request"
        );
      }

      // await response.json();

      // ✅ Success
      setSuccess("Quote request submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        quantity: "",
        boxStyle: "",
        productType: "",
        length: "",
        width: "",
        height: "",
        color: "",
        comments: "",
        files: [],
      });

      // Reset progress after a short delay
      setTimeout(() => setUploadProgress(0), 1000);
    } catch (err: any) {
      console.error("Error creating order:", err);
      setError(err.message || "Failed to submit quote request");
      setUploadProgress(0);
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="w-full py-6 px-6">
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-xl font-semibold md:mb-3 mb-2">Request Quote</h1>

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
            <div className="mb-4 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <InputBox
                type="text"
                name="fullName"
                label="Full Name *"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <InputBox
                type="email"
                name="email"
                label="Email *"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputBox
                type="tel"
                name="contactNumber"
                label="Contact Number *"
                placeholder="+1 (555) 000-0000"
                value={formData.contactNumber}
                onChange={handleChange}
              />
              <InputBox
                name="quantity"
                type="number"
                label="Stack Quantity"
                placeholder="Enter quantity needed"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Box Style
                </label>
                <select
                  name="boxStyle"
                  value={formData.boxStyle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Box Style</option>
                  <option value="Mailer Boxes">Mailer Boxes</option>
                  <option value="Gable Boxes">Gable Boxes</option>
                  <option value="Folding Cartons">Folding Cartons</option>
                  <option value="Rigid Boxes">Rigid Boxes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Material
                </label>
                <select
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Material</option>
                  <option value="Corrugated Cardboard">
                    Corrugated Cardboard
                  </option>
                  <option value="Kraft Paper">Kraft Paper</option>
                  <option value="Cardstock">Cardstock</option>
                  <option value="Recycled Material">Recycled Material</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Color
                </label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Color</option>
                  <option value="White">White</option>
                  <option value="Kraft (Brown)">Kraft (Brown)</option>
                  <option value="Black">Black</option>
                  <option value="Custom">Custom (Specify in comments)</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">
                Dimensions (cm)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputBox
                  type="number"
                  name="length"
                  placeholder="Length"
                  value={formData.length}
                  onChange={handleChange}
                />
                <InputBox
                  type="number"
                  name="width"
                  placeholder="Width"
                  value={formData.width}
                  onChange={handleChange}
                />
                <InputBox
                  type="number"
                  name="height"
                  placeholder="Height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                Additional Comments
              </label>
              <textarea
                name="comments"
                placeholder="Any specific requirements, printing needs, or additional information."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                Attachments (Optional)
              </label>

              <div
                className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-blue-400 transition-colors mb-4"
                onClick={() => document.getElementById("fileUpload")?.click()}
              >
                <FiUpload className="mx-auto text-2xl text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">
                  Click to upload files or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Maximum file size: 10MB total
                </p>

                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
              </div>

              {formData.files.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    {formData.files.length} file(s) selected
                  </p>
                  {formData.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                    >
                      <div className="flex items-center">
                        {file.type.startsWith("image/") ? (
                          <FiImage className="text-gray-500 mr-3" />
                        ) : (
                          <FiFile className="text-gray-500 mr-3" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <FiX />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {uploadProgress > 0 && (
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {uploadProgress < 100
                    ? `Uploading... ${uploadProgress}%`
                    : "Processing..."}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-800 text-white py-3 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-800 focus:ring-offset-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Quote Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
