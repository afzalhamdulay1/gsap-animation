import gsap from "gsap";

gsap.set(".gsap-box", {
  opacity: 0,
  scale: 0.5,
  y: 500,
  x: -500,
});

gsap.to(".gsap-box", {
  opacity: 1,
  scale: 1,
  delay: 1,
  y: 0,
  x: 0,
  duration: 2,
  ease: "expo.out",
});
