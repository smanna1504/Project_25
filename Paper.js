class Paper{
    constructor(){
		var options={
			isStatic:false,
			restitution:0,
			friction:1.5,
			density:1.2

			
			}
        this.body = Bodies.circle(250,500,20,options);
        this.image = loadImage("Images/paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}