var database;
var back_img;
var gameState =0;
var playerCount = 0;
var score;
var allPlayers;
var player1Name = 0;
var player2Name = 0;

var player, form,game;
var player1,player2;
var player1Score, player2Score;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


  text()
}

function draw() {
  background(back_img);

  getPlayer1Name = database.ref('players/player1/name');
  getPlayer1Name.on("value", (data) => {
      player1Name = data.val();
  })

  getPlayer1Score = database.ref('players/player1/score');
  getPlayer1Score.on("value", (data) => {
      player1Score = data.val();
  })
  
  getPlayer2Name = database.ref('players/player2/name');
  getPlayer2Name.on("value", (data) => {
      player2Name = data.val();
  })

  getPlayer2Score = database.ref('players/player2/score');
  getPlayer2Score.on("value", (data) => {
      player2Score = data.val();
  })

  // console.log(player1Name);
  // console.log(player2Name);

  // console.log(player1Score);
  // console.log(player2Score);

   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
     game.end();
   }

   fill(255);
   textSize(20);
   text(player1Name +" : "+ player1Score, 50, 100);

   fill(255);
   textSize(20);
   text(player2Name +" : "+ player2Score, 50, 150);
}