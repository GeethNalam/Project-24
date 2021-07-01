
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var can1, can2, can3;

function preload()
{
	
}

function setup() {
	createCanvas(1000,350);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,275,10,1000);
	ball = new Paper(200,275,15,15);
	can1  =createSprite(750,225,10,100);
	can2  =createSprite(800,275,100,10);
	can3  =createSprite(850,225,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyCode === UP_ARROW{

Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
  }
  drawSprites();
 ground.display();
 ball.display();
 
 
}



