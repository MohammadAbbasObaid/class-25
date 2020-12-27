
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,ground,paper,bin,binImg;
var block1,block2,block3,paperObject;
function preload(){
    binImg=loadImage("dustbingreen.png")  
}

function setup() {
	createCanvas(1200, 600);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	bin=createSprite(964,520,20,20)
	bin.addImage(binImg)
	bin.scale=0.45
	
	paper = new Paper(100,300,20);
	ground=new Ground(400,690,800,20);

	binPart1=new Bin(902,505,10,126)
	binPart2=new Bin(964,565,116,15)
	binPart3=new Bin(1024,505,10,126)
	
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  
  
  
   binPart2.display();
   binPart1.display();
   binPart3.display();
  
  
  drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-35});
	}
}
