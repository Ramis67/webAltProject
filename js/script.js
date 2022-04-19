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