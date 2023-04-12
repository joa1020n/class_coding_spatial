var isDrawing = false;
var canvas = document.getElementById('canvas');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);

function startDrawing() {
  isDrawing = true;
  var path = document.createElement('drawingpath');
  path.classList.add('path', 'active');
  path.style.top = Event.clientY + 'px';
  path.style.left = Event.clientX + 'px';
  canvas.appendChild(path);
}

function draw() {
  if (isDrawing) {
    var path = document.createElement('drawingpath');
    path.classList.add('path', 'active');
    path.style.top = Event.clientY + 'px';
    path.style.left = Event.clientX + 'px';
    canvas.appendChild(path);
  }
}

function endDrawing() {
  isDrawing = false;
}

function dissolve() {
  var paths = document.querySelectorAll('#canvas .path');
  paths.forEach(function(path) {
    path.classList.remove('active');
  });
}