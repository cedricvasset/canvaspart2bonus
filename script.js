var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
/*E*/
ctx.beginPath();
ctx.moveTo(150,100);
ctx.lineTo(260,100);
ctx.lineWidth = 6;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150,100);
ctx.lineTo(150,400);
ctx.lineWidth = 6;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150,400);
ctx.lineTo(250,400);
ctx.lineWidth = 6;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150,250);
ctx.lineTo(250,250);
ctx.lineWidth = 6;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();
/*2*/
ctx.beginPath();
ctx.moveTo(260,100);
ctx.quadraticCurveTo(750,-150,200,480);
ctx.strokeStyle="#ea4e1d";
ctx.lineWidth = 20;
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200,480);
ctx.quadraticCurveTo(370,420,380,440);
ctx.lineTo(380,440);
ctx.lineStyle="#ea4e1d";
ctx.lineWidth = 20;
ctx.stroke();
/* N*/
ctx.beginPath();
ctx.moveTo(495,400);
ctx.lineTo(495,100);
ctx.lineTo(700,400);
ctx.lineTo(700,100);
ctx.lineWidth = 6;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.closePath();
/* losange*/
ctx.beginPath();
ctx.moveTo(800,100);
ctx.lineTo(820,120);
ctx.lineTo(780,120);
ctx.lineTo(800,100);
ctx.fillStyle = "#ebebeb";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#ebebeb";
ctx.fillRect(780,120,40,30)
ctx.closePath();
ctx.beginPath();
ctx.moveTo(800,170);
ctx.lineTo(820,150);
ctx.lineTo(780,150);
ctx.lineTo(800,170);
ctx.fillStyle= "#ebebeb"
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(780,160);
ctx.lineTo(800,180);
ctx.lineTo(760,180);
ctx.lineTo(780,160);
ctx.fillStyle = "#dbdadb";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#dbdadb";
ctx.fillRect(760,180,40,30)
ctx.closePath();
ctx.beginPath();
ctx.moveTo(780,230);
ctx.lineTo(800,210);
ctx.lineTo(760,210);
ctx.lineTo(780,230);
ctx.fillStyle= "#dbdadb"
ctx.fill();

ctx.beginPath();
ctx.moveTo(830,160);
ctx.lineTo(850,180);
ctx.lineTo(810,180);
ctx.lineTo(830,160);
ctx.fillStyle = "#595656";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#595656";
ctx.fillRect(810,180,40,30)
ctx.closePath();
ctx.beginPath();
ctx.moveTo(830,230);
ctx.lineTo(850,210);
ctx.lineTo(810,210);
ctx.lineTo(830,230);
ctx.fillStyle= "#595656"
ctx.fill();

ctx.beginPath();
ctx.moveTo(800,220);
ctx.lineTo(820,240);
ctx.lineTo(780,240);
ctx.lineTo(800,220);
ctx.fillStyle = "#ea4e1a";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#ea4e1a";
ctx.fillRect(780,240,40,30)
ctx.closePath();
ctx.beginPath();
ctx.moveTo(800,290);
ctx.lineTo(820,270);
ctx.lineTo(780,270);
ctx.lineTo(800,290);
ctx.fillStyle= "#ea4e1a"
ctx.fill();

ctx.beginPath();
ctx.moveTo(780,280);
ctx.lineTo(800,300);
ctx.lineTo(760,300);
ctx.lineTo(780,280);
ctx.fillStyle = "#878787";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#878787";
ctx.fillRect(760,300,40,30)
ctx.closePath();
ctx.beginPath();
ctx.moveTo(780,350);
ctx.lineTo(800,330);
ctx.lineTo(760,330);
ctx.lineTo(780,350);
ctx.fillStyle= "#878787"
ctx.fill();

ctx.beginPath();
ctx.moveTo(830,280);
ctx.lineTo(850,300);
ctx.lineTo(810,300);
ctx.lineTo(830,280);
ctx.fillStyle = "#ececec";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#ececec";
ctx.fillRect(810,300,40,30)
ctx.closePath();
ctx.beginPath();
ctx.moveTo(830,350);
ctx.lineTo(850,330);
ctx.lineTo(810,330);
ctx.lineTo(830,350);
ctx.fillStyle= "#ececec"
ctx.fill();

ctx.beginPath();
ctx.moveTo(870,190);
ctx.lineTo(880,200);
ctx.lineTo(860,200);
ctx.lineTo(870,190);
ctx.fillStyle = "#ececec";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#ececec";
ctx.fillRect(860,200,20,15)
ctx.closePath();
ctx.beginPath();
ctx.moveTo(870,225);
ctx.lineTo(880,215);
ctx.lineTo(860,215);
ctx.lineTo(870,225);
ctx.fillStyle= "#ececec"
ctx.fill();

ctx.beginPath();
ctx.moveTo(885,225);
ctx.lineTo(890,230);
ctx.lineTo(880,230);
ctx.lineTo(885,225);
ctx.fillStyle = "#a4a4a4";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#a4a4a4";
ctx.fillRect(880,230,10,7)
ctx.closePath();
ctx.beginPath();
ctx.moveTo(885,242);
ctx.lineTo(890,237);
ctx.lineTo(880,237);
ctx.lineTo(885,242);
ctx.fillStyle= "#a4a4a4"
ctx.fill();

ctx.beginPath();
ctx.moveTo(890,210);
ctx.lineTo(893,213);
ctx.lineTo(887,213);
ctx.lineTo(890,210);
ctx.fillStyle = "#ea4e1a";
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "#ea4e1a";
ctx.fillRect(887,213,6,5)
ctx.closePath();

ctx.beginPath();
ctx.font = "40px serif";
ctx.fillStyle = "#b2b2b2";
ctx.fillText("École du Numérique", 490, 440);
ctx.closePath();

ctx.beginPath();
ctx.font = "40px serif";
ctx.fillStyle = "#b2b2b2";
ctx.fillText("du Noyonnais", 490, 490);
ctx.closePath();
