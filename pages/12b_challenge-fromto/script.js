import gsap from "gsap";

const buttons = document.querySelectorAll(".reactions button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const emoji = button.getAttribute("data-emoji");

    // 1. Create the bubble element
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = emoji;

    // 2. Position the bubble at the button's center
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    bubble.style.position = "fixed";
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.transform = "translate(-50%, -50%)";

    document.body.appendChild(bubble);

    // 3. Animate using gsap.fromTo() (Fixed simple values)
    gsap.fromTo(
      bubble,
      {
        y: 0,
        scale: 0.8,
        opacity: 1,
        rotate: 0,
      },
      {
        y: -120, // Float up
        scale: 1.4, // Grow a little
        rotate: 45, // Spin a bit
        opacity: 0, // Gently fade away
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          bubble.remove(); // Clean up from the DOM
        },
      },
    );
  });
});
