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
  // navOpen.style.opacity = 0;
});

navClose.addEventListener("click", () => {
  tl.reverse();
  //   navOpen.style.opacity = 1;
});

overlay.addEventListener("click", () => {
  tl.reverse();
  //   navOpen.style.opacity = 1;
});

// the reason for this is so that when you click on any of the nav-links, the animations play and happen in effect before going to it's destination
navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    tl.reverse();
    // navOpen.style.opacity = 1;
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

// new hoverEffect({
//   parent: document.querySelector(".home-img"),
//   intensity: 0.3,
//   image1: "/images/hero.jpg",
//   image2: "/images/hero-2.jpg",
//   displacementImage: "/images/diss.png",
//   imagesRatio: 450 / 400,
// });

// new hoverEffect({
//   parent: document.querySelector(".project-thumbnail1"),
//   intensity: 0.3,
//   image1: "/images/p-1.jpg",
//   image2: "/images/p-11.jpg",
//   displacementImage: "/images/diss.png",
//   imagesRatio: 381 / 494,
// });

// new hoverEffect({
//   parent: document.querySelector(".project-thumbnail2"),
//   intensity: 0.3,
//   image1: "/images/p-2.jpg",
//   image2: "/images/p-22.jpg",
//   displacementImage: "/images/diss.png",
//   imagesRatio: 381 / 494,
// });

// new hoverEffect({
//   parent: document.querySelector(".project-thumbnail3"),
//   intensity: 0.3,
//   image1: "/images/p-3.jpg",
//   image2: "/images/p-33.jpg",
//   displacementImage: "/images/diss.png",
//   imagesRatio: 381 / 494,
// });

// new hoverEffect({
//   parent: document.querySelector(".project-thumbnail4"),
//   intensity: 0.3,
//   image1: "/images/p-4.jpg",
//   image2: "/images/p-44.jpg",
//   displacementImage: "/images/diss.png",
//   imagesRatio: 381 / 494,
// });

// END HOVER EFFECT