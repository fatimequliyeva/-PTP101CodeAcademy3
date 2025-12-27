let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []; //varsa versin yoxdursa boqw erry
const productList = document.getElementById("productList"); //yaratdqm idni caqrdm
const wishCount = document.querySelector(".number");  //span reqem

function updateWishlistCount() {
  wishCount.textContent = wishlist.length; //spani deyisen xaraba
}

function toggleWishlist(id, icon) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter((item) => item !== id);
    icon.classList.remove("active");
  } else {
    wishlist.push(id);
    icon.classList.add("active");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
}

updateWishlistCount();


products.forEach((product) => {
  const isLiked = wishlist.includes(product.id);

  productList.innerHTML += `
    <div class="card">
      <img src="${product.imageUrl}" alt="${product.title}">
      <h4>${product.title}</h4>
            <p>${product.price} $</p>
      <div class="card-footer">
        <i class='bx bx-heart heart ${isLiked ? "active" : ""}' 
           onclick="toggleWishlist(${product.id}, this)"></i>
      </div>
    </div>
  `;
});
