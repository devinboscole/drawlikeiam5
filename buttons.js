var buttons = document.querySelectorAll('[data-tool]');

var wordstate = "start"; 

var thickness = 5;
var color = "#0f0f0f";
var buddy = "";

//testing for array duplicates with random shuffling
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var linemarkerstory = shuffle(["<span class=\"errormsg\">You do not have a marker becouse you threw it awey. Kim touhed it and she has cooties becos she is a gril.</span>", "<span class=\"errormsg\">second</span>", "<span class=\"errormsg\">third</span>"]); 

var buddyimage1 = shuffle(["url(assets/buddy2.png)", "url(assets/buddy2-b.png)", "url(assets/buddy2-c.png)"]);
var buddyimage2 = shuffle([]);
var buddyimage3 = shuffle([]);

$( document ).ready(function() {
    $(".buddybutton1").css("background-image", buddyimage1[0]);
});

var switch_tool = function (name) {
    if (name != "line_thickness" && name !="line_color" && name !="line_coloring"){
        tool = tools[name];
    }

    document.getElementById ("thicknessoptions").style.display = "none";
    document.getElementById ("coloroptions").style.display = "none";
    document.getElementById ("coloring").style.display = "none";
    //document.getElementById ("errors").style.display = "none";
    document.getElementById ("screen1b").style.display = "none";


    //set the display of the offset that corresponds with the button when clicked
    var point = document.getElementById ("point");

    if (name == "line_pencil"){
        point.style.display = "block";

        //CUSTOM THICKNESS + COLOR ============================================


        //CUSTOM THICKNESS + COLOR ============================================

        ctx.globalCompositeOperation = "source-over";
        ctx.lineJoin = ctx.lineCap = 'round';
        return; //this is one possible end point, if hit this point return 
    } else {
        point.style.display = "none";
    }

    if (name=="line_pen"){
        point.style.display = "block";

        //CUSTOM THICKNESS + COLOR ============================================
        ctx.strokeStyle = "red";
        //CUSTOM THICKNESS + COLOR ============================================

        ctx.lineJoin = ctx.lineCap = 'round';
        ctx.globalCompositeOperation = "source-over";
        return;
    } else {
        point.style.display = "none";
    }

    if (name=="line_marker"){

        if (buddy == "bobby") {

            document.getElementById ("errors").style.display = "block";
            document.getElementById ("errors").innerHTML = linemarkerstory[0];


        } else {
            point.style.display = "block";

            //CUSTOM THICKNESS + COLOR ============================================
            ctx.lineWidth = 4;
            //CUSTOM THICKNESS + COLOR ============================================
            ctx.lineJoin = ctx.lineCap = 'butt';
            ctx.globalCompositeOperation = "source-over";
            return;
        }
    } else {
        point.style.display = "none";
    }


    if (name=="line_crayon"){
        point.style.display = "block";

        //CUSTOM THICKNESS + COLOR ============================================
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 10;
        //CUSTOM THICKNESS + COLOR ============================================

        ctx.lineJoin = ctx.lineCap = 'butt';
        ctx.globalCompositeOperation = "source-over";
        return;
    } else {
        point.style.display = "none";
    }    

    if (name == "line_eraser"){
        if (buddy == "stacy") {

            document.getElementById ("errors").style.display = "block";
            document.getElementById ("errors").innerHTML = "<span class=\"errormsg\">You dont have an erasor becuase you lent it to morgan and he never gave it back. you dnot want to merry morgan anymooe becuase he is a liar and you deseve better tbh.</span>";

        } else {
            point.style.display = "block";
            //CUSTOM THICKNESS + COLOR ============================================

            //CUSTOM THICKNESS + COLOR ============================================
            ctx.strokeStyle = "rgba(255,255,255,1)";
            ctx.globalCompositeOperation = "destination-out";
            ctx.lineJoin = ctx.lineCap = 'round';
            return;
        }
    } else {
        point.style.display = "none";
    }

    if (name == "line_clear"){
        if (buddy == "stacy") {

            document.getElementById ("errors").style.display = "block";
            document.getElementById ("errors").innerHTML = "<span class=\"errormsg\">Yuou donn't want to clear anithing because Ms.H said you are perfect. Perfect peeple do not make mistakes.</span>";

        } else {
            ctx.clearRect(0, 0, can.width, can.height);
            curPage = "";
            return;
        }
    } else {
        point.style.display = "none";
    }

    if (name=="line_stickers"){
        if (buddy == "bobby") {

            document.getElementById ("errors").style.display = "block";
            document.getElementById ("errors").innerHTML = "<span class=\"errormsg\">You dont hav any stickers left because you gave them to Joe. He is your bestfrend.</span>";

        } else {
            point.style.display = "none";
            ctx.globalCompositeOperation = "source-over";
            return;
        }
    } else {
        point.style.display = "none";
    }  


    if (name=="line_thickness"){
        point.style.display = "block";
        //    ctx.globalCompositeOperation = "source-over";
        document.getElementById ("thicknessoptions").style.display = "block";
        return;
    } else {
        point.style.display = "none";
    }  

    if (name=="line_color"){
        if (buddy == "stacy" ){
            document.getElementById ("pink").style.display = "initial";
            document.getElementById ("yellow").style.display = "initial";
            document.getElementById ("green").style.display = "initial";
            point.style.display = "block";
            //    ctx.globalCompositeOperation = "source-over";
            document.getElementById ("coloroptions").style.display = "block";
            return;
        } else if (buddy == "bobby") {
            document.getElementById ("red").style.display = "initial";
            document.getElementById ("orange").style.display = "initial";
            document.getElementById ("purple").style.display = "initial";
            point.style.display = "block";
            //    ctx.globalCompositeOperation = "source-over";
            document.getElementById ("coloroptions").style.display = "block";
            return;
        } else if (buddy == "bob") {
            document.getElementById ("pink").style.display = "initial";
            document.getElementById ("yellow").style.display = "initial";
            document.getElementById ("green").style.display = "initial";
            document.getElementById ("red").style.display = "initial";
            document.getElementById ("orange").style.display = "initial";
            document.getElementById ("purple").style.display = "initial";
            point.style.display = "block";
            //    ctx.globalCompositeOperation = "source-over";
            document.getElementById ("coloroptions").style.display = "block";
            return;
        }
    } else {
        point.style.display = "none";
    }  

    if (name=="line_coloring"){
        point.style.display = "block";
        //    ctx.globalCompositeOperation = "source-over";
        document.getElementById ("coloring").style.display = "block";
        return;
    } else {
        point.style.display = "none";
    }  

    if (name=="line_restart") {
        location.reload();
    }    

};


