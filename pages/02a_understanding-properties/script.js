import gsap from "gsap";

gsap.to(".box", {
  rotation: 360,
  background: "#facc15",
  scale: 1.25,
  x: 300,
  duration: 2,
  repeat: -1,
  borderRadius: "50%",
  ease: "bounce",
  yoyo: true,
  delay: 2,
  repeatDelay: 1,
  // paused: true,
  stager: 1,
});
