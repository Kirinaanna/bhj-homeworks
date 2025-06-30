function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        }

        if (Number(dead.textContent) === 10) {
            alert('Победа!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
        if (Number(lost.textContent) === 5) {
            alert('Вы проиграли!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}