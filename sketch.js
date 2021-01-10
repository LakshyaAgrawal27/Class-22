
//Namespace
//variable value can be changed in the code but not of constant
const World=Matter.World;
const Bodies= Matter.Bodies;
const Engine=Matter.Engine;

var engine, world, ground, ball;
function setup() {

 var canvas= createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 //json={}
 var ground_options={
   isStatic : true
 }
 var ball_options={
  restitution : 1
}

 ground = Bodies.rectangle(200,390,50,50,ground_options);
 World.add(world,ground);
 ball = Bodies.circle(200,100,20,ball_options);
 World.add(world,ball);
 
  console.log(ground);
//  console.log(object.type);
//  console.log(object.position.x);
//  console.log(object.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
   rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,20);

   ellipseMode(RADIUS); 
   ellipse(ball.position.x,ball.position.y,20,20);
   

}