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
        <p class="destrp">${product.category}</p>
        <p>${product.price} $</p>
        <button class="remove" onclick="toggleWishlist(${product.id}, this)">
          Remove from Wishlist
        </button>
      </div>
    `;
  }
});


function toggleWishlist(id,button){
  wishlist=wishlist.filter((item)=>item !==id);
  button.closest(".card").remove();
  localStorage.setItem("wishlist",JSON.stringify(wishlist));
    updateWishlistCount()
}





// function toggleWishlist(id, icon) {
//   wishlist = wishlist.filter((item) => item !== id);
//   icon.closest(".card").remove();
//   localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   updateWishlistCount();
// }

// updateWishlistCount();

  //  <i class="bx bx-heart heart active"
  //           onclick="toggleWishlist(${product.id}, this)"></i>