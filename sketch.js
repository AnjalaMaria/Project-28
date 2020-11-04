
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, rockObj,groundObject, shooterObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("Plucking mangoes/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	rockObj=new rock(235,420,30); 

	mango1=new mango(1100,100,30);
    mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	shooterObject=new shooter(rockObj.body,{x:235,y:420});
     var render = Render.create({
     element: document.body,
     engine: engine,
     options : {
       width: 1300,
       height: 600,
       wireframes: false
     }
  });
	
	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to get more Chances to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  
  

  treeObj.display();
  rockObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  rockObj.display();

  groundObject.display();
  shooterObject.display();
  detectollision(rockObj,mango1);
  detectollision(rockObj,mango2);
  detectollision(rockObj,mango3);
  detectollision(rockObj,mango4);
  detectollision(rockObj,mango5);
  detectollision(rockObj,mango6);
  detectollision(rockObj,mango7);
  detectollision(rockObj,mango8);
  detectollision(rockObj,mango9);
  detectollision(rockObj,mango10);
  detectollision(rockObj,mango11);
  detectollision(rockObj,mango12);
}

function mouseDragged(){
	Matter.Body.setPosition(rockObj.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	shooterObject.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(rockObj.body, {x:235, y:420});
	  shooterObject.attach(rockObj.body);
	}
  }

  function detectollision(lrock,lmango){
	
  mangoBodyPosition=lmango.body.position;
  rockBodyPosition=lrock.body.position;
  
  var distance=dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  	if(distance<=lmango.r+lrock.r){

  	  Matter.Body.setStatic(lmango.body,false);
    }

  }