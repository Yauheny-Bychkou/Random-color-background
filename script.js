"use strict";

let button = document.querySelector("button");

function randColor() {
  let body = document.querySelector("body"),
    codeСolor = document.querySelector("p"),
    r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256),
    color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  body.style.background = color;
  codeСolor.innerText = color;
}
button.addEventListener("click", randColor);
