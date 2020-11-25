class Bin{
    constructor(x, y,  height,angle) {
      var options = {
        
          isStatic : true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = this.width;
      this.height = height;
      this.image=loadImage("sprites/bin.png")
      World.add(world, this.body);
    }
    display(){
      push();
       var pos =this.body.position;
      translate(pos.x, pos.y);
      ImageMode(CENTER);
    
      this.image(0, 0, this.width, this.height);
     
     image(this.image,0,0,this.width,this.height) 
     pop();
    }
  };
  