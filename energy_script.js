// Change active menu button
document.querySelectorAll(".nav_button").forEach((el) => {
  el.classList.remove("active");
});
document.querySelector(".energy").classList.add("active");

// switch action type
const type_groups = [
  ...document.querySelectorAll(".energy_token_action_graph__action_type .type"),
];
const action_type_active_block = document.querySelector(
  ".energy_token_action_graph__action_type .active_block"
);
type_groups.forEach((type) => {
  type.onclick = (e) => {
    type_groups.map((type) => {
      type.classList.remove("active");
      return type;
    });
    e.target.classList.add("active");
    action_type_active_block.classList.toggle("sell");
  };
});

// energy chart
const value = [];
const step = [];
const min = [];
const max = [];
const data = [];
function setData() {
  const url = "../json/price_data.json";
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      res.coin.forEach((el) => {
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
  const ctx = document.getElementById("myChart").getContext("2d");

  let myChart;
  const config = {
    type: "line",
    data: {
      labels: data,
      datasets: [
        {
          data: value,
          backgroundColor: ["#fff0"],
          borderColor: ["#00A3FF"],
          borderWidth: 1,
          tension: 0.5,
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent",
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              color: "rgba(255,255,255,0.2)",
              lineWidth: 0.1,
            },
          },
        ],
        yAxes: [
          {
            tooltips: {
              displayColors: false,
              backgroundColor: "#000000",
              bodyFontStyle: " normal",
              yPadding: 5,
              cornerRadius: 5,
            },
            ticks: {
              display: false,
              min: min[0],
              maxTicksLimit: 30,
              max: max[0],
              stepSize: step[0],
            },
            gridLines: {
              color: "rgba(255,255,255,0.2)",
              lineWidth: 0.1,
            },
          },
        ],
      },
    },
  };
  myChart = new Chart(ctx, config);
}

// switch details
const details_button = document.querySelector(".energy_details__button");
const details_block = document.querySelector(".energy_details__info");

details_button.addEventListener("click", (e) => {
  details_button.classList.toggle("active");
  details_block.classList.toggle("active");
});

// change input width on type
const input = document.getElementById("pay");
console.log(input);
input.onkeyup = (e) => {
  input.setAttribute("size", e.target.value.length);
};
input.onload = (e) => {
  input.setAttribute("size", e.target.value.length);
};


//change lang

var lang_list = document.querySelector('.lang-title');
lang_list.addEventListener('click', () => {
    document.querySelector('.lang-content').classList.toggle('active-lang-cont');
})
const selected_lang = document.querySelector('.lang-title > span');
var temp;

document.querySelectorAll('.lang-label').forEach(el => {
    el.addEventListener('click', () => {
        temp = selected_lang.getAttribute('data-lang');
        selected_lang.textContent = el.getAttribute('data-lang');
        selected_lang.setAttribute('data-lang', el.getAttribute('data-lang'));
        document.querySelector('.lang-content').classList.toggle('active-lang-cont');
    });
})