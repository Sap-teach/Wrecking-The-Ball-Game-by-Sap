class Box{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.4,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("wood1.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        //fill(this.color);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image,0,0,this.width, this.height);
        pop();
    }
  }
