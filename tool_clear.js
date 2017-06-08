tools.line_clear = {};

tools.line_clear.onmousedown = function (e) {
      if (buddy == "stacy") {
    } else {
  isDrawing = false;
    }
};

tools.line_clear.onmousemove = function (e) {
  isDrawing = false;
};


tools.line_clear.onmouseup = function() {
  isDrawing = false;
};

tools.line_clear.button = document.createElement('button');
tools.line_clear.button.id = "tool_clear";
tools.line_clear.button.dataset.tool = 'line_clear';
tools.line_clear.button.innerHTML = '&nbsp;';
menu.appendChild(tools.line_clear.button);

