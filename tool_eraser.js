tools.line_eraser = {};

tools.line_eraser.onmousedown = function (e) {
       if (buddy == "stacy") {
    } else {
    ctx.beginPath();
  isDrawing = true;
        ctx.lineWidth = thickness;
  ctx.moveTo((mouse_x + offset_x)/scale, (mouse_y + offset_y)/scale);
    }
};

tools.line_eraser.onmousemove = function (e) {
  if (isDrawing) {
      ctx.lineTo((mouse_x + offset_x)/scale, (mouse_y + offset_y)/scale);
    ctx.stroke();
  }
};


tools.line_eraser.onmouseup = function() {
    ctx.closePath();
  isDrawing = false;
};

tools.line_eraser.button = document.createElement('button');
tools.line_eraser.button.dataset.tool = 'line_eraser';
tools.line_eraser.button.innerHTML = '&nbsp;';
menu.appendChild(tools.line_eraser.button);

