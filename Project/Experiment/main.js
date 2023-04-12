let isDrawing = false;
let canvas = document.getElementById('canvas');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);

function startDrawing(event) {
    isDrawing = true;
    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "stroke", "#000");
    path.setAttributeNS(null, "stroke-width", "4");
    path.setAttributeNS(null, "fill", "none");
    canvas.appendChild(path);
    const x = event.clientX;
    const y = event.clientY;
    path.setAttributeNS(null, "d", `M${x} ${y}`);
  }

function draw(event) {
  if (isDrawing) {
    let path = document.createElement('div');
    path.classList.add('path');
    path.style.top = event.clientY + 'px';
    path.style.left = event.clientX + 'px';
    canvas.appendChild(path);
  }
}

function endDrawing() {
  isDrawing = false;
}

function dissolve() {
  let paths = document.querySelectorAll('#canvas .path');
  paths.forEach(function(path) {
    path.style.opacity = '0';
  });
}
