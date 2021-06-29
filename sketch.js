var bath, bathanim
var brush, brushimg
var drink, drinkanim
var eat, eatanim
var gym, gymanim
var gym2, gymanim2
var iss, issimg
var move, moveimg
var sleep, sleepimg
var astronaut

function preload() {
  bathanim=loadAnimation("images/bath1.png","images/bath2.png")
  brushimg=loadImage("images/brush.png")
  drinkanim=loadAnimation("images/drink1.png","images/drink2.png")
  eatanim=loadAnimation("images/eat1.png","images/eat2.png")
  gymanim=loadAnimation("images/gym1.png","images/gym2.png")
  gymanim2=loadAnimation("images/gym11.png","images/gym12.png")
  issimg=loadAnimation("images/iss.png")
  moveimg=loadAnimation("images/move.png")
  sleepimg=loadAnimation("sleep.png")
  }

function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400, 200, 50, 50);
  iss=createSprite(400,200,50,50);
}

function draw() {
  background(255,255,255);  
  iss.addAnimation(issimg)
  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brushimg)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("exercising",gymanim)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyDown("LEFT_ARROW")) {}
  astronaut.addAnimation("bathing",bathanim)
  astronaut.y=350
  astronaut.velocityX=0
  astronaut.velocityY=0
  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating",eatanim)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0;
  }

  if(keyDown("M")) {
    astronaut.x=astronaut.x+0.2
    astronaut.y=astronaut.y+-0.2
    astronaut.addAnimation=("moving",moveimg)
  }
  createEdgeSprites();
  astronaut.bounceOff(edgeSprites())
  drawSprites();
}