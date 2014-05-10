(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Bullet = Asteroids.Bullet = function(pos, vel){
    this.pos = pos;
    this.vel = vel;
    this.color = "black";
  }
  
  Bullet.inherits(Asteroids.MovingObject);

  
})(this);