"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Change active menu button
document.querySelectorAll(".nav_button").forEach(function (el) {
  el.classList.remove("active");
});
document.querySelector(".energy").classList.add("active"); // switch action type

var type_groups = _toConsumableArray(document.querySelectorAll(".energy_token_action_graph__action_type .type"));

var action_type_active_block = document.querySelector(".energy_token_action_graph__action_type .active_block");
type_groups.forEach(function (type) {
  type.onclick = function (e) {
    type_groups.map(function (type) {
      type.classList.remove("active");
      return type;
    });
    e.target.classList.add("active");
    action_type_active_block.classList.toggle("sell");
  };
}); // change input width on type
//change lang

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
window.addEventListener('load', function () {
  graphHeight = document.querySelector('.energy_token_action_graph__action_block').offsetHeight;
  graphWidth = graph.offsetWidth;
  console.log(graphHeight);
  console.log(graphWidth);
  chart.resize(graphWidth, graphHeight);
});