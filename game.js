(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (height, width, ctx) {
    this.height = height;
    this.width = width;
    this.ctx = ctx;
    this.ship = new Asteroids.Ship([(width/2),(height/2)], [0,0], 20, "black");
    this.asteroids = [];
    this.show;
  };

  Game.FPS = 300;

  Game.prototype.addAsteroids = function (numAsteroids) {
    for (var i=0; i<numAsteroids; i++) {
      var randAsteroid = Asteroids.Asteroid.randomAsteroid();
      this.asteroids.push(randAsteroid);
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    var game = this;
    this.ship.draw(ctx);
    this.asteroids.forEach ( function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.move = function(){
    var asteroids = this.asteroids;
    var game = this
    this.ship.move();
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
      if(asteroid.pos[0] > window.innerWidth  ||
        asteroid.pos[1] > window.innerHeight || asteroid.pos[1] < 0 || asteroid.pos[0] <0 ){
        var newVel = [- asteroid.vel[0], - asteroid.vel[1]];
        game.asteroids.push(new Asteroids.Asteroid(asteroid.pos, newVel, asteroid.radius, asteroid.color));
        delete asteroids[asteroids.indexOf(asteroid)];
      }

    });
  };

  Game.prototype.checkCollisions = function() {
    var ship = this.ship;
    var game = this;
    this.asteroids.forEach(function(asteroid) {
      if (ship.isCollidedWith.bind(ship, asteroid)()) {
        alert("GAME OVER");
        game.stop();
      }
    });
  };

  Game.prototype.step = function(){
    this.move();
    this.draw(this.ctx);
    this.checkCollisions();
  };

  Game.prototype.start = function(){
    var game = this;
    this.bindKeyHandlers();
    this.addAsteroids(50);
    this.show = setInterval(game.step.bind(game), Game.FPS);
  };

  Game.prototype.stop = function(){
    clearInterval(this.show);
  }

  Game.prototype.bindKeyHandlers = function(){
    var game = this;

    key('w', function(){game.ship.power([0,1])} );
    key('a', function(){game.ship.power([-1,0])});
    key('s', function(){game.ship.power([0,-1])});
    key('d', function(){game.ship.power([1,0])})
  }



})(this);