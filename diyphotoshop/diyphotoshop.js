var img;
var initials ='cn'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken
var water;
var land;
var lilypad;
var frog;
var alligator;
var turtle;
var beaver;
var fish;
var duck;
var swan;
var rock;

function preload() {
// preload() runs once, it may make you wait
  water = loadImage('water.jpg');  // cat.jpg needs to be next to this .js file
  land = loadImage('land.jpg');
  lilypad = loadImage('lilypad.png');
  frog = loadImage('frog.png');
  alligator = loadImage('alligator.png');
  turtle = loadImage('turtle.png');
  beaver = loadImage('beaver.png');
  fish = loadImage('fish.png');
  duck = loadImage('duck.png');
  swan = loadImage('swan.png');
  rock = loadImage('rock.png');
// you can link to an image on your github account
//  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(1000, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    image(water, mouseX, mouseY, 100, 100);
    
  } else if (toolChoice == '2') { // second tool

   image(land, mouseX, mouseY, 50, 50);
   
  } else if (toolChoice == '3') { // third tool

   image(lilypad, mouseX, mouseY, 50, 50);
   
  } else if (toolChoice == '4') {
    
  image(frog, mouseX, mouseY, 50, 50);

  } else if (key == '5') { // this tool calls a function
  
  image(alligator, mouseX, mouseY, 100, 100);
    

  } else if (toolChoice == '6') {

   image(turtle, mouseX, mouseY, 200, 100);
   
  } else if (toolChoice == '7') {

  image(beaver, mouseX, mouseY, 100, 100);
  
  } else if (toolChoice == '8') {

   image(fish, mouseX, mouseY, 75, 50);
    
  } else if (toolChoice == '9') {

    image(duck, mouseX, mouseY, 75, 50);
    
  } else if (toolChoice == '0') {
    
  image(swan, mouseX, mouseY, 100, 50);

  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(rock, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
