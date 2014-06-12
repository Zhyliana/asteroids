(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Ship = Asteroids.Ship = function(pos, vel){
    this.pos = pos;
    this.vel = vel;
    this.color = "black";
  }
  
  Ship.inherits(Asteroids.MovingObject);
  
  Ship.prototype.drawship = function(ctx){
    ctx.fillStyle = "rgba(248, 168, 169, 0.5)";
    ctx.strokeStyle = "rgb(248, 168, 169)";
    ctx.beginPath();
    ctx.moveTo(this.pos[0], this.pos[1]);
    ctx.lineTo(this.pos[0]+50, this.pos[1]+10);
    ctx.lineTo(this.pos[0]+50, this.pos[1]-10);
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
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
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };
  
  
  Ship.prototype.fireBullet = function () {
    var bullet = new Asteroids.Bullet(this.pos, [10, 10]);
    bullet.draw();
    return bullet
  };
  
  Ship.prototype.isCollidedWith = function(otherObj) {
    var xDiff = Math.abs((this.pos[0]) - otherObj.pos[0]);
    var yDiff = Math.abs((this.pos[1]) - otherObj.pos[1]);
    
    var backXDiff = Math.abs((this.pos[0]+50)- otherObj.pos[0])
    var backLeftDiff = Math.abs((this.pos[1]+20) - otherObj.pos[1])
    var backRightDiff = Math.abs(this.pos[1]-20 - otherObj.pos[1])

    if((xDiff <= otherObj.radius && yDiff <= otherObj.radius) || 
      (backXDiff <= otherObj.radius && 
        (backLeftDiff <= otherObj.radius|| backRightDiff <= otherObj.radius))
      ){
      return true;
    }
    else {
      return false;
    };
  };
  
})(this);