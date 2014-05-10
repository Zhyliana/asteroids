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
  
  
  
})(this);
