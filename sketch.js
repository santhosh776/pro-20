var cat,catImg,catImg2,catImg3;
var mouse,mouseImg,mouseImg2,mouseImg3;
var garden,gardenImg;
function preload() {
    //load the images here
  gardenImg=loadImage("images/garden.png");
  catImg=loadAnimation("images/cat1.png");
  catImg2=loadAnimation("images/cat2.png","images/cat3.png")
  catImg3=loadAnimation("images/cat4.png");
  mouseImg=loadAnimation("images/mouse1.png");
  mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
  mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,100,20,20);
    cat.addAnimation("catI",catImg)
    
    mouse=createSprite(200,100,20,20);
    mouse.addAnimation("mouseI",mouseImg)

    garden=createSprite(500,400);
    garden.addImage("gardenImg1",gardenImg)
}

function draw() {

    background(255);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    {
        cat.addAnimation("catI3",catImg3);
        cat.velocityX=0;
        mouse.addAnimation("mouseI3",mouseImg3);
    }
    keyPressed();
    drawSprites();
    text(mouseX+','+mouseY,10,45)
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
{
    cat.setVelocity=-5
    cat.addAnimation("catrunning",catImg2);
    cat.changeAnimation("catrunning");
}
}