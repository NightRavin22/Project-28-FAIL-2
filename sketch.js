
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,700,800,20);
tree = new Tree(605,510,400,400);
stone = new Stone(40,600,50,50);
boy = new Boy(100,650,200,200);
mango1 = new Mango(500,500,5,5);
mango2 = new Mango(600,400,5,5);
mango3 = new Mango(700,450,5,5);
launcher = new Launcher(stone.body,{x:40,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  launcher.display();

  mango1.display();
  mango2.display();
  mango3.display();

 col(stone,mango1);
 col(stone,mango2);
 col(stone,mango3);
 
 drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}

	function mouseReleased(){
	launcher.fly();
	}

	function col(lstone,lmango){
		mangoBodyPosition=lmango.body.position
		stoneBodyPosition=lstone.body.position

		var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

	}

	function keyPressed() {
		if(keyCode === 32) {
			Matter.Body.setPosition(stone.body, {x:40,y:600})
			launcher.attach(stone.body)
		}
	}