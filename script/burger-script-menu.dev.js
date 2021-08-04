"use strict";

var menu_btn = document.querySelector('.burger-btn');
menu_btn.addEventListener('click', function () {
  document.querySelector('aside.aside').classList.toggle('active-aside');
});