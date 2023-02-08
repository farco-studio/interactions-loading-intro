import { cursorComponent } from "./cursor";
import { loadingImagesComponent } from "./loadingImages";
import { unfoldingLetters } from "./unfoldingLetters";
import { changeHeaderColor } from "./changeHeaderColor";

const isMobile = window.matchMedia("(max-width: 768px)").matches;

const init = () => {
  loadingImagesComponent();
  unfoldingLetters();
  changeHeaderColor();

  if (!isMobile) {
    cursorComponent();
  }
};

init();
