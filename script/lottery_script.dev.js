"use strict";

// Change active menu button
document.querySelectorAll('.nav_button').forEach(function (el) {
  el.classList.remove('active');
});
document.querySelector('.lottery').classList.add('active'); // Navigation menu switcher

var navBtnList = document.querySelectorAll('button.nav_button');
navBtnList.forEach(function (element) {
  element.addEventListener('click', function () {
    navBtnList.forEach(function (element) {
      element.classList.remove('active');
    });
    element.classList.toggle('active');
  });
});