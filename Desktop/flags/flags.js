// Canvas context
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// Fix a stupid context bug that blurs
// the pixels
ctx.translate(0.5, 0.5);

// canvas rendering tutorial
// how to draw a border line around the entire flag so white band doesn't disappear?
//
//
//// Netherlands Flag
///
/// Outline
ctx.beginPath();
ctx.rect(20,20,1000,600);
ctx.lineWidth = 5;
ctx.strokeStyle = "#000";
ctx.stroke();

/////**Figure out inner outline**
//ctx.beginPath();
//ctx.rect(20,220,1000,200);
//ctx.lineWidth = 5;
//ctx.strokeStyle = "#000";
//ctx.stroke();

//// Color
ctx.fillStyle = "red";
ctx.fill();
ctx.fillRect(20, 20, 1000, 200)

ctx.fillStyle = "white";
ctx.fillRect(20, 220, 1000, 200)

ctx.fillStyle = "blue";
ctx.fillRect(20, 420, 1000, 200)

// Honduras Flag
//
// /// Outline
ctx.beginPath();
ctx.rect(20,820,1000,600);
ctx.lineWidth = 5;
ctx.strokeStyle = "#000";
ctx.stroke();

// Color
ctx.fillStyle = "blue";
ctx.fillRect(20, 820, 1000, 200)

ctx.fillStyle = "white";
ctx.fillRect(20, 1020, 1000, 200)

ctx.fillStyle = "blue";
ctx.fillRect(20, 1220, 1000, 200)

//india flag tutorial
//ctx.beginPath();
//ctx.moveTo(100,150);
//ctx.lineTo(450,50);
//ctx.stroke();
//
function drawStar(cx,cy,spikes,outerRadius,innerRadius){
      var rot=Math.PI/2*3;
      var x=cx;
      var y=cy;
      var step=Math.PI/spikes;

      ctx.beginPath();
      ctx.moveTo(cx,cy-outerRadius)
      for(i=0;i<spikes;i++){
        x=cx+Math.cos(rot)*outerRadius;
        y=cy+Math.sin(rot)*outerRadius;
        ctx.lineTo(x,y)
        rot+=step

        x=cx+Math.cos(rot)*innerRadius;
        y=cy+Math.sin(rot)*innerRadius;
        ctx.lineTo(x,y)
        rot+=step
      }
      ctx.lineTo(cx,cy-outerRadius)
      ctx.strokeStyle="blue";
      ctx.fillStyle ="blue";
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }

    drawStar(375,1070,5,25,10);
    drawStar(500,1120,5,25,10);
    drawStar(625,1070,5,25,10);
    drawStar(375,1170,5,25,10);
    drawStar(625,1170,5,25,10);
