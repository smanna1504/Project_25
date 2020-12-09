class Ground{
    constructor(){
        var options={
            isStatic:true
        }

this.body=Matter.Bodies.rectangle(600,525,1200,10,options);
this.width=1200;
this.height=10;
World.add(world,this.body);
    }

display(){
    var posX=this.body.position.x;
    var posY=this.body.position.y;
    fill('yellow');
    rectMode(CENTER);
    rect(posX,posY,this.width,this.height);
}

};