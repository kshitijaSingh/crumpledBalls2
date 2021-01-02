
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var stick1,stick2,stick3;
var ground;


function setup() {
	createCanvas(800, 700);

	ground = createSprite(0,690,800,20);
	ground.shapeColor = "brown"
	stick1 = createSprite(640,740,200,20);
	stick1.shapecolor = "red";
	stick2 = createSprite(640,740,20,100);
	stick2.shapeColor = "red";
	stick3 = createSprite(640,740,20,100);
	stick3.shapeColor = "red";
	paper = createSprite(40,680,10,50);
	paper.shapeColor = "pink";


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
 ground.display();
 stick1.display();
 stick2.display();
 stick3.display();
 paper.display();

 keypressed();
}
function keypressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyforce(paperObject.body,paperObject.body.position(x:85,y-85));
	}

}


