const ul_1 = document.querySelector('#option1');
const ul_2 = document.querySelector('#option2');
const ul_3 = document.querySelector('#option3');
const ul_4= document.querySelector('#option4');
const ul_5 = document.querySelector('#option5');


ul_1.addEventListener('click', (event) => {
	ul_1.style.backgroundColor = '#3EFF00';
});

ul_2.addEventListener('click', (event) => {
	ul_2.style.backgroundColor = '#3EFF00';
});

ul_3.addEventListener('click', (event) => {
	ul_3.style.backgroundColor = '#3EFF00';
});

ul_4.addEventListener('click', (event) => {
	ul_4.style.backgroundColor = '#3EFF00';
});

ul_5.addEventListener('click', (event) => {
	ul_5.style.backgroundColor = '#3EFF00';
});

function falsed(self) {
	self.style.backgroundColor = '#FF0000';
	self.style.color = '#FFFFFF';
}
