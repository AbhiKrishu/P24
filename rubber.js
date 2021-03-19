class Rubber{
    constructor(x,y,r){
      var option={
        restitution:0.8,
        friction:0.3,
        density:1.0
      }
      this.body=Bodies.circle(x,y,r,option)
      this.radius=r
      this.x=x 
      this.y=y
   World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
   push();                                          
   translate(pos.x,pos.y)
   rotate(angle)
    ellipseMode(CENTER)
    fill(225);
    ellipse(0,0,this.width,this.height)
    pop();
    }
  }