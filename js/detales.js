let readMore = document.querySelector('.detales__more');
let hiddenText = document.querySelector('.detales__caption--tablet');
let hiddenAllText = document.querySelector('.detales__caption--desktop');
let descriptionMoreNext = document.querySelector('.detales__more--next');
let descriptionMoreIcon = document.querySelector('.detales__more--icon');

function showText(){
    hiddenText.classList.toggle('detales--visible');
    hiddenAllText.classList.toggle('detales--visible');
    descriptionMoreIcon.classList.toggle('detales__more--transform');
    if (hiddenText.classList.contains('detales--visible')) {
        descriptionMoreNext.textContent = 'Скрыть';
    } else {
        descriptionMoreNext.textContent = 'Читать далее';
    }
}

readMore.addEventListener('click', showText);