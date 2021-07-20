"use strict";

//Graph
var value = [];
var step = [];
var min = [];
var max = [];
var data = [];

function setData() {
  var url = '../json/price_data.json';
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

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart;
  var config = {
    type: 'line',
    data: {
      labels: data,
      datasets: [{
        data: value,
        backgroundColor: ['#fff0'],
        borderColor: ['#00A3FF'],
        borderWidth: 1,
        tension: 0.5,
        pointBorderColor: 'transparent',
        pointBackgroundColor: 'transparent'
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
            color: 'rgba(255,255,255,0.2)',
            lineWidth: 0.1
          }
        }],
        yAxes: [{
          tooltips: {
            displayColors: false,
            backgroundColor: '#000000',
            bodyFontStyle: ' normal',
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
            color: 'rgba(255,255,255,0.2)',
            lineWidth: 0.1
          }
        }]
      }
    }
  };
  myChart = new Chart(ctx, config);
} // ----------------------------------------------