//import {Swiper} from "swiper";
//import Swiper from 'swiper';
//import Swiper, { Navigation, Pagination } from 'swiper';

const brandsSlider = document.querySelector('.brands__container');
const mobile = window.matchMedia("(max-width: 767px)");
let swiper;
mobile.addListener(destroySlider);

destroySlider();

function destroySlider(){
  if (mobile.matches){
    swiper = new Swiper(brandsSlider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if(brandsSlider.classList.contains('swiper-container-initialized') && document.body.clientWidth >= 768){
    swiper.destroy()
  }
}


const showMore = document.querySelector('.brands__more')
const brandsWrapper = document.querySelector(".brands__wrapper");
const showMoreText = document.querySelector(".brands__more--text");
const showMoreIcon = document.querySelector(".brands__more--icon");

showMore.addEventListener('click', showElem);

function showElem(e){
 
    brandsWrapper.classList.toggle('brands__wrapper--height');
    if (showMoreText.textContent == "Показать все") {
        showMoreText.textContent = "Скрыть";
        showMoreIcon.style.transform = "rotate(180deg)";
    } else {
        showMoreText.textContent = "Показать все";
        showMoreIcon.style.transform = "";
    }
  }
 
}