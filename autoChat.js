const TB = document.querySelectorAll('[role="textbox"]')[0];

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 8) {
      TB.focus();
    }
});