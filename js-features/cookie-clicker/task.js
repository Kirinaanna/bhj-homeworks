const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let isBig = true;

cookie.onclick = function () {
    clickCount++;
    counter.textContent = clickCount;
    if (isBig) {
        cookie.width = 150;
        cookie.height = 150;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
    isBig = !isBig;
};
