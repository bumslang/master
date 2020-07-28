import {Swiper} from "swiper";

const slider = document.querySelectorAll('.swiper-container');
const mobile = window.matchMedia("(max-width: 767px)");
let swiper = [];

mobile.addEventListener('change', initSlider);


function initSlider(){
  if (mobile.matches){
    for (let i = 0; i < slider.length; i++) {
      swiper[i] = new Swiper(slider[i], {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    for (let i = 0; i < swiper.length; i++) {
      swiper[i].destroy();
    } 
  }
} 

initSlider();
/* const serviceSlider = document.querySelector('.service__container');
const mobile = window.matchMedia("(max-width: 767px)");

let swiper;

mobile.addEventListener('change', initSlider);

initSlider();

function initSlider(){
  if (mobile.matches){
    swiper = new Swiper(serviceSlider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if(serviceSlider.classList.contains('swiper-container-initialized')){
    swiper.destroy()
  }
} */


/*
const showMore = document.querySelector('.more')
const serviceWrapper = document.querySelector(".service__wrapper");
const showMoreText = document.querySelector(".more__text");
const showMoreIcon = document.querySelector(".more__icon");

showMore.addEventListener('click', showElem);

function showElem(e){
 if (showMore) {
    console.log(e)
  }
  serviceWrapper.classList.toggle('service__wrapper--height');
    if (showMoreText.textContent == "Показать все") {
        showMoreText.textContent = "Скрыть";
        showMoreIcon.style.transform = "rotate(180deg)";
    } else {
        showMoreText.textContent = "Показать все";
        showMoreIcon.style.transform = "";
    }
}
 */

/* const showMore = document.querySelectorAll('.more');
const elem = document.querySelectorAll(".swiper-wrapper");
const showMoreText = document.querySelectorAll(".more__text");
const showMoreIcon = document.querySelectorAll(".more__icon");

for (let i = 0; i < showMore.length; i++) {
  showMore[i].addEventListener('click', checkElem);
}

function checkElem(e){
  if (e.currentTarget == showMore[1]) {
    showElem(1, 'service__wrapper--height');
  }
  if (e.currentTarget == showMore[0]) {
    showElem(0, 'brands__wrapper--height');
  }
}

function showElem(numb, classElem, ){
  elem[numb].classList.toggle(classElem);
  if (elem[numb].classList.contains(classElem)) {
      showMoreText[numb].textContent = "Скрыть";
      showMoreIcon[numb].style.transform = "rotate(180deg)";
  } else {
      showMoreText[numb].textContent = "Показать все";
      showMoreIcon[numb].style.transform = "";
  }
} */