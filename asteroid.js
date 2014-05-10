(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var MovingObject = Asteroids.MovingObject;
  
  var Asteroid = Asteroids.Asteroid = function(pos, vel){
    this.pos = pos;
    this.vel = vel;
    this.radius = (Math.random() * 10) + 15;
    this.color = Asteroid.COLORS[Math.floor(Asteroid.COLORS.length * Math.random())];
  };
  
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLORS = ["#FADCDC", "#FFF0F5", "#F0E6B4", "#F0FFFF", "#E0FFFF"];

  Asteroid.randomAsteroid = function () {
    var randX = window.innerWidth * Math.random();
    var randY = window.innerHeight * Math.random();
    var pos = [randX, randY];
    var vel = Asteroid.randomVec();
    return new Asteroid(pos, vel);
  };
  
  Asteroid.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 360);
    var grd = ctx.createRadialGradient(this.pos[0],this.pos[1],5,this.pos[0],this.pos[1],this.radius);
    grd.addColorStop(0,this.color);
    grd.addColorStop(1,"black");
    ctx.fillStyle = grd;
    ctx.fill();
  };

  Asteroid.randomVec = function() {
    var velX = (Math.random() * 2) - 1
    var velY = (Math.random() * 2) - 1;
    return [velX, velY]
  };

})(this);