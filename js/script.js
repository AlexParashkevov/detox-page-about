//carousel next
let butt = document.querySelectorAll(".carousel-box a");
butt.forEach(function (el) {
  el.onclick = function () {
    console.log(el);
    let container = document.querySelector(".section2-2");
    sideScroll(container, "right", 25, 250, 8);
  };
});
//carousel next - 2
let butt2 = document.querySelectorAll(".carousel-box-3 a");
butt2.forEach(function (el) {
  el.onclick = function () {
    console.log(el);
    let container = document.querySelector(".section6-2");
    sideScroll(container, "right", 25, 250, 8);
  };
});
//carousel next - 3
let butt3 = document.querySelectorAll(".carousel-box-2 a");
butt3.forEach(function (el) {
  el.onclick = function () {
    console.log(el);
    let container = document.querySelector(".section5-2");
    sideScroll(container, "right", 25, 250, 8);
  };
});
function sideScroll(element, direction, speed, distance, step) {
  scrollAmount = 0;
  let slideTimer = setInterval(function () {
    if (direction == "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}
//bar
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const text = document.querySelector(".text");

const bar = document.querySelector(".bar");

button1.addEventListener("click", () => {
  console.log("hello");
  button2.style.color = "#BEBEBE";
  bar.style.width = "33.3%";
  button3.style.color = "#BEBEBE";
  text.style.display = "block";
});

button2.addEventListener("click", () => {
  button2.style.color = "#000000";
  bar.style.width = "49%";
  button3.style.color = "#BEBEBE";
  text.style.display = "none";
});

button3.addEventListener("click", () => {
  button2.style.color = "#000000";
  button3.style.color = "#000000";
  bar.style.width = "100%";
  text.style.display = "none";
});

//bar 2

const button1bar2 = document.querySelector(".bar-container-2 .button1");
const button2bar2 = document.querySelector(".bar-container-2 .button2");
const button3bar2 = document.querySelector(".bar-container-2 .button3");
const button4bar2 = document.querySelector(".bar-container-2 .button4");

const textbar2 = document.querySelector(".sec4-text");

const barbar2 = document.querySelector(".bar-container-2 .bar");

button1bar2.addEventListener("click", () => {
  button2bar2.style.color = "#BEBEBE";
  barbar2.style.width = "20%";
  button3bar2.style.color = "#BEBEBE";
  button4bar2.style.color = "#BEBEBE";
  textbar2.style.display = "block";
});

button2bar2.addEventListener("click", () => {
  button2bar2.style.color = "#000000";
  barbar2.style.width = "42%";
  button3bar2.style.color = "#BEBEBE";
  button4bar2.style.color = "#BEBEBE";
  textbar2.style.display = "none";
});

button3bar2.addEventListener("click", () => {
  button2bar2.style.color = "#000000";
  button3bar2.style.color = "#000000";
  button4bar2.style.color = "#BEBEBE";
  barbar2.style.width = "68%";
  textbar2.style.display = "none";
});
button4bar2.addEventListener("click", () => {
  button2bar2.style.color = "#000000";
  button3bar2.style.color = "#000000";
  button4bar2.style.color = "#000000";
  barbar2.style.width = "100%";
  textbar2.style.display = "none";
});

//mobile navi
const navimob = document.querySelector(".nav-burger");
const navimobtext = document.querySelector(".navi-mobile");
const exitmobilenavi = document.querySelector(".exitMobileNavi");
const aElement = document.querySelectorAll(".inside li");

navimob.addEventListener("click", (e) => {
  e.preventDefault();
  if (navimob.style.display != "none") {
    navimobile = true;
    navimob.style.display = "none";
    navimobtext.style.top = "0";
    exitmobilenavi.style.display = "block";
  }
});
exitmobilenavi.addEventListener("click", () => {
  if ((navimobile = true)) {
    navimob.style.display = "block";
    navimobtext.style.top = "-100%";
    exitmobilenavi.style.display = "none";
  }
});
