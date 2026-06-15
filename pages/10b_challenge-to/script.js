import gsap from "gsap";

// Loop through each toast individually
document.querySelectorAll(".toast").forEach((toast, index) => {
  gsap.to(toast, {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    // Calculate stagger manual delay: 0s for the first, 3.5s for the second, etc.
    delay: index * 3.5,

    // When this specific toast finishes entering, make it slide away
    onComplete: () => {
      gsap.to(toast, {
        delay: 2, // Wait 2 seconds before sliding away
        x: 150,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
      });
    },
  });
});
