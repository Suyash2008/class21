var fixedRect, movingRect;
var rec1,rec2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rec1 = createSprite(200,200,50,70);
  rec1.shapeColor = "brown";
  rec2 = createSprite(400,400,80,40);
  rec2.shapeColor = "red";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  rec2.x = mouseX;
  rec2.y = mouseY;

  bounceOff(movingRect,fixedRect)
  if(isTouching(rec1,rec2)){
    rec1.shapeColor = "green";
      rec2.shapeColor = "blue";
  }
  else{
    rec1.shapeColor = "brown";
      rec2.shapeColor = "red";
  }
  drawSprites();
}

function bounceOff(ob1,ob2){
  if(ob2.x - ob1.x < ob1.width/2 + ob2.width/2&&
     ob1.x - ob2.x < ob1.width/2 + ob1.width/2){
       ob2.velocityX = ob2.velocityX * (-1);
       ob1.velocityX = ob1.velocityX * (-1);
     }
   if(ob2.y - ob1.y < ob1.height/2 + ob2.height/2&&
      ob1.y - ob2.y < ob1.height/2 + ob2.height/2){
        ob2.velocityY = ob2.velocityY * (-1);
        ob1.velocityY = ob1.velocityY * (-1);
      } 
      
    
}

function isTouching(ob1,ob2){
  if(ob2.x - ob1.x < ob1.width/2 + ob2.width/2&&
    ob1.x - ob2.x < ob1.width/2 + ob2.width/2&&
    ob2.y - ob1.y < ob1.height/2 + ob2.height/2&&
    ob1.y - ob2.y < ob1.height/2 + ob2.height/2){
     return true
      }
      else {
        return false
      }
    }