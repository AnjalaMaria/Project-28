class shooter{
	constructor(body,anchor){
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body;
		this.pointB=anchor;
		this.shooter=Constraint.create(options);
		World.add(world,this.shooter);
	}

	attach(body){
		this.shooter.bodyA=body;
	}

	fly(){
		this.shooter.bodyA=null;
	}

	display(){
		if(this.shooter.bodyA);
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}