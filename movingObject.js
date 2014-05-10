(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };

  MovingObject.prototype.move = function(width, height){
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


  MovingObject.prototype.isCollidedWith = function(otherObj) {
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
