tools.line_thickness = {};

document.getElementById ("thickness1").onclick = function (e) {
    thickness = 1;
    document.getElementById ("thicknessoptions").style.display = "none";
}

document.getElementById ("thickness2").onclick = function (e) {
    thickness = 5;
            document.getElementById ("thicknessoptions").style.display = "none";
}

document.getElementById ("thickness3").onclick = function (e) {
    thickness = 25;
            document.getElementById ("thicknessoptions").style.display = "none";
}


tools.line_thickness.click = function (e) { 
};

tools.line_thickness.button = document.createElement('button');
tools.line_thickness.button.dataset.tool = 'line_thickness';
tools.line_thickness.button.innerHTML = '&nbsp;';
menu.appendChild(tools.line_thickness.button);
