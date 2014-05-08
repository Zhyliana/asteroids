(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var MovingObject = Asteroids.MovingObject;
  
  var Asteroid = Asteroids.Asteroid = function(pos, vel){
    this.pos = pos;
    this.vel = vel;
    this.radius = Math.floor(Asteroid.RADIUS * Math.random()) + 3
    this.color = Asteroid.COLORS[Math.floor(Asteroid.COLORS.length * Math.random())];
  };
  
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLORS = ["#155919", "#20918C", "#FADB50", "#7D41CC", "#A3263D"];
  Asteroid.RADIUS = 35;

  Asteroid.randomAsteroid = function () {
    var randX = Math.floor(window.innerWidth * Math.random());
    var randY = Math.floor(window.innerHeight * Math.random());
    var pos = [randX, randY];
    var vel = Asteroid.randomVec();
    return new Asteroid(pos, vel);
  };

  Asteroid.randomVec = function() {
    var velX = Math.floor((Math.random() * 10) - 1);
    var velY = Math.floor((Math.random() * 10) -1);
    return [velX, velY]
  };

})(this);