const menu_btn = document.querySelector('.burger-btn');

menu_btn.addEventListener('click', () => {
    document.querySelector('aside.aside').classList.toggle('active-aside');
});