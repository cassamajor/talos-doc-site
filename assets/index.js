// To use https://github.com/KyleAMathews/typefaces
// example to add the typeflace "Play":
require("typeface-nunito-sans");
require("typeface-lato");
require("typeface-fira-mono");
import "./css/styles.css";

import "./js/polyfills.js"; //MUST GO AT TOP
import "./js/hljs.js";
import "./js/lazysizes.js";
import "./js/quicklink.js";
import "./js/nojs.js";

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 240, shrinkOff = 140,
    headerEl = document.getElementById('js-header');

    if (distanceY > shrinkOn) {
        headerEl.classList.add("scrolled");
    }
    if (distanceY < shrinkOff) {
        headerEl.classList.remove("scrolled");
    }
}
window.addEventListener('scroll', resizeHeaderOnScroll);
