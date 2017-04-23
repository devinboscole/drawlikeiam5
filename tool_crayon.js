tools.line_crayon = {};

var last_x, last_y;

var draw_circle = function(x, y, color) {
        x = x - can.offsetLeft; // Get mouse pos. in relationship to canvas.
        y = y - can.offsetTop;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x,y ,Math.random() * (5 - 1) + 1 + thickness, 0, 1);
        ctx.fill();
      };

tools.line_crayon.onmousedown = function (e) {
    ctx.beginPath();
//  isDrawing = true;
//  ctx.moveTo((mouse_x + offset_x)/scale, (mouse_y + offset_y)/scale);
    
       last_x = (mouse_x + offset_x)/scale;
        last_y = (mouse_y + offset_y)/scale;
        current_x = (mouse_x + offset_x)/scale;
        current_y = (mouse_y + offset_y)/scale;
        draw_circle(current_x, current_y, color);
        isDrawing = true;
};

tools.line_crayon.onmousemove = function (e) {
//  if (isDrawing) {
//      ctx.lineTo((mouse_x + offset_x)/scale, (mouse_y + offset_y)/scale);
//    ctx.stroke();
//      
//      
//      
//  }
    
            if (isDrawing === true) {
          current_x = (mouse_x + offset_x)/scale;
          current_y = (mouse_y + offset_y)/scale;

          var progress = 0.0;

          while (progress <= 1.0) {
            var x_inside = last_x + (current_x - last_x) * progress;
            var y_inside = last_y + (current_y - last_y) * progress;
            draw_circle(x_inside, y_inside, color);
            progress = progress + 0.04;
          }

          last_x = current_x;
          last_y = current_y;
            
            
        }
};


tools.line_crayon.onmouseup = function() {
    ctx.closePath();
  isDrawing = false;
};

tools.line_crayon.button = document.createElement('button');
tools.line_crayon.button.dataset.tool = 'line_crayon';
tools.line_crayon.button.innerHTML = '&nbsp;';
menu.appendChild(tools.line_crayon.button);
