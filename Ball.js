class Ball{
    constructor(x,y,r,angle) {
        var options = {
            isStatic: false,
            restitution: 0,
            frcition: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r)/3,options);
        this.image=loadImage("football.png");
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        //fill(this.color)
        image(this.image,0,0,this.r, this.r)
        pop();
    }
}