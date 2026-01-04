import React from "react";

const Category = ({ data }) => {
  // Extract unique categories
  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <div className="w-full p-8">
      {/* Page Title */}
      <h1 className="text-3xl md:text-2xl font-bold text-center text-green-900 mb-8">
        Explore Categories
      </h1>

      {/* Marquee Section */}
      <div className="overflow-hidden relative border-2 border-gray-300 rounded-lg bg-white shadow-sm py-4">
        <div
          className="whitespace-nowrap animate-marquee flex space-x-10 px-2"
          style={{ display: "inline-flex" }}
        >
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="px-6 py-2 bg-green-900 text-white rounded-full font-medium text-lg shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

     
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Category;
