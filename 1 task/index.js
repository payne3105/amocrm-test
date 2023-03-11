const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(() => {
      let hoursRes = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
      let minutesRes = Math.floor((seconds % (60 * 60)) / 60);
      let secondsRes = Math.floor(seconds % 60);

      if (hoursRes.toString().length == 1) {
        hoursRes = "0" + hoursRes;
      }
      if (minutesRes.toString().length == 1) {
        minutesRes = "0" + minutesRes;
      }
      if (secondsRes.toString().length == 1) {
        secondsRes = "0" + secondsRes;
      }

      timerEl.textContent = `${hoursRes}:${minutesRes}:${secondsRes}`;
      console.log(seconds);
      seconds--;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      alert("time is out!");
      timerEl.textContent = "hh:mm:ss";
    }, seconds * 1000 + 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  if (!(Number(inputEl.value) || inputEl.value == null)) {
    alert("enter only numbers");
  }
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
