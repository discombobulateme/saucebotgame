class Bug {
  constructor() {
    const ground = height - 20;
    this.r = 75;
    this.x = width;
    this.y = ground - bugImg.height;
  }

  move() {
    this.x -= 9 ;
  }

  show() {
    image(bugImg, this.x, this.y);

    // fill(255, 50);
    // ellipseMode(CORNER);
    // ellipse(this.x, this.y, this.r, this.r);
  }
}
