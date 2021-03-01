const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2, ground, pig1, pig2;
var box3, box4, log1, log2, box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    pig1 = new Pig(800,300)
    box2 = new Box(920,300,70,70);
    ground = new Ground(100,height,2500,20);
    log1 = new Log(800, 280,300, PI/2 );

    box3 = new Box(700,260, 70,70);
    box4 =new Box(920, 260, 70,70);

    pig2 = new Pig(800, 260);

    log2 = new Log(800, 240, 300, PI/2);

    box5=new Box(800, 240,70,70)

    log3 = new Log(790,240, 150, PI/4);

   // log4 = new Log(900,240, 150, -PI/4);
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    pig1.display();
    box2.display();
    ground.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();

    log3.display();
    //log4.diplay();
}