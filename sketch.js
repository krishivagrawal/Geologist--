const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;

function setup(){

       createCanvas(1200,600);


 engine = Engine.create();
world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone=new Stone(20,50,40);
    rubber=new Rubber (30,150,50);
    iron=new Iron(40,120);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

plane.display();
hammer.display();
stone.display();
rubber.display();
iron.display();

    
 
}