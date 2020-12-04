const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ball;
var rope;
var log1,log2;
var bg="bg1.png";
var backgroundImg;
var score=0;
function preload() {
    // backgroundImg = loadImage("sprites/bg.png");
    getTime();
 }

function setup(){
    createCanvas(3000,1600);
    engine=Engine.create();
    world=engine.world;
    ground=new Ground(1500,1580,3000,25);
    
    //base
    box1=new Box(2050,1470,200,200);
    box2=new Box(2250,1470,200,200);
    box3=new Box(2450,1470,200,200);

    //2nd
    box4=new Box(2050,1270,200,200);
    box5=new Box(2250,1270,200,200);
    box6=new Box(2450,1270,200,200);

    //3rd
    box7=new Box(2050,1070,200,200);
    box8=new Box(2250,1070,200,200);
    box9=new Box(2450,1070,200,200);

    //4th
    box10=new Box(2050,870,200,200);
    box11=new Box(2250,870,200,200);
    box12=new Box(2450,870,200,200);

    //5th
    box13=new Box(2050,870,200,200);
    box14=new Box(2250,870,200,200);
    box15=new Box(2450,870,200,200);
    box16=new Box(2250,670,200,200)
    //for ball
    ball=new Ball(1300,900,140);

    //rope
    rope=new Rope(ball.body,{x:1300,y:200});

    //for log
    log1 = new Log(2080,500,250, PI/7);
    log2 = new Log(2400,500,250, -PI/7);
}
function draw(){
    if(backgroundImg)
    background(backgroundImg);
    

    Engine.update(engine);
    ground.display();
    //base
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    ball.display();
    rope.display();
    log1.display();
    log2.display();



}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
async function getTime(){
    var response=await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson=await response.json();
    var datetime=responsejson.datetime;
    var hour=datetime.slice(11,13);
    if(hour>=06&&hour<18){
        bg="bg1.png";
    }else{
        bg="bg2.jpg";
    }
    backgroundImg=loadImage(bg);
    console.log(hour);
}