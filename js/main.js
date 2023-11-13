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
		//클릭시 해당 li의 글자 확인
		console.log(e.currentTarget.innerText);

		// 클릭한 li에 글자값을 순번으로 변경 (innerText객체의 key이기 때문에 대입연산자로 값 변경 가능)
		// e.currentTarget.innerText = idx + 1;

		// 클릭한 li의 글자값을 가져와서 <span>으로 감싼 다음에 li에 innerHTML로 등록
		e.currentTarget.innerHTML = `<span>${e.currentTarget.innerText}</span>`;
	});
});

console.dir(btns[0]);
//DOM 안에서 자주 쓰이는 유용한 property
//DOM.innerText : 해당 돔에 연결되어 있는 text값을 확인 가능
//DOM.innerHTML : 해당 돔에 연결되어 있는 tag요소를 확인 가능
//DOM.className : 해당 돔에 연결되어 있는 모든 클래스명을 문자열로 확인 가능
