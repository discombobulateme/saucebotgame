let saucebot;
let sauceBotImg;
let bugImg;
let coinImg;
let backgroundImg;
let bugs = [];
let coins = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  sauceBotImg = loadImage('saucebot1.png');
  sauceBotRun = loadAnimation('assets/saucebot_run/1.png', 'assets/saucebot_run/2.png', 'assets/saucebot_run/3.png')
  bugImg = loadImage('bug1.png');
  coinImg = loadImage('coin.png');
  backgroundImg = loadImage('background-fix.png');
}

function mousePressed() {
  bugs.push(new Bug());
  coins.push(new Coin());
}

function setup() {
  createCanvas(1091, 448);
  saucebot = new SauceBot();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label == 'up') {
    saucebot.jump();
  }
}

function keyPressed() {
  if (key == ' ') {
    saucebot.jump();
  }
}

/* function random bugs */

/* function random coins */

function score() {
  let score = 0;
}

/* function if coins = points if bugs less points */

/* function if coins show message, continue game */

function draw() {
  if (random(1) < 0.005) {
    bugs.push(new Bug());
  }

  if (random(2) < 0.005) {
    coins.push(new Coin());
  }

  background("fff");
  background(backgroundImg);
  // for (let b of bugs) {
  //   b.move();
  //   b.show();
  //   if (saucebot.hits(b)) {
  //     console.log('game over');
  //     noLoop();
  //   }
  // }

  for (let c of coins) {
    c.move();
    c.show();
    if (saucebot.hits(c)) {
      console.log('score');
      loop();
    }
  }

  saucebot.show();
  saucebot.move();
}
