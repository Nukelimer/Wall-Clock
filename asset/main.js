const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digital = document.querySelector('.digital');

function watchHandler() {
  const GETNEWDATE = new Date();
  const getSeconds = GETNEWDATE.getSeconds();
  const sumSeconds = (getSeconds / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${sumSeconds}deg)`;

  const getMinutes = GETNEWDATE.getMinutes();
  const sumMinutes = (getMinutes / 60) * 360 + (getSeconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${sumMinutes}deg)`;

  const getHour = GETNEWDATE.getHours();
  const sumHours = (getHour / 12) * 360 + (getMinutes / 60) * 30 + 90;

  hourHand.style.transform = `rotate(${sumHours}deg)`;
}

setInterval(watchHandler, 1000);

watchHandler();

function digitalTime() {
  const newDate = new Date();
  const currentTime = newDate.toLocaleTimeString();
  digital.textContent = currentTime;
}

setInterval(digitalTime, 1000);

digitalTime();
