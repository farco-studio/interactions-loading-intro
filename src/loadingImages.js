import { gsap } from "gsap";

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
    4
  );

  gsap.to(
    imageCover,
    {
      duration: 0.5,
    },
    4
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
    1.2
  );
  gsap.to(
    images,
    {
      duration: 1.5,
      scale: 1,
      ease: cubicBezier,
      stagger: 0.8,
    },
    1
  );
};

const imageCoverSize = () => {
  tl.to(imageCover, {
    duration: 0.5,
    width: 40 + "vh",
    ease: cubicBezier,
  });
  tl.to(
    imageCover,
    {
      duration: 0.5,
      height: 50 + "vh",
    },
    0.8
  );
};

const loadingImagesComponent = () => {
  imageCoverSize();
  imageAnimation();
  hideCurtain();
};

export { loadingImagesComponent };
