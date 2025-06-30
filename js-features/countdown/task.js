const timerElement = document.getElementById('timer');
let timeLeft = Number(timerElement.textContent);

const intervalId = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
    }
}, 1000);
