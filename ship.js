(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Ship = Asteroids.Ship = function(pos, vel){
    this.pos = pos;
    this.vel = vel;
    this.color = "black";
  }
  
  Ship.inherits(Asteroids.MovingObject);
  
  Ship.prototype.drawship = function(ctx){
    ctx.fill();
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
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };
  
  // Ship.prototype.fireBullet = function(){
  //   // var speed = Math.pow((Math.pow(this.pos[0],2) + Math.pow(this.pos[1],2)),0.5);
  //   
  //   return new Asteroids.Bullet(this.pos, [(this.vel[0] * 5),(this.vel[1] * 5)])
  // }
  
  Ship.prototype.fireBullet = function () {
    // var relVel = Asteroids.Util.scale(
  //     Asteroids.Util.dir(this.vel),
  //     Asteroids.Bullet.SPEED
  //   );
  
    // var bulletVel = [
    //   relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    // ];
  
    var bullet = new Asteroids.Bullet(this.pos, [10, 10]);
    
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