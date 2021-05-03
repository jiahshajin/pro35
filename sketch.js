  
var foodStock
var foodS
var database;
var dog1
var happydogImg
 
function preload()
{

  dog1Img=loadImage("images/dogImg.png")
  happydogImg=loadImage("images/happydog.png")
  
}

function setup() {
   database= firebase.database()
  

	createCanvas(500, 500);

  dog=createSprite(250,240,50,50) 
  dog.addImage(dog1Img)
  dog.scale= 0.2
  
foodStock=database.ref('Food/');
foodStock.on("value", readStock)
  
}


function draw() {
  background(46,139,87)
   
  drawSprites();
   

}

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydogImg)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({

  Food:x

  })
}



