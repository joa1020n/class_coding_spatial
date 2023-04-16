// function showanimalAnswer() {
// 	var selectedAnimal = document.querySelector('input[name="animal"]:checked');
// 	if (selectedAnimal) {
// 		var animalName = selectedAnimal.nextElementSibling.querySelector('p').innerText;
// 		var animalImg = selectedAnimal.nextElementSibling.querySelector('img').getAttribute('src');
// 		localStorage.setItem('animal', animalName);
// 		localStorage.setItem('animalImg', animalImg);
// 		// window.location.href = 'answer.html';
// 	} else {
// 		alert('Please select an animal');
// 	}
// }

// var animalName = localStorage.getItem('animal');
// var animalImg = localStorage.getItem('animalImg');
// if (animalName && animalImg) {
// 	document.getElementById('animal').innerText = animalName;
// 	document.getElementById('animalImg').setAttribute('src', animalImg);
// }


// function showfoodAnswer() {
// 	var selectedFood = document.querySelector('input[name="food"]:checked');
// 	if (selectedFood) {
// 		var foodName = selectedFood.nextElementSibling.querySelector('p').innerText;
// 		var foodImg = selectedFood.nextElementSibling.querySelector('img').getAttribute('src');
// 		localStorage.setItem('food', foodName);
// 		localStorage.setItem('foodImg', foodImg);
// 		// window.location.href = 'answer.html';
// 	} else {
// 		alert('Please select a food');
// 	}
// }

// var foodName = localStorage.getItem('food');
// var foodImg = localStorage.getItem('foodImg');
// if (foodName && foodImg) {
// 	document.getElementById('food').innerText = foodName;
// 	document.getElementById('foodImg').setAttribute('src', foodImg);
// }

// Drawing the rectangles