//overall button click
//if wordstate is not empty then activate these buttons
var tool_button_click = function(e) {
    if (wordstate == "ready") {
        switch_tool(e.target.dataset.tool);
    }
};

for (var button_i = 0;
     button_i < buttons.length;
     button_i += 1) {
    buttons[button_i].onclick = tool_button_click;
    buttons[button_i].style.display = "none";
}

document.getElementById ("sc1-button1").onclick = function (){
    document.getElementById ("screen2").style.display = "block";
    document.getElementById ("screen1").style.display = "none";
    document.getElementById ("about").style.display = "none";
    buddy = "bobby";
    screen = "3";
}

document.getElementById ("sc1-button2").onclick = function (){
    document.getElementById ("screen2").style.display = "block";
    document.getElementById ("screen1").style.display = "none";
    document.getElementById ("about").style.display = "none";
    buddy = "stacy";
    offset_x_velocity = 3;
    offset_y_velocity = 1;
    radius = 40;
    offset_x = 25;
    offset_y = -25;
    screen = "3";
}

document.getElementById ("sc1-button3").onclick = function (){
    document.getElementById ("screen2").style.display = "block";
    document.getElementById ("screen1").style.display = "none";
    document.getElementById ("about").style.display = "none";
    buddy = "bob";
    offset_x_velocity = 2;
    offset_y_velocity = 2;
    radius = 30;
    offset_x = 20;
    offset_y = -20;
    screen = "3";
}

document.getElementById ("about").onclick = function (){
    document.getElementById ("screen1b").style.display = "block";
    document.getElementById ("screen1").style.display = "none";
    document.getElementById ("about").style.display = "none";
    document.getElementById ("aboutback").style.display = "block";
}

document.getElementById ("aboutback").onclick = function (){
    document.getElementById ("screen1").style.display = "block";
    document.getElementById ("screen1b").style.display = "none";
    document.getElementById ("about").style.display = "block";
    document.getElementById ("aboutback").style.display = "none";
}

//error msg on click makes dissapear
document.getElementById ("errors").onclick = function (){
    document.getElementById ("errors").style.display = "none";
    showprompt ();

}





// Used like so
//array for drawing prompts 
var prompts = shuffle(["fish", "cat", "hat", "rat", "dog", "bird", "water", "shirt", "pants", "shoes", "car", "truck", "bus", "mom", "dad", "box", "bike", "comb", "bee", "desk", "baby", "banana", "snake", "cow", "duck", "rabbit", "chicken", "fire", "earth", "sun", "moon", "apple", "bear", "cake", "chair", "corn", "feet", "milk", "money", "sheep", "love", "dress", "sofa", "fork", "spoon", "plane", "meat", "star", "computer", "book", "train"]);
console.log (prompts);

var currentpromptindex = 0;
var startremainingtime = 20; 

function showprompt (){
    if (wordstate == "start") {
        document.getElementById ("prompts").style.display = "block";

        for (var button_i = 0;
             button_i < buttons.length;
             button_i += 1) {
            buttons[button_i].style.display = "none";
        }
        document.getElementById ("prompts").innerHTML = "<span class=\"word\">Your word is " + prompts[currentpromptindex] + "</span>";
        document.getElementById ("single-word").innerHTML = prompts[currentpromptindex];
        document.getElementById ("time-remaining").innerHTML = "0:" + ('0' + startremainingtime).slice(-2);
        currentpromptindex +=1;
        switch_tool('stub');
        isDrawing = false;
        wordstate = "pending";
        document.getElementById ("errors").style.display = "none";
    }

}

