const timerDisplay = document.getElementById("timer");
const startStopBtn = document.getElementById("startstopBtn");
const resetBtn = document.getElementById("resetBtn");
const title = document.querySelector(".title");
const beep = document.getElementById("beep");
const pomodoroCountEl = document.getElementById("pomodoroCount");

const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

let timeLeft = WORK_TIME;
let totalTime = WORK_TIME;
let isRunning = false;
let isWorkSession = true;
let timerInterval = null;
let pomodoroCount = 0;

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = 0;

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec
        .toString()
        .padStart(2, "0")}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
    const progress = timeLeft / totalTime;
    circle.style.strokeDashoffset =
        circumference - progress * circumference;
}

function switchSession() {
    beep.play();

    if (isWorkSession) {
        pomodoroCount++;
        pomodoroCountEl.textContent = pomodoroCount;
        isWorkSession = false;
        totalTime = BREAK_TIME;
        timeLeft = BREAK_TIME;
        title.textContent = "Break Time!";
    } else {
        isWorkSession = true;
        totalTime = WORK_TIME;
        timeLeft = WORK_TIME;
        title.textContent = "Work Time!";
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (!isRunning) return;

        timeLeft--;
        updateDisplay();

        if (timeLeft === 0) {
            switchSession();
            updateDisplay();
        }
    }, 1000);
}

startStopBtn.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        startStopBtn.textContent = "Pause";
        title.textContent = isWorkSession ? "Work Time!" : "Break Time!";
        startTimer();
    } else {
        isRunning = false;
        startStopBtn.textContent = "Start";
        clearInterval(timerInterval);
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    isRunning = false;
    isWorkSession = true;
    timeLeft = WORK_TIME;
    totalTime = WORK_TIME;
    pomodoroCount = 0;

    pomodoroCountEl.textContent = 0;
    startStopBtn.textContent = "Start";
    title.textContent = "Click Start for Work Time";
    updateDisplay();
});

updateDisplay();
