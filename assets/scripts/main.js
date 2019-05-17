// toggle visibility on the navigation
function navSwitch() {
  console.log("nav button clicked");
  let nav = document.querySelector(".nav_list");

  // check if the nav list already is showing
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
}

// page loaded
window.onload = function() {
  console.log("page loaded!");

  // put elements into variables
  let nav_toggle = document.querySelector(".nav_switch");
  let nav_item = document.querySelectorAll(".nav_list li");

  // for each of the nav items selected, run this onclick listener
  for (i = 0; i < nav_item.length; i++) {
    nav_item[i].onclick = function() {
      console.log("nav item clicked");
      navSwitch();
    };
  }

  // when clicking the nav toggle button, fire this function
  nav_toggle.onclick = function(e) {
    e.preventDefault();
    navSwitch();
  };
};
