var canvas= new fabric.Canvas('myCanvas');
// player position
playerX=10;
playerY=10;
//block hieght and width 
var blockWidth=30;
var blockHeight=30;
//var player and block object
var playerObject="";
var blockObject="";
//fun update player move
function playerUpdate() {
fabric.Image.fromURL("player.png" , 
function(Img){
playerObject=Img;
playerObject.scaleToWidth(150);
playerObject.scaleToHeight(140);
playerObject.set({
   top:playerY,
   left:playerX 
}
);
canvas.add(playerObject);
}
);
}

//fun update block 
function new_image(get_image) {
    fabric.Image.fromURL(get_image , 
    function(Img){
    blockObject=Img;
    blockObject.scaleToWidth(blockWidth);
    blockObject.scaleToHeight(blockHeight);
    blockObject.set({
       top:playerY,
       left:playerX 
    }
    );
    canvas.add(blockObject);
    }
    );
    }
