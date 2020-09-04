var car,wall

var speed,weight



function setup() {
createCanvas(800,400);

wall= createSprite(800, 20, 60, 800);

car = createSprite(100,200,100,50);


speed = random(55,90);

weight = random(400,1500);
}

function draw() {
  background(0,0,0);
  car.velocityX = speed/4;
  if(wall.x-car.x < (car.width+wall.width)/2
  ){
  car.velocityX = 0;
  
var deformation= 0.5 * weight* speed* speed/22509;
  if(deformation<100){
  car.shapeColor=color(0,255,0);
  stroke("white");
  textSize(20);
  fill ("white");
  text ("The car's safety is very good under 100 km/h",100,100);  
  }
  if (deformation<180 && deformation > 100) {
  car.shapeColor=color(230,230,0);
  stroke("white");
  textSize(20);
  fill ("white");
  text ("The car's safety is average between 100 and 180 km/h",100,100);  
  }
  if(deformation>180 ){
  car.shapeColor=color(255,0,0);
  stroke("white");
  textSize(20);
  fill ("white");
  text ("The car is very unsafe at speeds more than 180 km/h",100,100);  
  }
  }

  drawSprites();
}