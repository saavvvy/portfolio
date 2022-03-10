const navOpen = document.getElementById("nav-open");
navClose = document.getElementById("nav-close");
navMenu = document.getElementById("nav-menu");
navLinks = document.querySelectorAll(".nav-link");
overlay = document.querySelector(".overlay");

let tl = gsap.timeline({
  paused: "true",
});

// tl is timeline
tl.to(".overlay", {
  duration: 0.2,
  opacity: 0.9,
  pointerEvents: "auto",
  ease: Expo.easeInOut,
});

tl.to(".nav-menu", {
  duration: 1,
  opacity: 1,
  x: 0,
  ease: Expo.easeInOut,
});

tl.fromTo(
  ".nav-item",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    duration: 0.5,
    opacity: 1,
    y: "0%",
    stagger: 0.25,
  }
);

tl.fromTo(
  ".social-link, .email",
  {
    x: "-50%",
    opacity: 0,
  },
  {
    duration: 0.8,
    opacity: 1,
    x: "0%",
    stagger: 0.25,
    ease: Expo.easeInOut,
  },
  "-=0.5"
);

navOpen.addEventListener("click", () => {
  tl.play();
  navOpen.style.opacity = 0;
});

navClose.addEventListener("click", () => {
  tl.reverse();
  navOpen.style.opacity = 1;
});

overlay.addEventListener("click", () => {
  tl.reverse();
  navOpen.style.opacity = 1;
});

// the reason for this is so that when you click on any of the nav-links, the animations play and happen in effect before going to it's destination
navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    tl.reverse();
    navOpen.style.opacity = 1;
  });
});

// START HIDE THE LOGO AND SWITCH TOGGLE

function hideLogo() {
  const logo = document.querySelector(".logo");
  const themeSwitch = document.querySelector(".theme-container");

  if (this.scrollY >= 200) {
    logo.classList.add("hide-logo");
    themeSwitch.classList.add("hide-logo");
  } else {
    logo.classList.remove("hide-logo");
    themeSwitch.classList.remove("hide-logo");
  }
}
window.addEventListener("scroll", hideLogo);

// END HIDE THE LOGO AND SWITCH TOGGLE

// START HOVER EFFECT

new hoverEffect({
  parent: document.querySelector(".home-img"),
  intensity: 0.3,
  image1: "/images/hero.jpg",
  image2: "/images/hero-2.jpg",
  displacementImage: "/images/diss.png",
  imagesRatio: 450 / 400,
});

// END HOVER EFFECT

// START SWIPER JS

const swiper = new Swiper(".swiper", {
  loop: true,

  // Navigation Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// END SWIPER JS

// START YEAR CHANGER

var year = new Date().getFullYear();
var date = `&#169 ${year} SAVIOUR`;
document.querySelector(".year").innerHTML = date;

// END YEAR CHANGER

// START SCROLL UP

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// END SCROLL UP

// START DARK / LIGHT THEME SWITCH

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); // set the localStorage items
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); // set the localStorage items
  }
};

// get the localStorage items using the ternary operator
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  // now blend the current data-theme with the currentTheme from localStorage
  document.documentElement.setAttribute("data-theme", currentTheme);

  // this is for the checkbox toggle so it remains
  // if dark theme is activated, toggle switch should remain checked else return to default
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// END DARK / LIGHT THEME SWITCH

// START SCROLL REVEAL

const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(`.home-content`, {
  origin: "top",
  interval: 200,
});

sr.reveal(`.home-image`, {
  origin: "bottom",
  interval: 200,
});

sr.reveal(`.w-1, .w-3`, {
  origin: "left",
});

sr.reveal(`.w-2, .w-4`, {
  origin: "right",
});

sr.reveal(`.g-1, .g-4`, {
  origin: "left",
});

sr.reveal(`.g-3, .g-6`, {
  origin: "right",
});

sr.reveal(`.g-2`, {
  origin: "top",
});

sr.reveal(`.g-5`, {
  origin: "bottom",
});

sr.reveal(`.t-1`, {
  origin: "left",
});

sr.reveal(`.t-2`, {
  origin: "right",
});

sr.reveal(`.footer-right`, {
  origin: "bottom",
});

sr.reveal(`.footer-left`, {
  origin: "top",
});

// END SCROLL REVEAL
