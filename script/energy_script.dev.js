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
}); // energy chart

var value = [];
var step = [];
var min = [];
var max = [];
var data = [];

function setData() {
  var url = "../json/price_data.json";
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (res) {
    res.coin.forEach(function (el) {
      value.push(el.value);
      min.push(el.min);
      max.push(el.max);
      data.push(el.data);
      step.push(el.step);
    });
    drawChart();
    console.log(1);
  });
}

setData();

function drawChart() {
  if (myChart) {
    myChart.destroy();
  }

  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart;
  var config = {
    type: "line",
    data: {
      labels: data,
      datasets: [{
        data: value,
        backgroundColor: ["#fff0"],
        borderColor: ["#00A3FF"],
        borderWidth: 1,
        tension: 0.5,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent"
      }]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(255,255,255,0.2)",
            lineWidth: 0.1
          }
        }],
        yAxes: [{
          tooltips: {
            displayColors: false,
            backgroundColor: "#000000",
            bodyFontStyle: " normal",
            yPadding: 5,
            cornerRadius: 5
          },
          ticks: {
            display: false,
            min: min[0],
            maxTicksLimit: 30,
            max: max[0],
            stepSize: step[0]
          },
          gridLines: {
            color: "rgba(255,255,255,0.2)",
            lineWidth: 0.1
          }
        }]
      }
    }
  };
  myChart = new Chart(ctx, config);
} // switch details


var details_button = document.querySelector(".energy_details__button");
var details_block = document.querySelector(".energy_details__info");
details_button.addEventListener("click", function (e) {
  details_button.classList.toggle("active");
  details_block.classList.toggle("active");
}); // change input width on type

var input = document.getElementById("pay");
console.log(input);

input.onkeyup = function (e) {
  input.setAttribute("size", e.target.value.length);
};

input.onload = function (e) {
  input.setAttribute("size", e.target.value.length);
};