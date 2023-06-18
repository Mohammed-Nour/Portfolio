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
