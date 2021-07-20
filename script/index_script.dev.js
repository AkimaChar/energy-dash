"use strict";

// Slider switcher 
var slider_navBtnList = document.querySelectorAll('.item_plank');
var slider_slidesList = document.querySelectorAll('.item');

function active_plank_switcher(el, lenght_slide) {
  var active_plank = document.querySelector('.active_plank').id.replace(/[^\d]/g, '');
  var clicked_button = el.id;
  var new_active_plank;
  var planks_count = document.querySelector('.nav-planks').childElementCount;
  slider_navBtnList.forEach(function (element) {
    element.classList.remove('active_plank');
  });

  if (lenght_slide == undefined) {
    if (clicked_button == 'right' && active_plank != planks_count) {
      new_active_plank = +active_plank + 1 + '-plank';
    } else if (clicked_button == 'right' && active_plank == planks_count) {
      new_active_plank = '1-plank';
    } else if (clicked_button == 'left' && active_plank == 1) {
      new_active_plank = planks_count + '-plank';
    } else if (clicked_button == 'left' && active_plank != 1) {
      new_active_plank = +active_plank - 1 + '-plank';
    }
  } else if (lenght_slide != undefined) {
    new_active_plank = lenght_slide + '-plank';
    document.getElementById(new_active_plank).classList.toggle('active_plank');
    return 0;
  }

  document.getElementById(new_active_plank).classList.toggle('active_plank');
}

function active_slide_switcher(el, lenght_slide) {
  var active_slide = document.querySelector('.active_item');
  var active_slide_id = document.querySelector('.active_item').id.replace(/[^\d]/g, '');
  var clicked_button = el.id;
  var new_active_slide;
  var width = active_slide.clientWidth;
  var N = +active_slide_id;
  var slides_count = document.querySelector('.slider-items').childElementCount;
  slider_slidesList.forEach(function (element) {
    element.classList.remove('active_item');
  });

  if (lenght_slide == undefined) {
    if (clicked_button == 'right' && active_slide_id != slides_count) {
      N++;
      new_active_slide = document.getElementById(N + '-item');
      new_active_slide.classList.toggle('active_item');
    } else if (clicked_button == 'left' && active_slide_id != 1) {
      N--;
      new_active_slide = document.getElementById(N + '-item');
      new_active_slide.classList.toggle('active_item');
    } else if (clicked_button == 'right' && active_slide_id == slides_count) {
      new_active_slide = document.getElementById('1-item');
      document.getElementById('1-item').style.marginLeft = 0;
      new_active_slide.classList.toggle('active_item');
      return 0;
    } else if (clicked_button == 'left' && active_slide_id == 1) {
      new_active_slide = document.getElementById(slides_count + '-item');
      document.getElementById('1-item').style.marginLeft = "-" + width * (slides_count - 1) + "px";
      new_active_slide.classList.toggle('active_item');
      return 0;
    }
  } else if (lenght_slide != undefined) {
    document.getElementById('1-item').style.marginLeft = "-" + width * (lenght_slide - 1) + "px";
    new_active_slide = document.getElementById(lenght_slide + '-item');
    new_active_slide.classList.toggle('active_item');
    return 0;
  }

  document.getElementById('1-item').style.marginLeft = "-" + width * (N - 1) + "px";
}

function slider_switch(el, lenght_slide) {
  active_slide_switcher(el, lenght_slide);
  active_plank_switcher(el, lenght_slide);
}

var right = document.getElementById('right');
var left = document.getElementById('left');
slider_navBtnList.forEach(function (element) {
  element.addEventListener('click', function () {
    var active_slide_id = document.querySelector('.active_item').id.replace(/[^\d]/g, '');
    var element_id = element.id.replace(/[^\d]/g, '');

    if (element_id > active_slide_id) {
      slider_switch(right, +element_id);
    } else if (element_id < active_slide_id) {
      slider_switch(left, +element_id);
    }
  });
}); // Slider autoscroll

setInterval(function () {
  slider_switch(right);
}, 6000); // Active pool switch

document.querySelectorAll('.pools-article_button').forEach(function (el) {
  el.addEventListener('click', function () {
    document.querySelectorAll('.pools-article_button').forEach(function (el) {
      el.classList.remove('active_article_btn');
    });
    el.classList.toggle('active_article_btn');
  });
}); // Change task visibility 

var change_button = document.querySelector('.change-list-visibility');
change_button.addEventListener('click', function () {
  document.querySelector('.svg-arrow').classList.toggle('active-rot-svg');
  document.querySelector('.assigments-list').classList.toggle('opened-list');
});