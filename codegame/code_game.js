var img;
var imgx = 300;
var imgy = 300;
var imgSize = 70;
var score =0;
var T = "Chase the Bag";

function preload() {
 img = loadImage('cashmoney.jpg');
// img = loadImage('http://lucas-kodama.github.io/cashmoney.jpg');  
}
  


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(255);
  
  levelOne();
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text(T, width/2, height-20);
  var distToimg= dist(imgx, imgy, mouseX, mouseY);
  if (distToimg <imgSize/2){
    imgx = random(width);
    imgy= random(height);
    score= score +1;
  }
  if(score > 5) {
   T = "Get That Bread";
  }
  if(score > 10) {
   T = "The shmoney is waiting"; 
  }
  if(score > 15) {
   T = "The bag has been secured"; 
  }
  line(imgx, imgy, mouseX, mouseY);
  image(img, imgx, imgy);
} // end level one
