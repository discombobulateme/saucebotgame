
class SauceBot {
  constructor() {
    const ground = height - 20;

    this.r = 100; /* size */
    this.x = 100;
    this.y = height - this.r;
    this.y = ground - sauceBotImg.height;
    this.vy = 0; /* Speed along the y axis */
    this.gravity = 3; /* Adjusts the speed of the moving SauceBot */
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
    image(sauceBotImg, this.x, this.y, this.r);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
