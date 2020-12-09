const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var binImg,bin;
var paper;

function preload(){
    binImg = loadImage("Images/dustbin.png");
}
function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper = new Paper();

    bin = createSprite(964,445,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(902,450,10,140);
    binPart2 = new Dustbin(962,515,130,10);
	binPart3 = new Dustbin(1024,450,10,140);
	
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    binPart1.display();
    binPart2.display();
	binPart3.display(); 
	paper.display();
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:76,y:-77});
    }
}