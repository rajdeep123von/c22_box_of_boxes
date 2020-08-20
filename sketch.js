
// CREATE GLOBAL VARIABLES

// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = []  ;
 
var ground;
var gSlider;
 
function setup() {
    var canvas = createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
     ground = new Ground(200,350,400,10);
     fill(225,29,5);
     //box1 = new Box(200,100,50,50);
}
 
function mousePressed() {
    boxes.push(new Box(mouseX,mouseY,20,20))
        // Every time a mouse press occures create a new box.
       
    
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for(var i = 0;i < boxes.length;i++){
        boxes[i].show();
    }
    ground.display();

   // mousePressed();
}
 

