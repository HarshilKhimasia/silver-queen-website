window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  if (window.pageYOffset > 100) {
    navbar.classList.add("navbar-scroll");
    logo.classList.add("image-scale");
    logo.style.width = "50%";
    logo.style.transition = "width 0.5s ease-in-out";
    navbar.style.background = "linear-gradient(270deg, rgb(1, 11, 20) 0%, rgb(1, 11, 20) 5%, rgb(1, 12, 20) 7%, rgb(4, 16, 24) 23%, rgb(15, 34, 38) 38%, rgb(31, 61, 60) 52%, rgb(35, 69, 66) 57%, rgb(39, 76, 72) 70%)";
    navbar.style.opacity = "0.9";
  } else {
    navbar.classList.remove("navbar-scroll");
    logo.classList.remove("image-scale");
    logo.style.width = "100%";
    logo.style.transition = "width 0.5s ease-in-out";
    navbar.style.background = "#ffffff00";
  }
});



// Gsap starts here
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".text-trigger",
    start: "top 80%",
    end: "100% center",
    markers: false,
    scrub: 1
  }
});

tl.to(".memorable", {
  width: "23%",

});

const blOne = gsap.timeline({
  scrollTrigger: {
    trigger: ".box-trigger",
    start: "top 80%",
    end: "50%",
    markers: false,
    scrub: 1
  }
});

const blTwo = gsap.timeline({
  scrollTrigger: {
    trigger: ".box-trigger",
    start: "top 80%",
    end: "50%",
    markers: false,
    scrub: 1
  }
});

blTwo.to(".box-two", {
  right: "0%",

});
blOne.to(".box-one", {
  left: "0%",

});

const orange = document.querySelector('.orange-circle');

gsap.to(".orange-circle", {
  scrollTrigger: {
    trigger: ".box-trigger",
    start: 'top 20%',
    end: 'bottom 50%',
    markers: false,
    toggleActions: 'play none reverse none',
  },
  duration: 1.5,
  scale: 1,
  ease: "elastic.out(1, 0.3)",
});

var socialIcons = document.querySelector('.social-icons');
var triggerPos = window.innerHeight / 2.2; // 50% of the screen height

window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY;

  if (scrollPos >= triggerPos) {
    socialIcons.classList.add('sticky');
  } else {
    socialIcons.classList.remove('sticky');
  }
});