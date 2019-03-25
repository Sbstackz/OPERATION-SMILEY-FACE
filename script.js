

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let eyes = c.getContext("2d");
let mouth = c.getContext("2d");
let eyebrow = c.getContext("2d");

ctx.beginPath();
ctx.arc(150,50,45,-50,Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

eyes.beginPath();

eyes.arc(130,40,20,20,20*Math.PI);
eyes.fillStyle ="blue";
eyes.fill();
eyes.stroke();
eyes.beginPath();
eyes.arc(170,40,20,20,20*Math.PI);
eyes.fillStyle ="blue";
eyes.fill();

eyes.stroke();

mouth.beginPath();
mouth.arc(150,60,5,20,20*Math.PI);
mouth.fillStyle ="red";
mouth.fill();
mouth.stroke();

eyebrow.beginPath();
eyebrow.rect(145,70,10,10,10*Math.PI);
eyebrow.fillStyle="black";
eyebrow.fill();
eyebrow.stroke();

ctx.font = "30px Arial";
ctx.strokeText("smile!",3,140);
