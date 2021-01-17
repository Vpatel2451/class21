var fixedrect, movingrect;
var GO1, GO2;




function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 movingrect = createSprite(400,200,50,50);

 movingrect.shapeColor = ('green');
 fixedrect.shapeColor = ('green');

 GO1 = createSprite(200,200,50,50);
 GO2 = createSprite(300,200,50,50);

 GO1.shapeColor = 'green';
 GO2.shapeColor = 'green';
}

function draw() {
  background(0);  


  //more detailed way of syaing the istouching function


movingrect.y = mouseY;
movingrect.x = mouseX;



if(isTouching(movingrect, GO2)){
movingrect.shapeColor = 'red';
GO2.shapeColor = 'red';
}
else {
  movingrect.shapeColor = 'green';
  GO2.shapeColor = 'green';
}

  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x -object1.x < object1.width/2 + object2.width/2
    && object2.y -object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2){
return true;
  }
  else{
  return false;
  }
}