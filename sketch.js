var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, r1_img, r2_img, r3_img, r4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/r1.gif");
  car2_img = loadImage("../images/r2.gif");
  car3_img = loadImage("../images/r3.gif");
  car4_img = loadImage("../images/r4.gif");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
