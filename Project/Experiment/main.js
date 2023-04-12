let isDrawing = false;
let canvas = document.getElementById('canvas');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);

function startDrawing(event) {
  isDrawing = true;
  let path = document.createElement('div');
  path.classList.add('path');
  path.style.top = event.clientY + 'px';
  path.style.left = event.clientX + 'px';
  canvas.appendChild(path);
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
