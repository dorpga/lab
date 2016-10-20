var m = 0;
    
if (typeof(Humble) == 'undefined') window.Humble = {};
Humble.Trig = {};
Humble.Trig.init = init;

var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    
    canvas = document.getElementById("wave");
    
    canvas.width = 800;
    canvas.height = 300;
    
    context = canvas.getContext("2d");
    context.font = '18px sans-serif';
    context.strokeStyle = '#000';
    context.lineJoin = 'round';
    
    height = canvas.height;
    width = canvas.width;
    
    xAxis = Math.floor(height/2);
    yAxis = Math.floor(width/4);
    
    context.save();
    draw();
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
draw = function () {
    
    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Draw the axes in their own path
    context.beginPath();
    drawAxes();
    context.stroke();
    
    // Set styles for animated graphics
    context.save();
    context.strokeStyle = '#00f';
    context.fillStyle = '#fff';
    context.lineWidth = 2;

    // Draw the sine curve at time draw.t, as well as the circle.
    context.beginPath();
    drawSine(draw.t);
    context.stroke();
    
    // Restore original styles
    context.restore();
    setTimeout(draw, 35);
};
draw.seconds = 0;
draw.t = 0;

/**
 * Function to draw axes
 */
function drawAxes() {
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 */
function drawSine(t) {

    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t;
    switch (m) {
        case 0:
              var y = Math.sin(x);
              break;
        case 1:
               var y = Math.cos(x);
               break;
        case 2:
               var y = Math.tan(x);
               break;
    }
    context.moveTo(yAxis, unit*y+xAxis);
    
    // Loop to draw segments
    for (i = yAxis; i <= width; i += 10) {
        x = t+(-yAxis+i)/unit;
       switch (m) {
        case 0:
              var y = Math.sin(x);
              break;
        case 1:
               var y = Math.cos(x);
               break;
        case 2:
               var y = Math.tan(x);
               break;
    }
        context.lineTo(i, unit*y+xAxis);
    }
}

/*
 * Function to draw circle
 */
function drawCircle() {
}

/**
 * Function to draw arrow
 */
function drawArrow(t) {
}

    Humble.Trig.init()
