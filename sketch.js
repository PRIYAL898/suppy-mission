var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width-10);
	groundSprite.shapeColor=color(255)

	box1=new Box(400,650,20,200);

	box2=new Box(200,650,100,20);

	box3=new Box(600,650,100,20);

	engine = Engine.create();
	world = engine.world;


	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650,width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxPosition=width/2-100;
	 boxY=610;
	 boxleftSprite=createSprite(boxPosition, boxY, 20,100); 
	 boxleftSprite.shapeColor=color(255,0,0);
	 boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxLeftBody);
	 boxBase=createSprite(boxPosition+100, boxY+40, 200,20); 
	 boxBase.shapeColor=color(255,0,0);
	 boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	 World.add(world, boxBottomBody);
	 boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100); 
	 boxleftSprite.shapeColor=color(255,0,0); 
	 boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
    background(0);
	Engine.update(engine);
  
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,780,300);

    packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 

	box1.display();
	box2.display();
	box3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false); 
	//helicopterSprite.x=helicopterSprite.x-20; 
	//translation={x:-20,y:0}
  }
}



