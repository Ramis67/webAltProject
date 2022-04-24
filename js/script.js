const text = document.querySelector('.header__howwework__text');
const arrowDown = document.querySelector('.header__howwework__arrow');
const arrowUp = document.querySelector('.header__howwework__arrow_up');

console.log(text);
console.log(arrowDown);
console.log(arrowUp);

let state = 'none';

arrowDown.addEventListener('click', function(){
	if (state === 'none'){
    text.style.display = 'block';
		arrowUp.style.display = 'block';
    arrowDown.style.display = 'none';
    state = 'block';
	}
})

arrowUp.addEventListener('click', function(){
  if (state === 'block'){
    text.style.display = 'none';
		arrowUp.style.display = 'none';
    arrowDown.style.display = 'block';
    state = 'none';
	}
})


const openPopUp = document.querySelector('.desktop__detailed');
const popUp = document.querySelector('.popUp');
const popUpContainer = document.querySelector('.popUpContainer');
const popUpBody = document.querySelector('.popUpBody');

openPopUp.addEventListener('click', function(){
  popUp.classList.add('active');
})

popUpContainer.addEventListener('click', function(event){
    if (event.target === popUpBody){
      popUp.classList.add('active');
    }
    else {
      popUp.classList.remove('active');
    }
})