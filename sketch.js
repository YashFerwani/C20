var bgImg;
var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadAnimation("images/cat4.png");
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600);
    tom.addAnimation("tom1",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry1",jerryImg1);
    jerry.scale = 0.15;
  }

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width / 2 - jerry.width / 2)){
      tom.velocityX = 0;
      tom.addAnimation("tom3",tomImg3);
      jerry.addAnimation("jerry3",jerryImg3);
      tom.x = 300;
    }    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      jerry.addAnimation("jerry_teasing",jerryImg2);
      jerry.changeAnimation("jerry_teasing");
      jerry.frameDelay = 25;

      tom.velocityX = -5;
      tom.addAnimation("tom_walking",tomImg2);
      tom.changeAnimation("tom_walking");      
    }
 
}
