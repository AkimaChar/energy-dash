// Change active menu button
document.querySelectorAll('.nav_button').forEach(el => {
    el.classList.remove('active');
})
document.querySelector('.refferals').classList.add('active');

const ref_link = document.querySelector('.ref-link');

function copyLink() {
    var clipboard = new ClipboardJS('.ref-link');
    document.querySelector('.copy-msg').classList.add('active-copy-msg');
    setTimeout("document.querySelector('.copy-msg').classList.remove('active-copy-msg');", 1500);
}

ref_link.addEventListener('click', () => copyLink());

function setStyleToHead() {
    var style = document.createElement('style');
    var head = document.querySelector('head');
    var lvlTitleHeight = document.querySelector('.lvl-title ').clientHeight;
    var css = '.lvl-card-list::before {top:' + (lvlTitleHeight + 1) + 'px; height: ' + document.querySelector('.lvl-earn').clientHeight + 'px;}';
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
}

window.onload = setStyleToHead()
window.onload = () => {
    var lvlWidth = document.querySelector('.lvl-title ').clientWidth;
    document.querySelector('.col_1').style.width = lvlWidth + 'px';
    document.querySelectorAll('.col_2').forEach(el => {
        el.style.width = 2 * lvlWidth + 'px';
    })

}
window.addEventListener('resize', setStyleToHead());

