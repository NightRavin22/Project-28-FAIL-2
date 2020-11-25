class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        
        this.image=loadImage("tree.png");
        this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
        
    }
    display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
fill("gray");
image(this.image, 0, 0, this.width, this.height);
pop();
}
}