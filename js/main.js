/*
const bnt = document.querySelectorAll('li');
const box = document.querySelectorAll('article');

btn.forEach((data, index) => {
	data.addeventlistener('click', () => {
		box.classList.add('on');
	});
});
*/

const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		//직전에 모든 요소 초기화
		btns.forEach((btn) => btn.classList.remove('on'));
		// 클릭한 순번에 해당하는 버튼만 활성화
	});
});

boxs.forEach((box, idx) => {
  btn.addEventListener('click', ()=>{
    boxs.forEach((btn) => btn.classList.remove('on'));
    boxs[idx].classList.add
  })
})
