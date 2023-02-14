import { gsap, Back } from "gsap";

const images = document.querySelectorAll(".image");
const curtain = document.querySelector(".loading-images");
const imageCover = document.querySelector(".image-cover");
const cubicBezier = "cubic-bezier(1,-0.02,0,1.12)";

const tl = gsap.timeline();

const hideCurtain = () => {
  gsap.to(
    curtain,
    {
      duration: 1,
      bottom: 100 + "vh",
      ease: cubicBezier,
    },
    3.5
  );

  gsap.to(
    imageCover,
    {
      duration: 0.5,
    },
    3
  );
};

const imageAnimation = () => {
  gsap.to(
    images,
    {
      duration: 0.5,
      marginTop: 0,
      ease: cubicBezier,
      stagger: 0.8,
    },
    0.7
  );
  gsap.to(
    images,
    {
      duration: 1.5,
      scale: 1,
      ease: cubicBezier,
      stagger: 0.8,
    },
    0.5
  );
};

const loadingImagesComponent = () => {
  imageAnimation();
  hideCurtain();
};

export { loadingImagesComponent };
