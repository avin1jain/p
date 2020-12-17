var ghost
var tower

function preload(){
  
 ghost2=loadImage("ghost-standing.png");
 climber2=loadImage("climber.png");
 tower2=loadImage("tower.png");
 door2=loadImage("door.png");

}

function setup(){
  createCanvas(600,500);

  
  tower=createSprite(300,250,20,20)
  tower.addImage(tower2);
  tower.velocityY=+2;
  
  ghost=createSprite(400,250,20,20)
ghost.addImage(ghost2);
ghost.scale=0.3
}

function draw(){
 
if(keyDown("space")){
  ghost.velocityY=-7
  
}
  ghost.velocityY=ghost.velocityY+0.8
  
  
  
  
 if(tower.y>500) {
tower.y=250   
 }
climber();
drawSprites(); 
}
function climber(){
if(frameCount%300==0){
var door = createSprite(300,10,20,20) 
door.addImage(door2)
door.velocityY=+2;
door.x=Math.round(random(60,540));
  
var climber=createSprite(300,70,20,20)
climber.addImage(climber2);
climber.scale=0.7
door.x=climber.x
climber.velocityY=+2;

  
  
  
}
}