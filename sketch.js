const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render=matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var Constrainedrope, chain;

function setup() {
	createCanvas(1200, 700);
  rectMode(CENTER);

  engine = Engine.create();
	world = engine.world;

	//Creating the Bodies 
    roof=new Roof(width/2,height/4,width/5,20);
    World.add(world,roof);

    bob1=new Bob(250,300);
    bob2=new Bob(300,300);
    bob3=new Bob(350,300);
    bob4=new Bob(400,300);
    bob5=new Bob(450,300);
    //console.log(roof.body);

   rope1=new Rope(bob1.body,roof.body,-100,0);
   //World.add(world,rope1);
   rope2=new Rope(bob2.body,roof.body,-50,0);
   //World.add(world,rope2);
   rope3=new Rope(bob3.body,roof.body,-1,0);
   //World.add(world,rope3);
   rope4=new Rope(bob4.body,roof.body,+50,0);
   //World.add(world,rope4);
   rope5=new Rope(bob5.body,roof.body,+100,0);
   //World.add(world,rope5);

	Engine.run(engine);
  
 // var options={
  //bodyA:bob1.body,
  //bodyB:Constrainedrope.body,
  //stiffness:0.04,
  //length:10
  //}
  //var chain=Constraint.create(options);
  //World.add(world,chain);
}


function draw() {
  background(230);
  Engine.update(engine);
  rectMode(CENTER);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 // Constrainedrope.display();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0}); 
  }
}

function drawLine(Constraint){
  bobBodyPosition=Constraint.bodyA.position
  roofBodyPosition=Constraint.bodyB.position
  roofBodyOffset=Constraint.pointB;
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y
 line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX.roofBodyY);
}