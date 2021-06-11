const STATES = {
  RUN: 0,
  JUMP: 1,
}

class SauceBot {
  constructor() {
    const ground = height - 20;

    this.r = 100; /* size */
    this.x = 100;
    this.y = ground - sauceBotImg.height;
    this.vy = 0; /* Speed along the y axis */
    this.gravity = 3; /* Adjusts the speed of the moving SauceBot */

    this.bot = createSprite(this.x, this.y, this.r, this.r);

    this.bot.addAnimation('run', './assets/saucebot_run/3.png', './assets/saucebot_run/2.png', './assets/saucebot_run/1.png', './assets/saucebot_run/2.png');
    this.bot.addAnimation('jump', './assets/saucebot_run/jump.png');
    this.state = STATES.RUN;

  }
/* Instant force to push it up */
  jump() {
    if (this.y == height - this.r) {
      this.vy = -35;
    }
  }

  hits(bug) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = bug.x + bug.r * 0.5;
    let y2 = bug.y + bug.r * 0.5;
    
    return collideCircleCircle(x1, y1, this.r, x2, y2, bug.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r); /* Stays in the floor */
  }

  show() {
    if (this.vy < 0) {
      this.bot.changeAnimation('jump')
    } else {
      this.bot.changeAnimation('run')
    }

    this.bot.position.y = this.y;
    // this.bot.changeSprite('running');

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
    drawSprites();
  }
}
