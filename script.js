window.scrollTo(0, 0);

let mouseChaser = document.querySelector("#contact-link");
let stationaryLink = document.querySelector("#contact-link-stationary");
let cancelAnimation = document.querySelector("#cancel-btn");
let rootChaser = document.documentElement;
let openResume = document.querySelector(".resume-open-btn");
let closeResume = document.querySelector(".close-btn");
let resumeModal = document.querySelector(".resume-modal");
let aboutMeSection = document.querySelector("#about-me");
let hamburgerMenu = document.querySelectorAll(".hamburger-click");
let hamburgerModal = document.querySelector(".nav2");
let fadeScreen = document.querySelectorAll("section");
let topBar = document.querySelector(".top");
let middleBar = document.querySelector(".middle");
let bottomBar = document.querySelector(".bottom");
let windowWidth = window.innerWidth - 135;

window.addEventListener("load", function () {
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    rootChaser.style.setProperty("--mouse-x", `${windowWidth}px`);
    rootChaser.style.setProperty("--mouse-y", "36px");
  } else {
    rootChaser.style.setProperty("--mouse-x", `${windowWidth}px`);
    rootChaser.style.setProperty("--mouse-y", "35px");
  }
});

if (windowWidth > 600) {
  setTimeout(now, 1000);
}

const cursor = (e) => {
  rootChaser.style.setProperty("--mouse-x", e.pageX + "px");
  rootChaser.style.setProperty("--mouse-y", e.pageY + "px");
};

function now() {
  window.addEventListener("mousemove", cursor);
  cancelAnimation.style.opacity = "1";
  mouseChaser.style.display = "inline-block";
  stationaryLink.style.display = "none";
}

cancelAnimation.addEventListener("click", () => {
  mouseChaser.style.display = "none";
  stationaryLink.style.display = "inline-block";
});

mouseChaser.addEventListener("click", (e) => {
  mouseChaser.style.display = "none";
  stationaryLink.style.display = "inline-block";
});

openResume.addEventListener("click", () => {
  resumeModal.classList.add("resume-modal-open");
});

closeResume.addEventListener("click", () => {
  resumeModal.classList.remove("resume-modal-open");
});

hamburgerMenu.forEach((item) =>
  item.addEventListener("click", () => {
    if (hamburgerModal.style.height !== "200px") {
      hamburgerModal.style.height = "200px";
      fadeScreen.forEach((item) => (item.style.opacity = "0.2"));
      topBar.classList.add("top-clicked");
      middleBar.classList.add("middle-clicked");
      bottomBar.classList.add("bottom-clicked");
    } else {
      hamburgerModal.style.height = "0px";
      fadeScreen.forEach((item) => (item.style.opacity = "1"));
      topBar.classList.remove("top-clicked");
      middleBar.classList.remove("middle-clicked");
      bottomBar.classList.remove("bottom-clicked");
    }
  })
);
