class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:20
        }
        this.launcher = Constraint.create(options)

        this.pointB=pointB
       
        World.add(world,this.launcher)
    }
    attach(){
        this.launcher.bodyA=stone.body
    }

    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if(this.launcher.bodyA){
var pointA=this.launcher.bodyA.position;
var pointB=this.pointB
strokeWeight(5);
line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}