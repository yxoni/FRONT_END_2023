/***  dom ***/

// var el = document.getElementById("brand-title")

// console.log(el);

// console.log(el.innerHTML);
// console.log(el.innerText);

// el.innerText = "안녕하세요 :)."


// var el = document.getElementsByClassName('sub-title');
// console.log(el);


/*** event ***/

/*

이벤트(event)

폼 이벤트
- 제출, 초기화

마우스 이벤트
- 클릭, 더블클릭, 마우스 이동

키보드 이벤트
- keydown, keypress, keyup

on + 이벤트 타입

*/


var el = document.getElementById('brand-title');

var myfunc = () => {
    alert('addEventListener')
};

el.addEventListener("click", myfunc);