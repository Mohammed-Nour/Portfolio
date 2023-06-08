let ourSkillsSection = document.querySelector(".our-skills");
let progress = document.querySelectorAll(
  ".our-skills .container .skills .skill .progress span"
);
let statsSection = document.querySelector(".stats");
let numbers = document.querySelectorAll(
  ".stats .container .boxes .box .number"
);
let check = false; // If Check Is False Then Function Will Work
window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!check) {
      numbers.forEach((element) => counting(element));
      check = true;
    }
  } else if (window.scrollY >= ourSkillsSection.offsetTop) {
    progress.forEach((element) => {
      element.style.width = element.dataset.width;
    });
  }
};
function counting(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// CountDown Date
let countDownDate = new Date("Jan 1, 2026 12:00:00").getTime();
let dates = document.querySelectorAll(
  ".events .container .info .time .unit .date"
);
let counterDate = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  if (dateDiff < 0) {
    clearInterval(counterDate);
  }
  days < 10
    ? (dates[0].textContent = `0${days}`)
    : (dates[0].textContent = days);
  hours < 10
    ? (dates[1].textContent = `0${hours}`)
    : (dates[1].textContent = hours);
  minutes < 10
    ? (dates[2].textContent = `0${minutes}`)
    : (dates[2].textContent = minutes);
  seconds < 10
    ? (dates[3].textContent = `0${seconds}`)
    : (dates[3].textContent = seconds);
}, 1000);
