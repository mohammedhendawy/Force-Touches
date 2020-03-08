//open hamburger link
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementsByClassName("flaticon-menu")[0].style.visibility =
    "hidden";

  element.classList.toggle("openbtn");
}

//Close hamburger link
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName("flaticon-menu")[0].style.visibility =
    "visible";
}

//GSAP Animations for the page
TweenMax.to(".loading-screen", 2, {
  top: "0",
  ease: Expo.easeInOut
});

TweenMax.to("h1", 2, {
  delay: 1.8,
  opacity: 1,
  y: 0,
  ease: Expo.easeInOut
});
TweenMax.to("h2", 2, {
  delay: 2,
  opacity: 1,
  y: 0,
  ease: Expo.easeInOut
});
TweenMax.to(".american", 2, {
  delay: 2.7,
  opacity: 2.5,
  y: 0,
  ease: Expo.easeInOut
});
TweenMax.to(".links", 2, {
  delay: 3.1,
  opacity: 1,
  x: 0,
  ease: Expo.easeInOut
});
TweenMax.to(".socials", 2, {
  delay: 3.7,
  opacity: 1,
  x: 0,
  ease: Expo.easeInOut
});
TweenMax.to(".col-right", 2, {
  delay: 4.1,
  opacity: 1,
  x: 0,
  ease: Expo.easeInOut
});

TweenMax.to(".force", 2, {
  delay: 4.5,
  opacity: 1,
  y: 0,
  ease: Expo.easeInOut
});
