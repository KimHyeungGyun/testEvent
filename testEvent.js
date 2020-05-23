let menus = document.querySelectorAll('button'); //모든 버튼을 가져옵니다.

let btnAmericano = menus[0];
let btnCaffelatte = menus[1];

btnAmericano.onclick = handleClick;
btnCaffelatte.onclick = handleClick; // 이상으로 for 문으로 충분히 구현할 수 있는 내용입니다.

function handleClick(event) {
    let outPut = event.toElement;
    if (outPut === menus[0]) {
        console.log("아메리카노를 주문 하셨습니다.");
    }
    else if (outPut === menus[1]) {
        console.log("카페라떼를 주문 하셨습니다.");
    }
}      