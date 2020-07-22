const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  nate = new player(400,200,10);
  ground = new box(400,390,1000,10);

  chain1 = new SlingShot(nate.body, {
    x : 100,
    y : 200
  })
  
}

function draw() {
  Engine.update(engine);
  background("green");  
  chain1.display();
  noStroke();
        textSize(20)
        fill("white")
  text("credits",400,20);
  text("developed by aswath",400,45);
  text("designed by aswath",400,80);
  text("src code available on github : aswath-maker",400,115);
  nate.display();
  
  ground.display();
  drawSprites();


}

function mouseDragged(){
  Matter.Body.setPosition(nate.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}
