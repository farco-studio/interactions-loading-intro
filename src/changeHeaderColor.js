import { gsap } from "gsap";

const headerLinks = document.querySelectorAll(".header a");
const svgLinks = document.querySelectorAll(".header svg path");

const changeHeaderColor = () => {
    gsap.to(svgLinks, {
        duration: 0.5,
        stroke: "#fff",
    }, 4.3);

    headerLinks.forEach((link) => {
        setTimeout(() => {
            link.style.setProperty('--color-primary', "#fff")
        }, 4300);
    });
}

export { changeHeaderColor };