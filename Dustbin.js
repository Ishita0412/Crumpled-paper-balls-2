class Dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
   
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
World.add(world,this.body);

 }
 display(){
     var Dpos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(Dpos.x,Dpos.y);
     rotate(angle);
      fill("green");
      rect(0,0,this.w,this.h);
      pop();
 }
}
