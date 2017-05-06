var timestamp = 0;
$( document ).ready(
function () {
    setInterval (function() {
            $.ajax({
type: "POST",
url: "installation.php",
data: { 
timestamp:timestamp
  }
}).done(function(o) {
  console.log(o);
  // If you want the file to be visible in the browser 
  // - please modify the callback in javascript. All you
  // need is to return the url to the file, you just saved 
  // and than put the image in your browser.
});
}
    }, 3000)
    }
)