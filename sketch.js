var fixedRect, movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1= createSprite(100,100,50,50);
  gameObject1.shapeColor="white";

  gameObject2= createSprite(200,200,50,50);
  gameObject2.shapeColor="white";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(isTouching(movingRect,fixedRect) ){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
} 
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  }


  if(isTouching(movingRect,gameObject1) ){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  } 
    else{
      movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  
    }
    if(isTouching(movingRect,gameObject2) ){
      movingRect.shapeColor = "blue";
      gameObject2.shapeColor = "blue";
    } 
      else{
        movingRect.shapeColor = "green";
      gameObject2.shapeColor = "green";
    
      }
  drawSprites();
}

