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

// change input width on type


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

window.addEventListener('load', () => {
  graphHeight = document.querySelector('.energy_token_action_graph__action_block').offsetHeight;
  graphWidth = graph.offsetWidth;
  console.log(graphHeight);
  console.log(graphWidth);
  chart.resize(graphWidth, graphHeight)
})