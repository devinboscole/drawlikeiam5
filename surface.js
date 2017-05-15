var can = document.getElementById('can'),
    ctx = can.getContext('2d'),
    isDrawing = false,
    tools = {},
    tool,
    menu = document.getElementById('tools'),
    scale = 0.5;

can.width = window.innerWidth * 2;
can.height = window.innerHeight * 2;
can.style.width = can.width * scale;
can.style.height = can.height * scale;

//var stick = new Array ();
//      stick[0] = new Image ();
//      stick[0].src = 'assets/stick0.png';
//      stick[1] = new Image ();
//      stick[1].src = 'assets/stick1.png';
//      stick[2] = new Image ();
//      stick[2].src = 'assets/stick2.png';
//      stick[3] = new Image ();
//      stick[3].src = 'assets/stick3.png';
//      stick[4] = new Image ();
//      stick[4].src = 'assets/stick4.png';
//
//var page = new Array ();
//      page[0] = new Image ();
//      page[0].src = 'assets/page0.png';
//      page[1] = new Image ();
//      page[1].src = 'assets/page1.png';
//      page[2] = new Image ();
//      page[2].src = 'assets/page2.png';
//      page[3] = new Image ();
//      page[3].src = 'assets/page3.png';

can.onclick = function (e) { 
    if (tool && tool.click) {
        tool.click (e);
    };
    document.getElementById ("errors").style.display = "none";
    showprompt ();
};
can.onmousedown = function (e) {
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
    document.getElementById ("prompts").style.display = "none";

    if (tool && tool.onmousedown) {
        tool.onmousedown (e);
    };
};

can.onmousemove = function (e) {

    if (tool && tool.onmousemove) {
        tool.onmousemove (e);
    };
};

can.onmouseup = function (e) { 

    if (tool && tool.onmouseup) {
        tool.onmouseup (e);
    };
};
