"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const pollTitleElement = document.getElementById("poll__title");
    const pollAnswersContainer = document.getElementById("poll__answers");

    function renderPoll(pollPayload) {
        if (!pollPayload || !pollPayload.data) {
            return;
        }

        const { title, answers } = pollPayload.data;

        pollTitleElement.textContent = title || "";
        pollAnswersContainer.innerHTML = "";

        answers.forEach((answerText) => {
            const answerButton = document.createElement("button");
            answerButton.className = "poll__answer";
            answerButton.textContent = answerText;
            answerButton.addEventListener("click", () => {
                alert("Спасибо, ваш голос засчитан!");
            });
            pollAnswersContainer.appendChild(answerButton);
        });
    }

    function loadRandomPoll() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
        xhr.addEventListener("load", () => {
            try {
                const responseJson = JSON.parse(xhr.responseText);
                renderPoll(responseJson);
            } catch (_error) {
                // ignore parse errors for this task
            }
        });
        xhr.send();
    }

    loadRandomPoll();
});