// Define the x and y locations of the rectangles
// const index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187];
// const xLocations = [2269, 2217, 2085, 2269, 2151, 2217, 2217, 2269, 2085, 2085, 1822, 1954, 2269, 2151, 1888, 1691, 2269, 1888, 1822, 2269, 2151, 1888, 1756, 2269, 2217, 2085, 1822, 1691, 2269, 2151, 1888, 2269, 2217, 2085, 1954, 1822, 2269, 2225, 2151, 1888, 1756, 2269, 1888, 1822, 1716, 2269, 1888, 1790, 1716, 2269, 2151, 2020, 1888, 1814, 1716, 2269, 2118, 1888, 2269, 2151, 1888, 2269, 2217, 2085, 1954, 1822, 1691, 2269, 2151, 2020, 1888, 1756, 2269, 2217, 2085, 1822, 1691, 2269, 2151, 1888, 1756, 2269, 2217, 2085, 1954, 1889, 1814, 1691, 1578, 1422, 1348, 1422, 1299, 1422, 1348, 1225, 896, 764, 633, 896, 699, 567, 896, 764, 501, 896, 699, 567, 1578, 1422, 1291, 1159, 1028, 896, 501, 1554, 1028, 962, 1357, 764, 501, 370, 1578, 1427, 1028, 501, 370, 1578, 1422, 1357, 1028, 896, 567, 370, 238, 1422, 1225, 1028, 567, 435, 304, 172, 1578, 1422, 1291, 1159, 1028, 567, 370, 238, 1578, 1488, 1357, 1257, 1093, 962, 567, 435, 304, 1554, 1257, 1159, 1028, 896, 764, 633, 501, 370, 1257, 1093, 962, 830, 699, 567, 1257, 1159, 1028, 764, 1257, 1093, 962, 1554, 1480, 1357, 1159, 1578, 1446];
// const yLocations = [2010, 2010, 2010, 1935, 1935, 1861, 1787, 1861, 1787, 1713, 1713, 2042, 1639, 1639, 1639, 1639, 1564, 1564, 1564, 1490, 1490, 1490, 1490, 1416, 1416, 1416, 1416, 1416, 1342, 1342, 1342, 1267, 1267, 1267, 1267, 1267, 1193, 1193, 1193, 1193, 1193, 1119, 1119, 1119, 1119, 1045, 1045, 1045, 1045, 923, 900, 900, 900, 900, 923, 825, 825, 825, 751, 751, 751, 677, 677, 677, 677, 677, 677, 603, 603, 603, 603, 603, 528, 528, 528, 528, 528, 454, 454, 454, 454, 380, 380, 380, 380, 306, 231, 231, 1416, 1416, 1416, 1342, 1342, 1267, 1267, 1522, 1490, 1490, 1490, 1416, 1416, 1416, 1342, 1342, 1342, 1267, 1267, 1267, 1193, 1193, 1193, 1193, 1193, 1193, 1193, 1119, 1119, 1119, 1119, 1193, 1119, 1119, 1045, 1045, 1045, 1045, 1045, 923, 923, 923, 900, 900, 900, 923, 923, 825, 825, 825, 825, 825, 825, 825, 751, 751, 751, 751, 751, 751, 751, 751, 677, 677, 677, 677, 677, 677, 677, 677, 677, 603, 603, 603, 603, 603, 603, 603, 603, 603, 528, 528, 528, 528, 528, 528, 454, 454, 454, 454, 380, 380, 380, 306, 306, 306, 306, 231, 231];
// const xDimension = [22, 101, 101, 88, 167, 233, 101, 22, 101, 233, 191, 299, 88, 233, 167, 59, 88, 35, 191, 88, 233, 101, 125, 22, 101, 233, 101, 59, 88, 233, 167, 22, 101, 101, 101, 101, 13, 44, 233, 101, 125, 88, 35, 76, 84, 88, 67, 44, 84, 88, 101, 101, 44, 67, 84, 121, 68, 142, 88, 233, 233, 22, 101, 101, 101, 101, 59, 88, 101, 101, 101, 125, 22, 101, 233, 101, 59, 88, 233, 101, 125, 22, 101, 101, 167, 102, 93, 59, 125, 44, 93, 93, 44, 44, 93, 299, 101, 101, 58, 167, 101, 48, 101, 233, 39, 167, 101, 160, 125, 101, 101, 101, 101, 101, 150, 167, 35, 167, 299, 233, 101, 74, 125, 44, 233, 101, 108, 125, 35, 299, 101, 299, 167, 101, 90, 167, 167, 101, 101, 101, 101, 93, 125, 101, 101, 101, 101, 167, 101, 110, 59, 101, 69, 133, 101, 35, 101, 101, 40, 267, 67, 101, 101, 101, 101, 101, 101, 62, 133, 101, 101, 101, 101, 95, 67, 101, 233, 160, 133, 101, 129, 44, 93, 167, 121, 101, 192];
// const yDimension = [44, 44, 44, 44, 44, 44, 118, 192, 44, 44, 44, 299, 44, 118, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 192, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 216, 44, 44, 44, 44, 44, 44, 67, 44, 44, 67, 67, 44, 118, 44, 44, 142, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 192, 44, 44, 44, 44, 44, 44, 44, 192, 44, 44, 44, 44, 44, 44, 299, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 142, 216, 44, 44, 67, 44, 67, 67, 67, 142, 67, 67, 44, 267, 44, 67, 67, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 267, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44, 44];

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Define arrays for X and Y coordinates, width, and height
const X = [50, 150, 250];
const Y = [50, 100, 75];
const width = [100, 50, 75];
const height = [50, 75, 75];
const colors = ['#ff0000', '#00ff00', '#0000ff'];
const opacities = [0];

// Define the text to display
const text = ['Rectangle 1', 'Rectangle 2', 'Rectangle 3'];

// Create an element for displaying the tooltip
const tooltip = document.createElement('div');
tooltip.style.position = 'fixed';
tooltip.style.display = 'none';
tooltip.style.backgroundColor = '#fff';
tooltip.style.padding = '5px';
tooltip.style.left = '50px';
tooltip.style.top = '50px';
document.body.appendChild(tooltip);

// Draw the rectangles
for (let i = 0; i < X.length; i++) {
  ctx.fillStyle = colors[i];
  ctx.globalAlpha = opacities[i];
  ctx.fillRect(X[i], Y[i], width[i], height[i]);
}

// Listen for mousemove events
canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  for (let i = 0; i < X.length; i++) {
    if (x >= X[i] && x <= X[i] + width[i] && y >= Y[i] && y <= Y[i] + height[i]) {
      tooltip.style.left = `${event.pageX}px`;
      tooltip.style.top = `${event.pageY}px`;
      tooltip.innerHTML = text[i];
      tooltip.style.display = 'block';
      return;
    }
  }
  tooltip.style.display = 'none';
});
