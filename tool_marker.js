tools.line_marker = {};

var marker1 = new Image();
marker1.src = 'assets/marker-thickness1.png';

var marker2 = new Image();
marker2.src = 'assets/marker-thickness2.png';

var marker3 = new Image();
marker3.src = 'assets/marker-thickness3.png';

var markerwhite1 = new Image();
markerwhite1.src = 'assets/marker-white1.png';

var markerwhite2 = new Image();
markerwhite2.src = 'assets/marker-white2.png';

var markerwhite3 = new Image();
markerwhite3.src = 'assets/marker-white3.png';

var markerpurple1 = new Image();
markerpurple1.src = 'assets/marker-purple1.png';

var markerpurple2 = new Image();
markerpurple2.src = 'assets/marker-purple2.png';

var markerpurple3 = new Image();
markerpurple3.src = 'assets/marker-purple3.png';

var markerblue1 = new Image();
markerblue1.src = 'assets/marker-blue1.png';

var markerblue2 = new Image();
markerblue2.src = 'assets/marker-blue2.png';

var markerblue3 = new Image();
markerblue3.src = 'assets/marker-blue3.png';

var markergreen1 = new Image();
markergreen1.src = 'assets/marker-green1.png';

var markergreen2 = new Image();
markergreen2.src = 'assets/marker-green2.png';

var markergreen3 = new Image();
markergreen3.src = 'assets/marker-green3.png';

var markeryel1 = new Image();
markeryel1.src = 'assets/marker-yel1.png';

var markeryel2 = new Image();
markeryel2.src = 'assets/marker-yel2.png';

var markeryel3 = new Image();
markeryel3.src = 'assets/marker-yel3.png';

var markerorange1 = new Image();
markerorange1.src = 'assets/marker-orange1.png';

var markerorange2 = new Image();
markerorange2.src = 'assets/marker-orange2.png';

var markerorange3 = new Image();
markerorange3.src = 'assets/marker-orange3.png';

var markerred1 = new Image();
markerred1.src = 'assets/marker-red1.png';

var markerred2 = new Image();
markerred2.src = 'assets/marker-red2.png';

var markerred3 = new Image();
markerred3.src = 'assets/marker-red3.png';

var markerpink1 = new Image();
markerpink1.src = 'assets/marker-pink1.png';

var markerpink2 = new Image();
markerpink2.src = 'assets/marker-pink2.png';

var markerpink3 = new Image();
markerpink3.src = 'assets/marker-pink3.png';

function distanceBetween(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}
function angleBetween(point1, point2) {
  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
}

ctx.lineJoin = ctx.lineCap = 'round';

var lastPoint;

tools.line_marker.onmousedown = function(e) {
    
    if (buddy == "bobby") {
    } else {
  isDrawing = true;
  lastPoint = {x: (mouse_x + offset_x)/scale, y: (mouse_y + offset_y)/scale};
    }
};

tools.line_marker.onmousemove = function(e) {
  if (!isDrawing) return;
  
  var currentPoint = {x: (mouse_x + offset_x)/scale, y: (mouse_y + offset_y)/scale};
  var dist = distanceBetween(lastPoint, currentPoint);
  var angle = angleBetween(lastPoint, currentPoint);
  
  for (var i = 0; i < dist; i++) {
    x = lastPoint.x + (Math.sin(angle) * i) - 25;
    y = lastPoint.y + (Math.cos(angle) * i) - 25;
   if (thickness == 14 && color == "#0f0f0f") {
       ctx.drawImage(marker1, x, y);
   } else if (thickness == 5 && color == "#0f0f0f") {
              ctx.drawImage(marker2, x, y);
   } else if (thickness == 25 && color == "#0f0f0f") {
              ctx.drawImage(marker3, x, y);
   } else if (thickness == 14 && color == "#ffffff") {
            ctx.drawImage(markerwhite1, x, y);
   } else if (thickness == 5 && color == "#ffffff") {
            ctx.drawImage(markerwhite2, x, y);
   } else if (thickness == 25 && color == "#ffffff") {
            ctx.drawImage(markerwhite3, x, y);
   } else if (thickness == 14 && color == "#7302b5") {
            ctx.drawImage(markerpurple1, x, y);
   } else if (thickness == 5 && color == "#7302b5") {
            ctx.drawImage(markerpurple2, x, y);
   } else if (thickness == 25 && color == "#7302b5") {
            ctx.drawImage(markerpurple3, x, y);
   } else if (thickness == 14 && color == "#1259d8") {
            ctx.drawImage(markerblue1, x, y);
   } else if (thickness == 5 && color == "#1259d8") {
            ctx.drawImage(markerblue2, x, y);
   } else if (thickness == 25 && color == "#1259d8") {
            ctx.drawImage(markerblue3, x, y);
   } else if (thickness == 14 && color == "#27ea4b") {
            ctx.drawImage(markergreen1, x, y);
   } else if (thickness == 5 && color == "#27ea4b") {
            ctx.drawImage(markergreen2, x, y);
   } else if (thickness == 25 && color == "#27ea4b") {
            ctx.drawImage(markergreen3, x, y);
   } else if (thickness == 14 && color == "#fff927") {
            ctx.drawImage(markeryel1, x, y);
   } else if (thickness == 5 && color == "#fff927") {
            ctx.drawImage(markeryel2, x, y);
   } else if (thickness == 25 && color == "#fff927") {
            ctx.drawImage(markeryel3, x, y);
   } else if (thickness == 14 && color == "#ff9600") {
            ctx.drawImage(markerorange1, x, y);
   } else if (thickness == 5 && color == "#ff9600") {
            ctx.drawImage(markerorange2, x, y);
   } else if (thickness == 25 && color == "#ff9600") {
            ctx.drawImage(markerorange3, x, y);
   } else if (thickness == 14 && color == "#ff1212") {
            ctx.drawImage(markerred1, x, y);
   } else if (thickness == 5 && color == "#ff1212") {
            ctx.drawImage(markerred2, x, y);
   } else if (thickness == 25 && color == "#ff1212") {
            ctx.drawImage(markerred3, x, y);
   } else if (thickness == 14 && color == "#ff33b6") {
            ctx.drawImage(markerpink1, x, y);
   } else if (thickness == 5 && color == "#ff33b6") {
            ctx.drawImage(markerpink2, x, y);
   } else if (thickness == 25 && color == "#ff33b6") {
            ctx.drawImage(markerpink3, x, y);
   }
      
      
      
      
      
      
      
      
  }
  
  lastPoint = currentPoint;
};

tools.line_marker.onmouseup = function() {
  isDrawing = false;
};

tools.line_marker.button = document.createElement('button');
tools.line_marker.button.id = "tool_marker";
tools.line_marker.button.dataset.tool = 'line_marker';
tools.line_marker.button.innerHTML = '&nbsp;';
menu.appendChild(tools.line_marker.button);
