var imgx = 300;
var imgy = 300;
var imgSize = 70;
var cash =0;
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
  
  text(("Cash: $" + cash), width/2, 40);
  

} // end draw


function levelOne(){
  text(T, width/2, height-20);
  var distToimg= dist(imgx, imgy, mouseX, mouseY);
  if (distToimg <imgSize/2){
    imgx = random(width);
    imgy= random(height);
    cash= cash +1;
  }
  if(cash > 10) {
    fill(0,128,0);
   T = "Get That Bread";
  }
  if(cash > 20) {
    fill(50,205,50);
   T = "The shmoney is waiting"; 
  }
  if(cash > 30) {
    fill(124,252,0);
   T = "The bag has been secured";
  }
  line(imgx, imgy, mouseX, mouseY);
  image(img, imgx, imgy);
} // end level one
