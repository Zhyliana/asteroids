(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Asteroid = Asteroids.Asteroid = function(pos, vel, radius, color){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLORS = ["#155919", "#20918C", "#FADB50", "#7D41CC", "#A3263D"];
  Asteroid.RADIUS = 25;

  Asteroid.randomAsteroid = function () {
    var dimX = Math.floor(window.innerWidth * Math.random());
    var dimY = Math.floor(window.innerHeight * Math.random());
    var pos = [dimX, dimY];
    var vel = Asteroid.randomVec();
    var color = Asteroid.COLORS[Math.floor(Asteroid.COLORS.length * Math.random())]
    return new Asteroid(pos, vel,  Asteroid.RADIUS, color);
  };

  Asteroid.randomVec = function() {
    var velX = Math.floor(Math.random() * 10) -1;
    var velY = Math.floor(Math.random() * 1) - 1;
    return [velX, velY]
  };

})(this);