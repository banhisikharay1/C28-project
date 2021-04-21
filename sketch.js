
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var tree, ground, stone;
var sling;
function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(100, 460, 23);
	tree = new Tree(775, 368, 500, 500);
	ground = new Ground(width/2, height-10, width, 20);
	boy = createSprite(150, 550);
	boy.addImage(boyImage);
	boy.scale = 0.125;
	mango1 = new Mango(600, 290 ,34);
	mango2 = new Mango(855, 325, 35);
	mango3 = new Mango(670, 260, 35);
	mango4 = new Mango(730, 200, 35);
	mango5 = new Mango(710, 320, 35);
	mango6 = new Mango(780, 250, 35);
	mango7 = new Mango(825, 170, 35);
	mango8 = new Mango(800, 260, 35);
	mango9 = new Mango(940, 220, 35);
	mango10 = new Mango(980, 305, 35);
	sling = new Throw(stone.body, {x:100, y: 465});
	Engine.run(engine);
  
}


function draw() {	
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  tree.display();
  stone.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  sling.display();
  
  mouseDragged();
  mouseReleased();
  detectCollision();
  keyPressed();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10)

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(lstones,lmango){

	if(lstones.body.position.x- lmango.body.position.x <lmango.radius + lstones.radius
		&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
} 