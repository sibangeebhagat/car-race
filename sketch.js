var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image, bgImg2, titleImg, elephantimg, lionimg;
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles, lion, elephant;
var cars = [];

function preload() {
  titleImg = loadImage("assets/title.png");

  lionimg = loadImage("assets/lionImg.jpg");
  elephantimg = loadImage("assets/elephant.jpeg");
  bgImg2 = loadImage("assets/jungleroad.jpeg");
  backgroundImage = loadImage("assets/bg.jpg");
  start1 = loadImage("assets/start1.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track1.jpg");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  lifeImage = loadImage("assets/life.png");
  obstacle1Image = loadImage("assets/obstacle1.png"); 
  obstacle2Image = loadImage("assets/obstacle2.png"); 
  blastImage = loadImage("assets/blast.png"); //C42 //SA
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if( gameState != 2 ){
  background(backgroundImage); 
}
else{
  background(bgImg2);
  lion = createSprite(200,350,50,50);
  lion.addImage("lion",lionimg);
  elephant = createSprite(260,300,50,50);
  elephant.addImage("elephant",elephantimg);
}

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.level2();
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
