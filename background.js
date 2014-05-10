function Background() {
	this.canvasWidth = 0;
	this.canvasHeight = 0;
  this.speed = 1; 
  this.draw = function() {
    this.y += this.speed;
    this.background = new Image();
    this.background.src = "background.png"
    this.context.drawImage(this.background, this.x, this.y);
    // Draw another image at the top edge of the first image
    this.context.drawImage(this.background, this.x, this.y – this.canvasHeight);
    // If the image scrolled off the screen, reset
    if (this.y >= this.canvasHeight)
      this.y = 0;
    };
}
