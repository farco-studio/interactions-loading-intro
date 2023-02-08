import { gsap } from "gsap";

gsap.registerPlugin();

const cursor = document.querySelector(".cursor");
const cursorSize = document.querySelector(".cursor").offsetWidth;
const cursorMargin = cursorSize / 2;

const initCursor = () => {
    gsap.set(cursor, {
        left: `calc(50% - ${cursorMargin}px)`,
        top: `calc(50% - ${cursorMargin}px)`,        
    });
};

const mouseMove = (e) => {
    gsap.to(cursor, {
        duration: 0.5,
        left: `${e.clientX - cursorMargin}px`,
        top: `${e.clientY - cursorMargin}px`,
        ease: "power2.out",        
    });
};

const cursorComponent = () => {
    initCursor();
    
    window.addEventListener("mousemove", (e) => {
        mouseMove(e);
    });
}

export { cursorComponent };
