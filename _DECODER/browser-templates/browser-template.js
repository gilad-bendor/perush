'use strict';

const biblicalAnnotatedText = "ANNOTATED TEXT INJECTED DYNAMICALLY";

// Keep the vertical line glued to the mouse x-position (the CSS uses translateX(var(--mouse-x))).
const verticalMouseTracker = document.querySelector(".vertical-mouse-tracker");
document.addEventListener("mousemove", (e) => {
    verticalMouseTracker.style.setProperty("--mouse-x", `${e.clientX}px`);
});

// Allow the user to toggle coloring by clicks
document.onclick=((e) => {
    if (e.target.style.getPropertyValue("background-color")) {
        e.target.style.removeProperty("background-color");
    } else {
        e.target.style.setProperty("background-color", "rgba(255, 0, 0, 0.5)");
    }
});
