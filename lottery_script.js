// Change active menu button
document.querySelectorAll('.nav_button').forEach(el => {
    el.classList.remove('active');
})
document.querySelector('.lottery').classList.add('active');

// Navigation menu switcher
const navBtnList = document.querySelectorAll('button.nav_button');
navBtnList.forEach((element) => {
    element.addEventListener('click', () => {
        navBtnList.forEach((element) => {
            element.classList.remove('active');
        });
        element.classList.toggle('active');
    })
});
