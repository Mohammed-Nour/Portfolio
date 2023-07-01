let ourSkillsSection = document.querySelector(".our-skills") as HTMLDivElement;
let progress = document.querySelectorAll(".our-skills .container .skills .skill .progress span") as NodeListOf<HTMLSpanElement>;
let statsSection = document.querySelector(".stats") as HTMLDivElement;
let numbers = document.querySelectorAll(".stats .container .boxes .box .number") as NodeListOf<HTMLSpanElement>;
let check = false; // If Check Is False Then Function Will Work

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!check) {
      numbers.forEach((element) => counting(element));
      check = true;
    }
  } else if (window.scrollY >= ourSkillsSection.offsetTop) {
    progress.forEach((element) => {
      if(element.dataset.width)  {
        element.style.width = element.dataset.width ;
      }
    });
  }
};
function counting(element: HTMLSpanElement) {
  let goal = Number(element.dataset.goal);
  let count = setInterval(() => {
    let currentCount = Number(element.textContent);
    element.textContent = String(currentCount + 1);
    if (currentCount == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
