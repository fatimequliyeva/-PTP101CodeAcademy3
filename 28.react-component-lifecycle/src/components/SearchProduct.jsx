function SearchProduct({ setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search product..."
      onChange={handleChange}
    />
  );
}

export default SearchProduct;
