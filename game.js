var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var wood;
var Watermelon;
var plum;

function preload(){
  wood = loadImage('wood.jpg');
  yinyang = loadImage('yinyang.jpg');
  bamboo = loadImage('bamboo.jpg');
  watermelon = loadImage('Watermelon.png');
  plum = loadImage('plum.png');
  pomegranate = loadImage('Pomegranate.png');
}
function setup() {
  createCanvas(900, 750);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(220);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  background(wood, mouseX, mouseY, 100, 300);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
 image(watermelon, ballx, bally, 75, 75);
 
  
} // end level one

function levelTwo(){
  background(yinyang, mouseX, mouseY, 100, 300);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(plum,ballx, bally, 75, 75);
} // end level two

function levelThree(){
    background(bamboo, mouseX, mouseY, 100, 300);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>15){
// level 4
//   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(pomegranate, ballx, bally, 75, 75);
} // end level thre
