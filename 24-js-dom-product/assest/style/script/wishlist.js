let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const wishlistProducts = document.getElementById("wishlistProducts");
const wishCount = document.querySelector(".number");

function updateWishlistCount() {
  wishCount.textContent = wishlist.length;
}

products.forEach((product) => {
  if (wishlist.includes(product.id)) {
    wishlistProducts.innerHTML += `
        <div class="card">
          <img src="${product.imageUrl}" alt="${product.title}">
          <h4>${product.title}</h4>
          <p>${product.price} $</p>
      <div class="card-footer">
          <i class="bx bx-heart heart active"
            onclick="toggleWishlist(${product.id}, this)"></i>
      </div>
        </div>
      `;
  }
});

function toggleWishlist(id, icon) {
  wishlist = wishlist.filter((item) => item !== id);
  icon.closest(".card").remove();
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
}

updateWishlistCount();