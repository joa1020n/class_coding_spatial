
let bluebutton = document.getElementById("blue");
let greenbutton = document.getElementById("green");
let yellowbutton = document.getElementById("yellow");


function switchToBlue() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#45bbff";
  body.style.color = "#ffffff";
}

function switchToGreen() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#45ff96";
    body.style.color = "#ffffff";
  }

function switchToYellow() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#db4343";
  body.style.color = "#ffffff";
}

// 2 -- Add an event listener to each circle
bluebutton.addEventListener("mouseover", switchToBlue);
greenbutton.addEventListener("mouseover", switchToGreen);
yellowbutton.addEventListener("mouseover", switchToYellow);