var ufoAlien, ufoAlienImg;
var play, playImg;
var buracoNegro, buracoNegroImg;
var restart, restartImg;

var backgroundPlay, background_1Img;
var backgroundJogo, background_2Img;
var backgroundGameOver, background_3Img;

function preload() {
  background_2Img = loadImage("assets/background_jogo.jpg")
  ufoAlienImg = loadImage("assets/ufoAlien.png")
}


function setup() {
  backgroundJogo = createSprite(200,200,20,50);
  backgroundJogo.addImage(background_2Img);
  backgroundJogo.scale = 0.6

  ufoAlien = createSprite(100,300,20,50);
  ufoAlien.addImage(ufoAlienImg);
  ufoAlien.scale = 2.5

}



function draw() {
  if(keyDown("space")) {
    ufoAlien.velocityY = -6 ;
  }
  
  drawSprites();
}




