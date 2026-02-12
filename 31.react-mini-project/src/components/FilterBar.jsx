// src/components/FilterBar.jsx
import { useState } from "react";

function FilterBar({ onSearch, onFilter, onSort }) {
  const [query, setQuery] = useState("");

  // Search input dəyişəndə debounce ilə işləyəcək
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      {/* Search */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
        className="border px-3 py-2 rounded w-64"
      />

      {/* Filter by category */}
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="">All Categories</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Juice">Juice</option>
        <option value="Dried">Dried</option>
      </select>

      {/* Sort */}
      <select
        onChange={(e) => onSort(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="name_asc">Name: A-Z</option>
        <option value="name_desc">Name: Z-A</option>
      </select>
    </div>
  );
}

export default FilterBar;
