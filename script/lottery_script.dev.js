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
}); //change lang

var lang_list = document.querySelector('.lang-title');
lang_list.addEventListener('click', function () {
  document.querySelector('.lang-content').classList.toggle('active-lang-cont');
});
var selected_lang = document.querySelector('.lang-title > span');
var temp;
document.querySelectorAll('.lang-label').forEach(function (el) {
  el.addEventListener('click', function () {
    temp = selected_lang.getAttribute('data-lang');
    selected_lang.textContent = el.getAttribute('data-lang');
    selected_lang.setAttribute('data-lang', el.getAttribute('data-lang'));
    document.querySelector('.lang-content').classList.toggle('active-lang-cont');
  });
});