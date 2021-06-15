var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "#6495ED";
var width = 2;
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
mouseEvent= "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
mouseEvent= "mouseup";
}








canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
mouseEvent= "mouseleave";
}








canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth.width;

        console.log("Last position of x and y coordirnates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordirnates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stoke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}