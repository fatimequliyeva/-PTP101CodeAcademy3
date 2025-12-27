const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const wishlistProducts = document.getElementById("wishlistProducts");

products.forEach(product => {
     const isLiked = wishlist.includes(product.id);
  if (wishlist.includes(product.id)) {
    wishlistProducts.innerHTML += `
      <div class="card">
        <img src="${product.imageUrl}" alt="${product.title}">
        <h4>${product.title}</h4>
        <p>${product.price} $</p>
         <i class='bx bx-heart heart ${isLiked ? "active" : ""}' 
           onclick="toggleWishlist(${product.id}, this)"></i>
      </div>
    `;
  }
});

function toggleWishlist(id, icon) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    icon.classList.remove("active");
  } else {
    wishlist.push(id);
    icon.classList.add("active");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
}

updateWishlistCount();
const wishlistLink = document.getElementById("wishlistLink");

wishlistLink.addEventListener("click", function() {
  // Səhifəni yenilə
  location.reload();
});
