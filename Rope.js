  
class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.01,
        length: 650,
      };
  
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.rope);
    }
    attach(body) {
      this.rope.bodyA = body;
    }
  
    fly() {
      this.rope.bodyA = null;
    }
  
    display() {
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(this.color);
        strokeWeight(10);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }