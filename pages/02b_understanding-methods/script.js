import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

let animation;

function initAnimation() {
  if (animation) animation.kill(); // Kill the old animation to avoid memory leaks/conflicts

  animation = gsap.to(".box", {
    opacity: 1,
    rotate: 360,
    borderRadius: "50%",
    scale: 1.25,
    duration: 3,
    paused: true, // Keep it paused initially if needed
  });
}

initAnimation();

play.addEventListener("click", () => {
  animation.play();
  // animation.play(1); // Play from 1 second into the animation
});

pause.addEventListener("click", () => {
  animation.pause();
});

resume.addEventListener("click", () => {
  animation.resume();
});

restart.addEventListener("click", () => {
  initAnimation();
  animation.restart();
});

reverse.addEventListener("click", () => {
  animation.reverse();
});

kill.addEventListener("click", () => {
  animation.kill();
});

yoyo.addEventListener("click", () => {
  animation.repeat(3);
  animation.yoyo(true);
  animation.restart();
});

repeat.addEventListener("click", () => {
  animation.repeat(3);
});
