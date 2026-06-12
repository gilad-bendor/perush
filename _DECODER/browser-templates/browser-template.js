'use strict';

const biblicalAnnotatedText = "ANNOTATED TEXT INJECTED DYNAMICALLY";

// Allow the user to toggle coloring by clicks
document.onclick=((e) => {
    if (e.target.style.getPropertyValue("background-color")) {
        e.target.style.removeProperty("background-color");
    } else {
        e.target.style.setProperty("background-color", "rgba(255, 0, 0, 0.5)");
    }
});
