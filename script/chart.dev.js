"use strict";

//Graph
var value = [];
var time = [];

function getData() {
  var url = '../json/price_data.json';
  fetch(url).then(function (res) {
    return res.json();
  }).then(function (res) {
    res.coin.forEach(function (el) {
      value.push(el.value);
      time.push(el.time);
    });
  });
}

getData();
var chart = LightweightCharts.createChart(document.querySelector('.graph-body'), {
  localization: {
    DateFormat: 'yyyy/MM/dd' // priceFormatter: price => '$ ' + price,

  },
  layout: {
    backgroundColor: '#FAEBD700',
    textColor: 'rgba(70, 130, 180, 0.5)',
    fontSize: 14
  },
  grid: {
    vertLines: {
      color: 'rgba(70, 130, 180, 0.2)',
      style: 1
    },
    horzLines: {
      color: 'rgba(70, 130, 180, 0.2)',
      style: 1
    }
  },
  priceScale: {
    borderColor: 'rgba(70, 130, 180, 0.1)'
  }
});
var graph = document.querySelector('.graph-body');
var graphWidth;
var graphHeight;
window.addEventListener('resize', function () {
  graphHeight = graph.offsetHeight;
  graphWidth = graph.offsetWidth;
  chart.resize(graphWidth, graphHeight);
});
var lineSeries = chart.addLineSeries({
  lineWidth: 1
});
lineSeries.setData([{
  time: "2019-09-09",
  value: 80
}, {
  time: "2019-09-10",
  value: 81
}, {
  time: "2019-09-11",
  value: 88
}, {
  time: "2019-09-12",
  value: 82
}, {
  time: "2019-09-13",
  value: 80
}, {
  time: "2019-09-14",
  value: 89
}, {
  time: "2019-09-15",
  value: 82
}, {
  time: "2019-09-16",
  value: 86
}, {
  time: "2019-09-17",
  value: 87
}, {
  time: "2019-09-18",
  value: 85
}, {
  time: "2019-09-19",
  value: 85
}, {
  time: "2019-09-20",
  value: 81
}, {
  time: "2019-09-21",
  value: 88
}, {
  time: "2019-09-22",
  value: 82
}, {
  time: "2019-09-23",
  value: 80
}, {
  time: "2019-09-24",
  value: 89
}, {
  time: "2019-09-25",
  value: 82
}, {
  time: "2019-09-26",
  value: 86
}, {
  time: "2019-09-27",
  value: 87
}, {
  time: "2019-09-28",
  value: 85
}]);
chart.timeScale().fitContent();
/*function drawChart() {
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
                        display: false,
                    },
                    gridLines: {
                        color: 'rgba(255,255,255,0.2)',
                        lineWidth: 0.1,
                        zeroLineColor: 'rgba(255,255,255, 0)'
                    }
                }],
                yAxes: [{
                    tooltips: {
                        displayColors: false,
                        backgroundColor: '#000000',
                        bodyFontStyle: ' normal',
                        yPadding: 5,
                        cornerRadius: 5,
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
                        lineWidth: 0.1,
                        zeroLineColor: 'rgba(255,255,255, 0)'
                    }
                }]
            },
            tooltips: {
                titleFontSize: 15,
                bodyFontSize: 14
            }
        }
    };
    myChart = new Chart(ctx, config);
} // ---------------------------------------------- */