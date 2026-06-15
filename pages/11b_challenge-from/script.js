import gsap from "gsap";

const card = document.querySelector("#card");
const cardInner = document.querySelector(".card-inner");

// 1. Entrance animation using gsap.from() on page load
gsap.from(cardInner, {
  scale: 0.8,
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "back.out(1.5)",
});

// 2. Flip animation using gsap.to() on hover
card.addEventListener("mouseenter", () => {
  gsap.to(cardInner, {
    rotateY: 180,
    scale: 1.05, // Subtle lift effect
    z: 50, // Pulls the card slightly forward in 3D space
    duration: 0.8,
    ease: "power2.out",
    overwrite: "auto",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(cardInner, {
    rotateY: 0,
    scale: 1, // Reset lift
    z: 0, // Reset depth
    duration: 0.8,
    ease: "power2.out",
    overwrite: "auto",
  });
});
