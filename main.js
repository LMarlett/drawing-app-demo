// define the canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;
context.lineWidth = 10;

// get the html elements
var checkboxRandom = document.getElementById ("randomColor");
var checkboxErase = document.getElementById ("eraserColor");

// define the listeners for interaction
var mouseClicked = false, mouseReleased = true;
canvas.addEventListener("click", onMouseClick, false);
canvas.addEventListener("mousemove", onMouseMove, false);
 
// define what happens when you click the mouse on the canvas
function onMouseClick(e) {
    mouseClicked = !mouseClicked;
}

// define what happens when yu move the mouse
function onMouseMove(e) {
    if (mouseClicked ) {
        context.beginPath();
        context.arc(e.clientX-9, e.clientY-40, 2, 0, Math.PI * 2, false);
        context.strokeStyle = getStrokeColor();
        context.stroke();
     }
}
// get randomized colors for the stroke
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// clear the canvas
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    mouseClicked = false;    
}

// get a stroke color
function getStrokeColor(e){
    if(checkboxRandom.checked){
        context.strokeStyle = randomColor();  
    } else if(checkboxErase.checked){
        context.strokeStyle = 'white';
    } else {
        context.strokeStyle = 'black';  
    }
}