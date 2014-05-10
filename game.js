(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Asteroid = Asteroids.Asteroid;

  var Game = Asteroids.Game = function (height, width, ctx) {
    this.height = height;
    this.width = width;
    this.ctx = ctx;
    this.asteroids = [];
    this.show;
    this.ship = new Asteroids.Ship([(width/2),(height/2)], [0,0]);
  };

  Game.FPS = 30;

  Game.prototype.addAsteroids = function () {
    var numAsteroids = (this.height + this.width) * 0.009
    for (var i = 0; i < numAsteroids; i++) {
      var randAsteroid = Asteroids.Asteroid.randomAsteroid();
      this.asteroids.push(randAsteroid);
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    this.ship.drawship(ctx);
    
    var counter = new Date().getTime();
    this.asteroids.forEach(function (asteroid) {
       // asteroid.radius += Math.sin(30 * Math.PI);
       asteroid.radius += Math.sin(counter * Math.PI / 900);
       asteroid.draw(ctx);
    });
  };

  Game.prototype.move = function(){
    var game = this;
    var asteroids = this.asteroids;
    var ship = this.ship;
    
    ship.moveship(game.width, game.height);
    
    asteroids.forEach(function(asteroid){
      asteroid.move(game.width, game.height);
    });
  };

  Game.prototype.checkCollisions = function() {
    var ship = this.ship;
    var game = this;
    this.asteroids.forEach(function(asteroid) {
      if (ship.isCollidedWith.bind(ship, asteroid)()) {
        alert("crashed");
        game.stop();
      }
    });
  };

  Game.prototype.stop = function(){
    clearInterval(this.show);
  }

  Game.prototype.bindKeyHandlers = function(){
    var ship = this.ship;
    var speed = Game.FPS/10;
    
    $(window).keydown(function(key){
         console.log(key.keyCode);
         switch(key.keyCode){
         case 37: //left
           ship.power([-speed,0]);
           break;
         case 38://up
           ship.power([0,-speed]);
           break;
         case 39://right
           ship.power([speed,0]);
           break;
         case 40://down
           ship.power([0,speed]);
           break;
         }
       })
  }
  
  Game.prototype.step = function(){
    this.move();
    this.draw(this.ctx);
    this.checkCollisions();
  };

  Game.prototype.start = function(){
    var game = this;
    this.bindKeyHandlers();
    this.addAsteroids();
    this.show = setInterval(game.step.bind(game), Game.FPS);
  };

})(this);