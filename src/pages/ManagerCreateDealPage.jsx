// src/pages/ManagerCreateDealPage.jsx
import React, { useState } from "react";
import Header from "../components/Header"; // Assuming you have a Header component

const ManagerCreateDealPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    discount: "",
    condition: "",
    restaurant: "",
    description: "",
    location: "",
    rate: 0,
    timeLeft: "",
    imageSrc: null, // Will hold the selected image variable or file
    dealIcon: null, // Will hold the selected deal icon variable or file
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0], // Store the file object
      }));
    }
  };

  const handleRateChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setFormData((prev) => ({
      ...prev,
      rate: value >= 0 && value <= 5 ? value : prev.rate,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (
      !formData.title ||
      !formData.discount ||
      !formData.condition ||
      !formData.restaurant ||
      !formData.description ||
      !formData.location ||
      !formData.timeLeft ||
      formData.rate < 0 ||
      formData.rate > 5
    ) {
      setError("All fields are required, and rate must be between 0 and 5.");
      return;
    }

    // Simulate adding the deal (replace with your API call or state update logic)
    console.log("New Deal Created:", formData);

    // Reset form
    setFormData({
      title: "",
      discount: "",
      condition: "",
      restaurant: "",
      description: "",
      location: "",
      rate: 0,
      timeLeft: "",
      imageSrc: null,
      dealIcon: null,
    });
  };

  return (
    <div>
      <Header isClaimedDealsPage={true} />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Create New Deal
          </h1>
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded-lg">
              {error}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter deal title"
                aria-required="true"
              />
            </div>

            {/* Discount */}
            <div className="mb-4">
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Discount
              </label>
              <input
                type="text"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter discount (e.g., 50% off your next meal)"
                aria-required="true"
              />
            </div>

            {/* Condition */}
            <div className="mb-4">
              <label
                htmlFor="condition"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Condition
              </label>
              <textarea
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter deal condition"
                aria-required="true"
              />
            </div>

            {/* Restaurant */}
            <div className="mb-4">
              <label
                htmlFor="restaurant"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Restaurant
              </label>
              <input
                type="text"
                id="restaurant"
                name="restaurant"
                value={formData.restaurant}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter restaurant name"
                aria-required="true"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24"
                placeholder="Enter restaurant description"
                aria-required="true"
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter location"
                aria-required="true"
              />
            </div>

            {/* Image Src */}
            <div className="mb-4">
              <label
                htmlFor="imageSrc"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Deal Image
              </label>
              <input
                type="file"
                id="imageSrc"
                name="imageSrc"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                accept="image/*"
              />
            </div>

            {/* Deal Icon */}
            <div className="mb-4">
              <label
                htmlFor="dealIcon"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Deal Icon
              </label>
              <input
                type="file"
                id="dealIcon"
                name="dealIcon"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                accept="image/*"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              Create Deal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManagerCreateDealPage;
