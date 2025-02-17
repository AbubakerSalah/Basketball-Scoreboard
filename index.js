"use strict";
let outputHome = document.getElementById("output-home");
const homePlus1 = document.getElementById("home-plus1");
const homePlus2 = document.getElementById("home-plus2");
const homePlus3 = document.getElementById("home-plus3");
const outputGuest = document.getElementById("output-guest");
const guestPlus1 = document.getElementById("guest-plus1");
const guestPlus2 = document.getElementById("guest-plus2");
const guestPlus3 = document.getElementById("guest-plus3");
const resetButton = document.getElementById("reset-button");
const startButton = document.getElementById("start-button");
const timerDisplay = document.getElementById("timer-display");
let homeScore = 0;
let guestScore = 0;
let gameDuration = 720;
let countdownInterval;
let gameHasstared = false;
homePlus1.addEventListener("click", function () {
    homeScore += 1;
    if (outputHome)
        outputHome.textContent = homeScore.toString();
    checkLeader();
    startGame();
});
homePlus2.addEventListener("click", function () {
    homeScore += 2;
    if (outputHome)
        outputHome.textContent = homeScore.toString();
    checkLeader();
    startGame();
});
homePlus3.addEventListener("click", function () {
    homeScore += 3;
    if (outputHome)
        outputHome.textContent = homeScore.toString();
    checkLeader();
    startGame();
});
guestPlus1.addEventListener("click", function () {
    guestScore += 1;
    if (outputGuest)
        outputGuest.textContent = guestScore.toString();
    checkLeader();
    startGame();
});
guestPlus2.addEventListener("click", function () {
    guestScore += 2;
    if (outputGuest)
        outputGuest.textContent = guestScore.toString();
    checkLeader();
    startGame();
});
guestPlus3.addEventListener("click", function () {
    guestScore += 3;
    if (outputGuest)
        outputGuest.textContent = guestScore.toString();
    checkLeader();
    startGame();
});
function checkLeader() {
    if (homeScore > guestScore) {
        outputHome.classList.add("leader");
        outputGuest.classList.remove("leader");
    }
    else if (guestScore > homeScore) {
        outputGuest.classList.add("leader");
        outputHome.classList.remove("leader");
    }
    else {
        outputHome.classList.remove("leader");
        outputGuest.classList.remove("leader");
    }
}
function resetScores() {
    homeScore = 0;
    guestScore = 0;
    if (outputHome)
        outputHome.textContent = homeScore.toString();
    if (outputGuest)
        outputGuest.textContent = guestScore.toString();
    outputHome.classList.remove("leader");
    outputGuest.classList.remove("leader");
    clearInterval(countdownInterval);
    gameDuration = 720;
    updateTimerDisplay();
    gameHasstared = false;
}
resetButton.addEventListener("click", resetScores);
function startGame() {
    if (gameHasstared) {
        return;
    }
    gameHasstared = true;
    countdownInterval = setInterval(function () {
        if (gameDuration > 0) {
            gameDuration--;
            updateTimerDisplay();
        }
        else {
            clearInterval(countdownInterval);
            alert("Game Over!");
        }
    }, 1000);
}
function updateTimerDisplay() {
    const minutes = Math.floor(gameDuration / 60);
    const seconds = gameDuration % 60;
    timerDisplay.textContent =
        `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
startButton.addEventListener("click", startGame);
