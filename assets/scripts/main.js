function showCart() {
  let overlay = document.querySelector("#overlay");
  console.log("cart button clicked");

  overlay.classList.add("show");
}

function hideOverlay() {
  let overlay = document.querySelector("#overlay");
  console.log("overlay clicked!");
  overlay.classList.remove("show");
}

window.onload = function() {
  console.log("page loaded!");

  let cart_btn = document.querySelector("header .cart");
  let overlay = document.querySelector("#overlay");

  overlay.onclick = function(e) {
    e.preventDefault();
    hideOverlay();
  };

  cart_btn.onclick = function(e) {
    e.preventDefault();
    showCart();
  };
};
