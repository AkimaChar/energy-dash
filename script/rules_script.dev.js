"use strict";

// Change active menu button
document.querySelectorAll(".nav_button").forEach(function (el) {
  el.classList.remove("active");
});
document.querySelector(".wiki").classList.add("active");