class Trash{
    constructor(x, y,  height,angle) {
      var options = {
        isStatic: false,
        restitution: 0.3,
        density: 1.2,
        friction: 0.5,
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = this.width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  