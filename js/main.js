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
	btn.addEventListener('click', (e) => {
		console.log(e.currentTarget);
		console.log(e.target);
		// e.currentTarget: js 이벤트 구문에 연결되어있는 선택자가 선택 (코드상의 대상)
		// e.target: 실제 화면상에서 이벤트가 발생한 대상이 선택됨 (보다 디테일함)

		//만약 연결되어있는 선택자가 a요소의 링크 이동처럼 특정 기능이 있는 요소일시 해당 기능을 막아야 될 필요가 있음.
		e.preventDefault(); // 브라우저 기본요소를 막는 코드

		if (e.currentTarget.classList.contains('on')) return;
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

function activation(arr, index) {
	console.log('activation');
	arr.forEach((el) => el.classList.remove('on'));
	arr[index].classList.add('on');
}
