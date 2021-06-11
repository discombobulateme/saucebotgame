// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/147-chrome-dinosaur.html

let saucebot;
let sauceBotImg;
let bugImg;
let backgroundImg;
let bugs = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  sauceBotImg = loadImage('saucebot1.png');
  bugImg = loadImage('bug1.png');
  backgroundImg = loadImage('background-fix.png');
}

function mousePressed() {
  bugs.push(new Bug());
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

function draw() {
  if (random(1) < 0.005) {
    bugs.push(new Bug());
  }

  background(backgroundImg);
  for (let b of bugs) {
    b.move();
    b.show();
    if (saucebot.hits(b)) {
      console.log('game over');
      noLoop();
    }
  }

  saucebot.show();
  saucebot.move();
}