var blinkthreshold = 2; 
//change this according to the total timer
var blinkinterval;
var remainingprompt = 2; 
var drawnimages = [];
var interval;
//execute this function every 1000 millisec then update the display
var remainingtime = startremainingtime;
function countdown () {
    interval = setInterval(function(){
        remainingtime -= 1;
        document.getElementById ("time-remaining").innerHTML = "0:" + ('0' + remainingtime).slice(-2);
        if (remainingtime == 0) {
            clearInterval (blinkinterval);
            $('#time-remaining').removeClass('hide');
            $('#time-remaining').removeClass('redtext');
            save ();
        } else if (remainingtime == blinkthreshold) {
            $('#time-remaining').addClass('redtext');
            blinkinterval = setInterval (function () {
                $('#time-remaining').toggleClass('hide');
            }, 100);
        }
    },1000);
}

function save () {
    console.log ("done!");

    //saves drawn images into an object that is being saved locally
    var dataURL = can.toDataURL();
    drawnimages.push ({ 
        imgBase64: dataURL, 
        category: prompts[currentpromptindex - 1]
    }) 
    document.getElementById ("timer").style.display = "none";
    ctx.clearRect(0, 0, can.width, can.height);
    clearInterval(interval); 
    if (remainingprompt > 0) {
        wordstate = "start";
        showprompt ();
        remainingtime  = startremainingtime;
        remainingprompt -= 1;
    } else {
        document.getElementById ("endscreen").style.display = "block";


        document.getElementById ("end").style.display = "block";

        document.getElementById ("point").style.display = "none";
        for (var button_i = 0;
             button_i < buttons.length;
             button_i += 1) {
            buttons[button_i].style.display = "none";

        }
        document.getElementById ("endimage-1").src = drawnimages [0].imgBase64;
        document.getElementById ("endimage-2").src = drawnimages [1].imgBase64;
        document.getElementById ("endimage-3").src = drawnimages [2].imgBase64;

        document.getElementById ("imgcap-1").innerHTML = drawnimages [0].category;
        document.getElementById ("imgcap-2").innerHTML = drawnimages [1].category;
        document.getElementById ("imgcap-3").innerHTML = drawnimages [2].category;
        document.getElementById ("errors").style.display = "none";
    }
}

document.getElementById ("end-cancel").onclick = function (){
    location.reload();
}

var submitcount = 0;

document.getElementById ("end-submit").onclick = function (){

    for (var i=0; i < 3; i++) {    
        $.ajax({
            type: "POST",
            url: "save.php",
            data: { 
                imgBase64: drawnimages [i].imgBase64, 
                category: drawnimages [i].category,
            }
        }).done(function(o) {
            console.log('saved');
            console.log(o);
            submitcount +=1;
            if (submitcount == 3) {
                document.getElementById ("confirmbox").style.display = "block";
                document.getElementById ("endscreen").style.display = "none";
                document.getElementById ("end").style.display = "none";
            } 
            ctx.clearRect(0, 0, can.width, can.height);
            // If you want the file to be visible in the browser 
            // - please modify the callback in javascript. All you
            // need is to return the url to the file, you just saved 
            // and than put the image in your browser.
        });
    }
}

document.getElementById ("end-confirm").onclick = function (){
    location.reload();
}

document.getElementById ("done").onclick = function (){
    save ();
}

document.getElementById ("prompts").onclick = function (){
    document.getElementById ("prompts").style.display = "none";
    if (wordstate == "pending") {
        wordstate = "ready";
        switch_tool('line_pencil');
        countdown ();
        for (var button_i = 0;
             button_i < buttons.length;
             button_i += 1) {
            buttons[button_i].style.display = "inline-block";
        }
        document.getElementById ("timer").style.display = "block";
    }
}

document.getElementById ("td-1").onclick = function (){
    console.log ("hello");
    sendajax ("cat");
//    window.location.href = "http://stackoverflow.com";
}

document.getElementById ("td-2").onclick = function (){
        sendajax ("nonexistencasfasdfads");
}

document.getElementById ("td-3").onclick = function (){
}

function sendajax (category) {
     $.ajax({
            type: "POST",
            url: "ref.php",
            data: { 
                category: category,
            }
        }).done(function(o) {
            console.log('refed');
             document.getElementById ("endscreen").style.display = "none";
         document.getElementById ("refscreen").style.display = "block";
//             ask the backend for 6 images  and the backend populate a reply with an object "o" which contains the 6 latest images
         var response = JSON.parse(o);
  if (response["array"].length > 0) {
    updateimages (response["array"]);
  }
        });
}

function updateimages (images) {
     var imagelength = images.length;
    for (var i = 0; i < imagelength; i++) {
        console.log(images[i]);
        document.getElementById ("refimage-"+i).src = "images/"+images[i];
    }
}

document.getElementById ("ref-back").onclick = function (){
                 document.getElementById ("endscreen").style.display = "block";
         document.getElementById ("refscreen").style.display = "none";
}
