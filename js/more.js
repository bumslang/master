const showMore = document.querySelectorAll('.more');
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
}