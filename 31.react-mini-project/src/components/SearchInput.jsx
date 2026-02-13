import React from "react";

const SearchInput = () => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
};

export default SearchInput;
