function SearchProduct({ setSearchTerm }) {  //burdadad props destrung olunur tebiki
  const handleChange = (e) => {  //mene event gelri
    setSearchTerm(e.target.value);  //hemin eventin valusini goturem
  };
  //yalniz bir input qaytaracq ve input deysidike her yaizda yenilecek 
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
