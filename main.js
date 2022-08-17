mouse_event = "empty";
var last_position_of_x , last_position_of_y;
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "blue";
line_width = 3;
canvas.addEventListener("mousedown" , mouse_down);
function mouse_down(e){
    mouse_event = "mousedown";
    
    
}
canvas.addEventListener("mouseup" , mouse_up);
function mouse_up(e){
    mouse_event = "mouseup";
    
    
}
canvas.addEventListener("mouseleave" , mouse_leave);
function mouse_leave(e){
    mouse_event = "mouseleave";
    
    
}
canvas.addEventListener("mousemove" , mouse_move);
function mouse_move(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if(mouse_event == "mouse_down"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= line_width;
        console.log("lastX= "+ last_position_of_x + ", lastY= " + last_position_of_y);
        ctx.moveTo(last_position_of_x , last_position_of_y);
        console.log("currentX= " + current_position_of_x + " ,currentY= " + current_position_of_y);
    ctx.lineTo(current_position_of_x , current_position_of_y);
    ctx.stroke();
    
}
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;

    
}