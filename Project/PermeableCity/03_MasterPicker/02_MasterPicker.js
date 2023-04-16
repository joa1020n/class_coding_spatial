//Master plan selecting
window.onload = function() {

// var canvas = document.getElementById('myCanvas');
const rects = document.getElementById('rectContainer');

// var ctx = canvas.getContext("2d");

// Define arrays for X and Y coordinates, width, and height

const X = [131, 183, 315, 131, 249, 183, 183, 131, 315, 315, 578, 446, 131, 249, 512, 709, 131, 512, 578, 131, 249, 512, 644, 131, 183, 315, 578, 709, 131, 249, 512, 131, 183, 315, 446, 578, 131, 175, 249, 512, 644, 131, 512, 578, 684, 131, 512, 610, 684, 131, 249, 380, 512, 586, 684, 131, 282, 512, 131, 249, 512, 131, 183, 315, 446, 578, 709, 131, 249, 380, 512, 644, 131, 183, 315, 578, 709, 131, 249, 512, 644, 131, 183, 315, 446, 511, 586, 709, 822, 978, 1052, 978, 1101, 978, 1052, 1175, 1504, 1636, 1767, 1504, 1701, 1833, 1504, 1636, 1899, 1504, 1701, 1833, 822, 978, 1109, 1241, 1372, 1504, 1899, 846, 1372, 1438, 1043, 1636, 1899, 2030, 822, 973, 1372, 1899, 2030, 822, 978, 1043, 1372, 1504, 1833, 2030, 2162, 978, 1175, 1372, 1833, 1965, 2096, 2228, 822, 978, 1109, 1241, 1372, 1833, 2030, 2162, 822, 912, 1043, 1143, 1307, 1438, 1833, 1965, 2096, 846, 1143, 1241, 1372, 1504, 1636, 1767, 1899, 2030, 1143, 1307, 1438, 1570, 1701, 1833, 1143, 1241, 1372, 1636, 1143, 1307, 1438, 846, 920, 1043, 1241, 822, 954];
const Y = [390, 390, 390, 465, 465, 539, 613, 539, 613, 687, 687, 358, 761, 761, 761, 761, 836, 836, 836, 910, 910, 910, 910, 984, 984, 984, 984, 984, 1058, 1058, 1058, 1133, 1133, 1133, 1133, 1133, 1207, 1207, 1207, 1207, 1207, 1281, 1281, 1281, 1281, 1355, 1355, 1355, 1355, 1477, 1500, 1500, 1500, 1500, 1477, 1575, 1575, 1575, 1649, 1649, 1649, 1723, 1723, 1723, 1723, 1723, 1723, 1797, 1797, 1797, 1797, 1797, 1872, 1872, 1872, 1872, 1872, 1946, 1946, 1946, 1946, 2020, 2020, 2020, 2020, 2094, 2169, 2169, 984, 984, 984, 1058, 1058, 1133, 1133, 878, 910, 910, 910, 984, 984, 984, 1058, 1058, 1058, 1133, 1133, 1133, 1207, 1207, 1207, 1207, 1207, 1207, 1207, 1281, 1281, 1281, 1281, 1207, 1281, 1281, 1355, 1355, 1355, 1355, 1355, 1477, 1477, 1477, 1500, 1500, 1500, 1477, 1477, 1575, 1575, 1575, 1575, 1575, 1575, 1575, 1649, 1649, 1649, 1649, 1649, 1649, 1649, 1649, 1723, 1723, 1723, 1723, 1723, 1723, 1723, 1723, 1723, 1797, 1797, 1797, 1797, 1797, 1797, 1797, 1797, 1797, 1872, 1872, 1872, 1872, 1872, 1872, 1946, 1946, 1946, 1946, 2020, 2020, 2020, 2094, 2094, 2094, 2094, 2169, 2169];
const width = [22, 101, 101, 88, 167, 233, 101, 22, 101, 233, 191, 299, 88, 233, 167, 59, 88, 35, 191, 88, 233, 101, 125, 22, 101, 233, 101, 59, 88, 233, 167, 22, 101, 101, 101, 101, 13, 44, 233, 101, 125, 88, 35, 76, 84, 88, 67, 44, 84, 88, 101, 101, 44, 67, 84, 121, 68, 142, 88, 233, 233, 22, 101, 101, 101, 101, 59, 88, 101, 101, 101, 125, 22, 101, 233, 101, 59, 88, 233, 101, 125, 22, 101, 101, 167, 102, 93, 59, 125, 44, 93, 93, 44, 44, 93, 299, 101, 101, 58, 167, 101, 48, 101, 233, 39, 167, 101, 160, 125, 101, 101, 101, 101, 101, 150, 167, 35, 167, 299, 233, 101, 74, 125, 44, 233, 101, 108, 125, 35, 299, 101, 299, 167, 101, 90, 167, 167, 101, 101, 101, 101, 93, 125, 101, 101, 101, 101, 167, 101, 110, 59, 101, 69, 133, 101, 35, 101, 101, 40, 267, 67, 101, 101, 101, 101, 101, 101, 62, 133, 101, 101, 101, 101, 95, 67, 101, 233, 160, 133, 101, 129, 44, 93, 167, 121, 101, 192];
const height = [44, 44, 44, 44, 44, 44, 118, 192, 44, 44, 44, 299, 44, 118, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 192, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 216, 44, 44, 44, 44, 44, 44, 67, 44, 44, 67, 67, 44, 118, 44, 44, 142, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 192, 44, 44, 44, 44, 44, 44, 44, 192, 44, 44, 44, 44, 44, 44, 299, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 142, 216, 44, 44, 67, 44, 67, 67, 67, 142, 67, 67, 44, 267, 44, 67, 67, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 267, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44];


var allXPxValues = [];
var allYPxValues = [];
var allwidthPxValues = [];
var allheightPxValues = [];

var XPx;
var YPx;
var widthPx;
var heightPx;

const textCollection = ["This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for farming field, with farms and clinic for plants around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for snail farm, with market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for test field, with clinic for plants and seed market around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for farming field, with farms and clinic for plants around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for snail farm, with market around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for test field, with clinic for plants and seed market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for farming field, with farms and clinic for plants around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for farming field, with farms and clinic for plants around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for test field, with clinic for plants and seed market around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for farming field, with farms and clinic for plants around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for maze, with café, dog park and observation deck around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for farming field, with farms and clinic for plants around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for play ground, with daycare, school and dorm around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for pool party, with observation deck, market and watermelon field around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for nothing, with marshmallow trampoline around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for self farming, with clinic for plants and seed market around.", "This yard is for sports field, with dog park, sports store and indoor gym around.", "This yard is for flower garden, with clinic for plants and painting studio around.", "This yard is for flying carpet, with café, dog park and observation deck around.", "This yard is for gathering space, with storage, public restroom, outdoor kitchen and market around.", "This yard is for tree warship, with café and clinic for human around.", "This yard is for rental farmland, with clinic for plants and seed market,  around.", "This yard is for self farming, with clinic for plants and seed market around."];

// console.log(textCollection[1]);

for (let i = 0; i < X.length; i++) {

let XPx = Math.floor(X[i]* window.innerHeight *0.9 / 2400);
let YPx = Math.floor( Y[i]* window.innerHeight *0.9 / 2400);
let widthPx = Math.floor(width[i]* window.innerHeight *0.9 / 2400 );
let heightPx = Math.floor(height[i]* window.innerHeight *0.9 / 2400);

allXPxValues.push(XPx);
allYPxValues.push(YPx);
allwidthPxValues.push(widthPx);
allheightPxValues.push(heightPx);

}


// Create an array to hold the rects
// const allrec = [];

// const colors = ['#000000'];
// const opacities = [1];

// Define the text to display


// Loop through and create each rectangule
for (let i = 0; i < allXPxValues.length; i++) {
  const Recs = document.createElement('Rec');
  Recs.style.position = "absolute";
  Recs.style.cursor = "pointer";

  Recs.style.left = `${allXPxValues[i % allXPxValues.length]}px`;
  Recs.style.top = `${allYPxValues[i % allYPxValues.length]}px`;
  Recs.style.width = `${allwidthPxValues[i % allwidthPxValues.length]}px`;
  Recs.style.height = `${allheightPxValues[i % allheightPxValues.length]}px`;

  Recs.style.backgroundColor = '#3ec961';
  Recs.style.opacity = '0';




    
  Recs.addEventListener('mouseover', () => {
    Recs.style.opacity = '1';
    console.log('Mouseover event triggered!');  

    const textInput = document.getElementById("textInput");
    textInput.textContent = textCollection[i % textCollection.length];
    textInput.style.display = 'block';
    console.log(textInput);
  });

  Recs.addEventListener('mouseout', () => {
    Recs.style.opacity = '0.1';
    textInput.style.display = 'none';

  });
    // var text = document.getElementById('Texts');
    // text.style.visibility = 'visible';

    rects.appendChild(Recs);
};


}








