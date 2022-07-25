const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparent');
    }
});

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');


li.forEach(el => {
    el.addEventListener('click', function () {
        ul.querySelector('.active').classList.remove('active');
        el.classList.add('active');
    });
});