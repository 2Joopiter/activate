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
		//만약 클릭한 버튼에 on이 있다면 return으로 함수실행 중지
		//만약 클릭한 버튼에 on이 없다면 해당 조건문이 무시되면서 activation 함수 호출
		if (btns[idx].classList.contains('on')) return;
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

function activation(arr, index) {
	console.log('activation');
	arr.forEach((el) => el.classList.remove('on'));
	arr[index].classList.add('on');
}
