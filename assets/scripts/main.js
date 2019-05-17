function showMessage() {
  let overlay = document.querySelector("#overlay");
  console.log("message button clicked");

  overlay.classList.add("show");
}

function hideOverlay() {
  let overlay = document.querySelector("#overlay");
  console.log("overlay clicked!");
  overlay.classList.remove("show");
}

window.onload = function() {
  console.log("page loaded!");

  let message_btn = document.querySelector(".message_btn");
  let overlay = document.querySelector("#overlay");

  overlay.onclick = function(e) {
    e.preventDefault();
    hideOverlay();
  };

  message_btn.onclick = function(e) {
    e.preventDefault();
    showMessage();
  };
};
