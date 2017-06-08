tools.line_pencil = {};

//
//var x = 100,
//  y = 100,
//  angle1 = 0.0,
//  segLength = 50;

/*var cursoroffset = function (mouseX, mouseY){
    

dx = mouseX - x;
  dy = mouseY - y;
  angle1 = Math.atan2(dy, dx);
    //console.log(angle1);
    //console.log(Math.sin(angle1));
    //console.log(Math.cos(angle1));
    segLength = Math.random()*10-5 + segLength;
  x = (Math.cos(angle1) * segLength);
  y = (Math.sin(angle1) * segLength);
    
}*/

//
tools.line_pencil.onmousedown = function (e) {
    ctx.beginPath();
ctx.lineWidth = thickness;
ctx.strokeStyle = color;
  isDrawing = true;
  //cursoroffset(e.offsetX/scale, e.offsetY/scale); 
//  ctx.moveTo((mouse_x + offset_x)/scale, (mouse_y + offset_y)/scale);
    ctx.moveTo((parseInt(point.style.left))/scale, parseInt(point.style.top)/scale);
};

tools.line_pencil.onmousemove = function (e) {
  if (isDrawing) {
   // ctx.lineTo(e.offsetX/scale, e.offsetY/scale);
//    console.log((mouse_x + offset_x)/scale);
//    console.log((parseInt(point.style.left))/scale);
//      ctx.lineTo((mouse_x + offset_x)/scale, (mouse_y + offset_y)/scale);
      ctx.lineTo((parseInt(point.style.left))/scale, parseInt(point.style.top)/scale);
      //console.log(e.offsetX/scale);
      //console.log(e.offsetY/scale);
      //console.log(e.offsetX/scale - x);
      //console.log(e.offsetY/scale - y);
      //ctx.lineTo (e.offsetX/scale - x, e.offsetY/scale - y);
    ctx.stroke();
  }
};


tools.line_pencil.onmouseup = function() {
    ctx.closePath();
  isDrawing = false;
};

tools.line_pencil.button = document.createElement('button');
tools.line_pencil.button.id = "tool_pencil";
tools.line_pencil.button.dataset.tool = 'line_pencil';
tools.line_pencil.button.innerHTML = '&nbsp;';
menu.appendChild(tools.line_pencil.button);
