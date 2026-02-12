// src/components/SearchInput.jsx
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function SearchInput({ onSearch }) {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 400); // 400ms debounce

  // Debounced value dəyişəndə parent-ə ötürürük
  // (Shop səhifəsində filter üçün istifadə olunacaq)
  React.useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search products..."
      className="border px-3 py-2 rounded w-64"
    />
  );
}

export default SearchInput;
