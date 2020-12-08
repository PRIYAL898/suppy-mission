class Box{
    constructor(x,y,width,height){
        var options={
            'restitution':0.5,
            'density':0.3,
            'friction':0.4,
        }
        this.body=Bodies.rectangle(x,y,width,height);
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,width,height);
    }
}
