// src/pages/Shop/Shop.jsx
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import SearchInput from "../../components/SearchInput";
import FilterBar from "../../components/FilterBar";
import { useGetProductsQuery } from "../../redux/services/productApi";

function Shop() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  // ✅ parametrlər productsApi.js-də qəbul ediləcək
  const { data: products = [], isLoading } = useGetProductsQuery({
    search,
    filter,
    sort,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <SearchInput onSearch={setSearch} />
        <FilterBar onFilter={setFilter} onSort={setSort} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
