class Sprite {
    constructor(x, y, image) {
      this.x = x; // initial position x
      this.y = y; // initial position y
      this.image = image;
    }
  
    draw(){
      ctx.drawImage(this.image, this.x, this.y); 
    }
  
    logPos(){
      ctx.fillStyle = "black"
      ctx.fillText("x: " + this.x, 580, 40);
      ctx.fillText("y: " + this.y, 580, 60);
    }
  }
  
  