var canvas, pinkBox, redBox, greenBox, blueBox, movingBox;
var music;
var m1, m2, m3, m4, m5, m6, m7, m8; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

     //creating the borders
     m1 = createSprite(140,10,270,10);
     m1.shapeColor = "black";
     
     m2 = createSprite(660,10,270,10);
     m2.shapeColor = "black";
     
     m3 = createSprite(790,88,10,178);
     m3.shapeColor = "black";
 
     m4 = createSprite(790,513,10,178);
     m4.shapeColor = "black";
 
     m5 = createSprite(660,590,270,10);
     m5.shapeColor = "black";
 
     m6 = createSprite(140,590,270,10);
     m6.shapeColor = "black";
 
     m7 = createSprite(10,88,10,178);
     m7.shapeColor = "black";
 
     m8 = createSprite(10,513,10,178);
     m8.shapeColor = "black";

    //create 4 different surfaces
    pinkBox = createSprite(400,585,250,40);
    pinkBox.shapeColor = "deeppink";

    greenBox = createSprite(15,300,40,300);
    greenBox.shapeColor = "green";

    redBox = createSprite(400,15,300,40);
    redBox.shapeColor = "red";

    blueBox = createSprite(785,300,40,300);
    blueBox.shapeColor = "blue";

    
    //create box sprite and give velocity
    movingBox = createSprite(Math.round(random(20,750)),350,40,40);
    movingBox.shapeColor = "grey";
    movingBox.velocityX = 5;
    movingBox.velocityY = -5;

}

function draw() {
    background("lightblue");
  //create edgeSprite
   createEdgeSprites(); 
  
    //add condition to check if box touching surface and make it box 
    if(movingBox.isTouching(pinkBox)&&movingBox.bounceOff(pinkBox)){
        movingBox.shapeColor = "deeppink";
       movingBox.velocityY = 0;
       movingBox.velocityX = 0;
        music.stop();
    }else if(movingBox.isTouching(redBox)&&movingBox.bounceOff(redBox)){
        movingBox.shapeColor = "red";
        music.play();
    }else if(movingBox.isTouching(greenBox)&&movingBox.bounceOff(greenBox)){
        movingBox.shapeColor = "green";
        music.play();
    }else if(movingBox.isTouching(blueBox)&&movingBox.bounceOff(blueBox)){
        movingBox.shapeColor = "blue";
        music.play();
    }else if((movingBox.isTouching(m1)&&movingBox.bounceOff(m1)) || (movingBox.isTouching(m2)&&movingBox.bounceOff(m2)) || (movingBox.isTouching(m3)&&movingBox.bounceOff(m3)) || (movingBox.isTouching(m4)&&movingBox.bounceOff(m4)) || (movingBox.isTouching(m5)&&movingBox.bounceOff(m5)) || (movingBox.isTouching(m6)&&movingBox.bounceOff(m6)) || (movingBox.isTouching(m7)&&movingBox.bounceOff(m7)) || (movingBox.isTouching(m8)&&movingBox.bounceOff(m8))){
        movingBox.shapeColor = "black";
        music.stop();
    }

    drawSprites();
}

 
