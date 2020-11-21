var car, wall, speed, weight,deform

function setup() {
  createCanvas(800,400);
  speed=random(50,100)
  weight=random(400,1500)

  car=createSprite(100, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white"

  wall=createSprite(700, 200, 60, 200)
  wall.shapeColor="blue"
}

function draw() {
  background(0);  

  if(wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX=0
    deform=0.5*weight*speed*speed/22500
  }

  if(deform<80){
    car.shapeColor="green"
  }

  if (deform<180 && deform>80) {
    car.shapeColor="yellow"
  }
  if(deform>180){
    car.shapeColor="red"
  }
  drawSprites();
}