// Create an element for displaying the tooltip
// var tooltip = document.getElementById("tooltip-container");
// document.body.appendChild(tooltip);
  
/////////////////////////
// // Draw the rectangles
//   for (let i = 0; i <= width.length; i++) {
  
//     let XPx = Math.floor(X[i] * window.innerHeight / 24000 * 1.15 );
//     let YPx = Math.floor( Y[i]  * window.innerHeight / 48000 * 1.15 );
//     let widthPx = Math.floor(width[i] * window.innerHeight / 24000 * 1.15 );
//     let heightPx = Math.floor(height[i] * window.innerHeight / 48000 * 1.15 );
  
//     ctx.fillRect(XPx, YPx, widthPx, heightPx);
//     ctx.fillStyle = 'rgba(0, 0, 0, 0)';

//     // allXPxValues.push(XPx);
//     // allYPxValues.push(YPx);
//     // allwidthPxValues.push(widthPx);
//     // allheightPxValues.push(heightPx);
  
//     allrec.push(ctx);
//     }

//   rects.addEventListener("mousemove", function(event) {

//   var CvsBounding = canvas.getBoundingClientRect();
//   var mouseX = event.clientX - CvsBounding.left; // Define mouseX as the current x-coordinate of the mouse relative to the page
//   var mouseY = event.clientY - CvsBounding.top;

//   // console.log("mouseX" + mouseX);
//   // console.log("mouseY" +mouseY);

// for (let i = 0; i <= width.length; i++) {

//   if (Math.floor(mouseX) >= X[i] && Math.floor(mouseX) <= X[i] + width[i] &&
//   Math.floor(mouseY) >= Y[i] && Math.floor(mouseY) <= Y[i] + height[i]) 
// {
//   // showRect(rect);
//     allrec[i].globalAlpha = 1;
//     console.log("showRec"+i);

//   // Show the corresponding text for the current rectangle
//   // showText(textCollection[i], 50, 50 );
// }
// else{
//   allrec[i].globalAlpha = 0;
// }

// }
// });
///////////////////////



