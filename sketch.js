var fixedRect, movingRect;
var gameobj1 , gameobj2 , gameobj3 , gameobj4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobj1 = createSprite(200,20,20,20);
  gameobj2 = createSprite(230,20,20,20);
  gameobj3 = createSprite(260,20,20,20);
  gameobj4 = createSprite(290,20,20,20);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  


 bounceOff (movingRect,fixedRect)


  drawSprites();

  



}