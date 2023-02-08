import { gsap } from "gsap";

const letters = document.querySelectorAll(".letter");
const cubicBezier = "cubic-bezier(1,-0.02,0,1.12)";

const unfoldingLetters = () => {
  gsap.to(letters, {
    duration: 1.2,
    y: 0,
    rotateX: 0,
    ease: cubicBezier,
    stagger: 0.05,
    opacity: 1,
  }, 4.4);
};

export { unfoldingLetters };