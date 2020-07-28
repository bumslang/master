const burger = document.querySelector('.item--burger');
const exit = document.querySelector('.item--rotate')
const nav = document.querySelector('.nav');
const blurElem = document.querySelector('.blur');


burger.addEventListener('click', showNav);
exit.addEventListener('click', showNav);
blurElem.addEventListener('click', showNav);

 function showNav(e){
    nav.classList.toggle('hidden');
    blurElem.classList.toggle('visible');
    if (document.body.clientWidth == 360) {
        nav.style.width = '360px';
    }
}
