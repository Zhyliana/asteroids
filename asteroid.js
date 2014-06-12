(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var MovingObject = Asteroids.MovingObject;
  
  var Asteroid = Asteroids.Asteroid = function(pos, vel){
    var idx = Math.floor(Asteroid.COLORS.length * Math.random())
    this.pos = pos;
    this.vel = vel;
    this.radius = (Math.random() * 30) + 15;
    this.color = Asteroid.COLORS[idx];
    this.ocolor = Asteroid.OCOLORS[idx];
  };
  
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.OCOLORS = ["rgb(123, 210, 234)", "rgb(121, 191, 211)", "rgb(84, 176, 202)", "rgb(173, 232, 249)", "rgb(142, 198, 214)"];
  Asteroid.COLORS = ["rgba(123, 210, 234, 0.5)", "rgba(121, 191, 211, 0.5)", "rgba(84, 176, 202, 0.5)", "rgba(173, 232, 249, 0.5)", "rgba(142, 198, 214, 0.5)"]

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
    ctx.strokeStyle = this.ocolor;
    ctx.lineWidth = (this.radius * 0.09);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  };

  Asteroid.randomVec = function() {
    var velX = (Math.random() * 2) - 1
    var velY = (Math.random() * 2) - 1;
    return [velX, velY]
  };

})(this);