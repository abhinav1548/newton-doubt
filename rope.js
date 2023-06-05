class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}
	let pos = this.body.position;
	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
		push();
		rectMode(CENTER);
		strokeWeight(2);
		stroke(255);
		fill(127);
		rect(, this.w, this.h);
		pop();
		

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		let pos = this.body.position;

		
		
	}

}