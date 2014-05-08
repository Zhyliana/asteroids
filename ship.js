(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Ship = Asteroids.Ship = function(pos, vel, radius, color){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }
  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function (impulse) {
    this.pos[0] += impulse[0];
    this.pos[1] += impulse[1];
    console.log(impulse);
    console.log(this.vel);
  };
  
  Ship.prototype.move = function () {
    //goes too far right and apears left
    if(this.pos[0] >= window.innerWidth){
      this.pos[0] = 0;
    }
    
    //goes too far left and apears right
    if(this.pos[0] <= 0){
      this.pos[0] = window.innerWidth;
    }
    
    //goes too far down and appears above
    if(this.pos[1] >= window.innerHeight){
      this.pos[1] = 0;
    }
    // 
    if(this.pos[1] <= 0){
      this.pos[1] = window.innerHeight;
    }
  }
  

})(this);