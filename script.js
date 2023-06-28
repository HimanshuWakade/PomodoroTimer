const timerE1 = document.getElementById("timer");

const startEl = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");

let interval;
let timeLeft = 1500; //1500s = 25min

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  timerE1.innerHTML = formattedTime;
}
function startTimer() {
  interval = setInterval(() => {
    timeLeft--; //decrease top to bottom every one second
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Times up!");
      timeLeft = 1500;
      updateTimer();
    }
    // console.log("timer");
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startEl.addEventListener("click", startTimer);
stopE1.addEventListener("click", stopTimer);
resetE1.addEventListener("click", resetTimer);

// alt+shift+arrow⬇
