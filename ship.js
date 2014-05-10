(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Ship = Asteroids.Ship = function(pos, vel){
    this.pos = pos;
    this.vel = vel;
    this.color = "black";
  }
  
  Ship.inherits(Asteroids.MovingObject);
  
  Ship.prototype.drawship = function(ctx){
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(this.pos[0], this.pos[1]);
    ctx.lineTo(this.pos[0]+50, this.pos[1]+20);
    ctx.lineTo(this.pos[0]+50, this.pos[1]-20);
    ctx.fill();
  }
  
  Ship.prototype.moveship = function(width, height){
    var newX = (this.pos[0] + this.vel[0]) % width;
    var newY = (this.pos[1] + this.vel[1]) % height;
    if(newX < 0) {
      newX += width;
     };
     if(newY < 0) {
       newY += height;
      };
    
    this.pos[0] = newX;
    this.pos[1] = newY;
  };

  Ship.prototype.power = function (impulse) {
    this.pos[0] += impulse[0];
    this.pos[1] += impulse[1];
  };
  
})(this);