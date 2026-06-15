import gsap from "gsap";

// Select the main floating action button (FAB)
const fab = document.querySelector(".fab");

// Select all child action buttons
const children = document.querySelectorAll(".fab-child");

// Set how far the children spread out from the center
const radius = 100;

// Track whether menu is expanded or collapsed
let expanded = false;

fab.addEventListener("click", () => {
  expanded = !expanded;

  // Toggle button symbol (＋ / ×)
  fab.textContent = expanded ? "×" : "＋";

  if (expanded) {
    // Define arc of expansion: spread over 90 degrees
    const arcSpan = Math.PI / 1.5; // radians
    const startAngle = Math.PI / 2 + arcSpan / 2; // start at top-center

    children.forEach((child, i) => {
      // Distribute each child evenly across the arc
      const angle = startAngle - i * (arcSpan / (children.length - 1));

      // Polar to Cartesian conversion
      const x = Math.cos(angle) * radius;
      const y = -Math.sin(angle) * radius;

      gsap.to(child, {
        x: x,
        y: y,
        opacity: 1,
        scale: 0.8,
        rotate: 720,
        duration: 0.5,
        ease: "expo.out",
        delay: i * 0.1,
        pointerEvents: "auto",
      });
    });
  } else {
    children.forEach((child) => {
      gsap.to(child, {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.2,
        rotate: 0,
        duration: 0.3,
        ease: "expo.in",
        pointerEvents: "none",
      });
    });
  }
});
