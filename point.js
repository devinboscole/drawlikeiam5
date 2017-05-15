var mouse_x = 0;
var mouse_y = 0;
var offset_x = 10; // Starting offset_x
var offset_y = -10; // Starting offset_y
var offset_x_velocity = 1; // Try changing this to 0.5 or 2.
var offset_y_velocity = 1;
var drawingphase = "regular";

var radius = 20;

// Set mouse coordinates any time the user moves the mouse.
window.onmousemove = function (e) {
    mouse_x = e.x;
    mouse_y = e.y;
}


var thresholddrawing = 0.01; 
var stepcounts = 0; 
var stepthreshold = 5; 
var stepinterval; 
var stepvelocity = 8; 
var steprange = 3;
var angle = 0;

// Loop each video frame.
var loop = function () {
    // Increase offset_x by offset_x_velocity and reverse it if it hits the limit (20 or -20).

    if (drawingphase == "regular") {

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
        var accident = Math.random();
        
        if (accident < thresholddrawing) {
            console.log("accident!");
            drawingphase = "random";
            stepthreshold = Math.floor(Math.random() * stepthreshold/2) + stepthreshold;
            point.style.left = mouse_x + "px";
            point.style.top = mouse_y + "px";

            angle = Math.random ()*Math.PI*2;
        }
    } else {
        stepcounts +=1; 
//        console.log(point.style.left);
//        console.log((parseInt(point.style.left) + stepvelocity*Math.cos(angle) + Math.random()*steprange - steprange / 2) + 'px');
        point.style.left = parseInt(point.style.left) + stepvelocity*Math.cos(angle) + Math.random()*steprange - steprange / 2 + 'px';
        point.style.top = parseInt(point.style.top) + stepvelocity*Math.sin(angle) + Math.random()*steprange - steprange / 2 +'px';
        if (stepcounts >= stepthreshold) {
//            clearInterval (stepinterval);
            drawingphase = "regular";
            stepcounts = 0; 
        }
    }

    if (drawingphase == "regular") {
        
//            stepinterval = setInterval (function () {
//                stepcounts +=1; 
//                point.style.left = parseInt(point.style.left) + stepvelocity*Math.cos(angle) + Math.random()*steprange - steprange / 2 + 'px';
//                point.style.top = parseInt(point.style.top) + stepvelocity*Math.sin(angle) + Math.random()*steprange - steprange / 2 +'px';
//                if (stepcounts == stepthreshold) {
//                    clearInterval (stepinterval);
//                    drawingphase = "regular";
//                    stepcounts = 0; 
//                }
//            },1); 
//        }
    }

    window.requestAnimationFrame(loop);
};

// Start the loop.
window.requestAnimationFrame(loop);