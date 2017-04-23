var mouse_x = 0;
var mouse_y = 0;
var offset_x = 10; // Starting offset_x
var offset_y = -10; // Starting offset_y
var offset_x_velocity = 1; // Try changing this to 0.5 or 2.
var offset_y_velocity = 1;

var radius = 20;

// Set mouse coordinates any time the user moves the mouse.
window.onmousemove = function (e) {
  mouse_x = e.x;
  mouse_y = e.y;
}



// Loop each video frame.
var loop = function () {

  // Increase offset_x by offset_x_velocity and reverse it if it hits the limit (20 or -20).
  
  offset_x += offset_x_velocity;
  if (offset_x > radius || offset_x < -radius) {
    offset_x_velocity *= - 1;
  }
  
  // Same for offset_y...
  
  offset_y += offset_y_velocity;
  if (offset_y > radius || offset_y < -radius) {
    offset_y_velocity *= - 1;
  }

  // Set point position (via CSS) to be the original mouse with the offset added.
  point.style.left = (mouse_x + offset_x) + 'px';
  point.style.top = (mouse_y + offset_y) + 'px';
  
  window.requestAnimationFrame(loop);
};

// Start the loop.
window.requestAnimationFrame(loop);