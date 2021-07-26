// Change active menu button
document.querySelectorAll(".nav_button").forEach((el) => {
  el.classList.remove("active");
});
document.querySelector(".wiki").classList.add("active");