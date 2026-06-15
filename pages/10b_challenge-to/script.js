import gsap from "gsap";

// 1. First toast enters (rises up)
gsap.to(".toast.one", {
  y: -120,
  opacity: 1,
  scale: 1,
  duration: 0.8,
  ease: "power4.out",
  onComplete: () => {
    // 2. First toast slides away to the right (after 2 seconds)
    gsap.to(".toast.one", {
      delay: 2,
      x: 150,
      opacity: 0,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => {
        // 3. Second toast enters (rises up)
        gsap.to(".toast.two", {
          y: -120,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power4.out",
          onComplete: () => {
            // 4. Second toast slides away to the right (after 2 seconds)
            gsap.to(".toast.two", {
              delay: 2,
              x: 150,
              opacity: 0,
              duration: 0.6,
              ease: "power2.in",
            });
          },
        });
      },
    });
  },
});
