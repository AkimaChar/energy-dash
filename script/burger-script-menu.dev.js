"use strict";

var menu_btn = document.querySelector('.burger-btn');
window.addEventListener('load', function () {
  if (document.querySelector('body').offsetWidth <= 680) {
    menu_btn.classList.toggle('active-burger');
  }
});
menu_btn.addEventListener('click', function () {
  document.querySelector('aside.aside').classList.toggle('active-aside');
});