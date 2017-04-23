tools.line_color = {};

document.getElementById ("black").onclick = function (e) {
    color = "#0f0f0f";
    document.getElementById ("coloroptions").style.display = "none";
}

document.getElementById ("white").onclick = function (e) {
    color = "#ffffff";
    document.getElementById ("coloroptions").style.display = "none";
}

document.getElementById ("purple").onclick = function (e) {
    color = "#7302b5";
    document.getElementById ("coloroptions").style.display = "none";
}

document.getElementById ("blue").onclick = function (e) {
    color = "#1259d8";
    document.getElementById ("coloroptions").style.display = "none";
}

document.getElementById ("green").onclick = function (e) {
    color = "#27ea4b";
    document.getElementById ("coloroptions").style.display = "none";
}

document.getElementById ("yellow").onclick = function (e) {
    color = "#fff927";
    document.getElementById ("coloroptions").style.display = "none";
}

document.getElementById ("orange").onclick = function (e) {
    color = "#ff9600";
    document.getElementById ("coloroptions").style.display = "none";
}

document.getElementById ("red").onclick = function (e) {
    color = "#ff1212";
    document.getElementById ("coloroptions").style.display = "none";
}

document.getElementById ("pink").onclick = function (e) {
    color = "#ff33b6";
    document.getElementById ("coloroptions").style.display = "none";
}

tools.line_color.click = function (e) { 
};

tools.line_color.button = document.createElement('button');
tools.line_color.button.dataset.tool = 'line_color';
tools.line_color.button.innerHTML = '&nbsp;';
menu.appendChild(tools.line_color.button);
