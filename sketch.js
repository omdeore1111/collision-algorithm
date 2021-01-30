var fixedrectangle , movingrectangle







function setup() {





  createCanvas(1200,800);
  fixedrectangle = createSprite(200, 200, 50, 80);
  movingrectangle = createSprite(400, 200, 80, 30);
movingrectangle.shapeColor = "green";
fixedrectangle.shapeColor = "green";


}

function draw() {
  background(0,0,0);  
movingrectangle.x = mouseX;
movingrectangle.y = mouseY;
console.log(movingrectangle.x - fixedrectangle.x);
if(movingrectangle.x - fixedrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2 && fixedrectangle.x - movingrectangle.x < 
  fixedrectangle.width/2 + movingrectangle.width/2 && movingrectangle.y - fixedrectangle.y < fixedrectangle.width/2 + movingrectangle.width/2 && fixedrectangle.y - movingrectangle.y < 
  fixedrectangle.width/2 + movingrectangle.width/2){
  movingrectangle.shapeColor = "red";
  fixedrectangle.shapeColor = "red";
}

else{
  movingrectangle.shapeColor = "green";
  fixedrectangle.shapeColor = "green";




}

  drawSprites();
}