let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
const productList = document.getElementById("productList");
const wishCount = document.querySelector(".number");

function updateWishlistCount() {
  wishCount.textContent = wishlist.length;
}

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

products.forEach(product => {
  const isLiked = wishlist.includes(product.id);

  productList.innerHTML += `
    <div class="card">
      <img src="${product.imageUrl}" alt="${product.title}">
      <h4>${product.title}</h4>
      <div class="card-footer">
        <p>${product.price} $</p>
        <i class='bx bx-heart heart ${isLiked ? "active" : ""}' 
           onclick="toggleWishlist(${product.id}, this)"></i>
      </div>
    </div>
  `;
});
