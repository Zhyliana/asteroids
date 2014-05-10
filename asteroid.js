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

  Asteroid.randomVec = function() {
    var velX = (Math.random() * 2) - 1
    var velY = (Math.random() * 2) - 1;
    return [velX, velY]
  };

})(this);