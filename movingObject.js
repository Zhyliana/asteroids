(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };

  MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 360);
    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function(otherObj) {
    var x1 = this.pos[0];
    var y1 = this.pos[1];
    
    var x2 = otherObj.pos[0];
    var y2 = otherObj.pos[1];
    
    var distX = Math.pow((x2-x1),2);
    var distY = Math.pow((y2-y1),2);
    
    var sumRadii = otherObj.radius + this.radius;

    if(Math.sqrt(distX + distY) < (sumRadii)){
      return true;
    }
    else {
      return false;
    }
  }
})(this);
