var timestamp = 0;
var totalimage = 0;
var imagecounter = 0;
var columns = 20;
var rows = 16;
var padding = 100; 
var width = (window.innerWidth - padding)/columns;
var height = width*9/16; 
$( document ).ready(
function () {
    var htmltable = "";
    for (var i = 0; i < rows; i++) {
        htmltable += "<tr>";
        for (var j = 0; j < columns; j++) {
            htmltable += "<td><img id=\'img-"+imagecounter+"\' width=\'"+width+"\' height=\'"+height+"\'></td>";
            imagecounter +=1; 
        }
        htmltable += "</tr>";
    }
    document.getElementById("imagetable").innerHTML = htmltable;
    setInterval (function() {
            $.ajax({
type: "POST",
url: "installation.php",
data: { 
timestamp:timestamp
  }
}).done(function(o) {
  console.log(o);
  timestamp = JSON.parse(o)["timestamp"];
                updateimages (JSON.parse(o)["array"]);
  // If you want the file to be visible in the browser 
  // - please modify the callback in javascript. All you
  // need is to return the url to the file, you just saved 
  // and than put the image in your browser.
});
}, 3000);
    }
)

function updateimages (images) {
    var imagelength = images.length;
    for (var i = 0; i < imagecounter; i++) {
        var sourceindex = imagecounter - i - 1; 
        var desindex = sourceindex + imagelength;
        if (desindex < columns*rows) {
            document.getElementById ("img-"+desindex).src =  document.getElementById ("img-"+sourceindex).src;
        }
    }
    for (var i = 0; i < imagelength; i++) {
        document.getElementById ("img-"+i).src = "images/"+images[i];
    }
}
