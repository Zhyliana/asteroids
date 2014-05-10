(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Bullet = Asteroids.Bullet = function(pos, vel){
    this.pos = pos;
    this.vel = vel;
    this.color = "red";
  }
  
  Bullet.inherits(Asteroids.MovingObject);
  
  Bullet.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 360);
    ctx.fillStyle = "red";
    ctx.fill();
  };

  
})(this);