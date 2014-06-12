(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Asteroid = Asteroids.Asteroid;
  
  var Bullet = Asteroids.Bullet;

  var Game = Asteroids.Game = function(height, width, ctx) {
    this.height = height;
    this.width = width;
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new Asteroids.Ship([(width/2),(height/2)], [0,0]);
    this.bullets = [];
    this.show;
  };

  Game.FPS = 30;

  Game.prototype.addAsteroids = function() {
    var numAsteroids = (this.height + this.width) * 0.009
    
    for (var i = 0; i < numAsteroids; i++) {
      var randAsteroid = Asteroids.Asteroid.randomAsteroid();
      this.asteroids.push(randAsteroid);
    }
  };
  
  Game.prototype.fireBullet = function(){
    var bullet = this.ship.fireBullet();
    this.bullets.push(bullet);
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    
    this.ship.drawship(ctx);

    if(this.bullets.length >= 1){
      this.bullets.forEach( function(bullet){
        debugger
        bullet.draw.bind(bullet)(this.ctx);
      })
    }
    
    var counter = new Date().getTime();
    
    this.asteroids.forEach( function(asteroid) {
       asteroid.draw(ctx);
    });
  };

  Game.prototype.move = function(){
    var game = this;
    var asteroids = this.asteroids;
    var bullets = this.bullets;
    var ship = this.ship;

    ship.moveship(game.width, game.height);
    
    asteroids.forEach( function(asteroid){
      asteroid.move(game.width, game.height);
    });
    
    if(bullets.length >= 1){
      bullets.forEach( function(bullet){
        bullet.move(game.width, game.height);
      }); 
    };
  };

  Game.prototype.checkCollisions = function() {
    var ship = this.ship;
    var game = this;
    
    this.asteroids.forEach( function(asteroid) {
      if (ship.isCollidedWith.bind(ship, asteroid)()) {
        var idx = game.asteroids.indexOf(asteroid);
        game.asteroids.splice(idx, 1)
      }
    });
  };

  Game.prototype.stop = function(){
    clearInterval(this.show);
  }

  Game.prototype.bindKeyHandlers = function(){
    var game = this;
    var ship = this.ship;
    var speed = Game.FPS/250;
    
    $(window).keydown( function(key){
      switch(key.keyCode){
      case 37:
        ship.power([-speed,0]);
        break;
      case 38:
        ship.power([0,-speed]);
        break;
      case 39:
        ship.power([speed,0]);
        break;
      case 40:
        ship.power([0,speed]);
        break;
      case 32:
        game.fireBullet();
        break;
      }
    })
  };
  
  Game.prototype.checkWin = function(){
    if (this.asteroids.length <= 15) {
      debugger
      if($("#modal").length < 1){
        $("body").prepend("<div id=\"modal\">You won!</div><div id=\"restart\">Click here to start new game</div>")
      }
      // this.stop()
      $("canvas").click(function(){
        $("#modal").remove()
        $("#restart").remove()
        new Asteroids.Game(canvas.height, canvas.width, ctx).start();
      })
    };
  };
  
  Game.prototype.step = function(){
    var ctx = this.ctx
    this.move();
    this.draw(ctx);
    this.checkCollisions();
    this.checkWin();
  };

  Game.prototype.start = function(){
    var game = this;
    this.bindKeyHandlers();
    this.addAsteroids();
    this.show = setInterval(game.step.bind(game), Game.FPS);
  };

})(this);