var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green"
  gameObject2.debug = true;
  gameObject2.velocityX = 3
  

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green"
  gameObject4.debug = true;
  gameObject4.velocityX = -3;
}

function draw() {
  background(0,0,0);  


  bounceOff(gameObject4, gameObject2);

  drawSprites();
}
  
  
  
  function bounceOff (object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2){
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
      }
    if (object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);


      }
    }
