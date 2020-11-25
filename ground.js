class Ground{
    constructor(x, y,  height,angle) {
      var options = {
        
          isStatic : true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = this.width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      PushManager();
      var pos =this.body.position;
    translate(pos.x, pos.y);
      
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  