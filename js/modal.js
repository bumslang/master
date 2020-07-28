const feedback = document.querySelector('.feedback')
const feedbackBlur = document.querySelector('.feedback__blur');
const chatDesktop= document.querySelector('.item--chat--desktop');
const chatNav = document.querySelector('.item--chat--nav');
const exitFeedback = document.querySelector('.item--feedback');
const feedbackElem = document.querySelector('.feedback__elem');

chatDesktop.addEventListener('click', showModal);
chatNav.addEventListener('click', showModal);
exitFeedback.addEventListener('click', showModal);
feedbackBlur.addEventListener('click', showModal);

const bell = document.querySelector('.bell')
const bellBlur = document.querySelector('.bell__blur');
const phone = document.querySelector('.item--phone--desktop');
const phoneNav = document.querySelector('.item--phone--nav');
const exitBell = document.querySelector('.item--bell');
const bellElem = document.querySelector('.bell__elem');

phone.addEventListener('click', showModal);
phoneNav.addEventListener('click', showModal);
exitBell.addEventListener('click', showModal);
bellBlur.addEventListener('click', showModal); 


function showModal(e) {
    if (e.currentTarget == phone || e.currentTarget == phoneNav || e.currentTarget == exitBell || e.currentTarget == bellBlur){
    bell.classList.toggle('bell--visible');
    }
    if (e.currentTarget == chatDesktop || e.currentTarget == chatNav || e.currentTarget == exitFeedback || e.currentTarget == feedbackBlur){
    feedback.classList.toggle('feedback--visible');
    }
}