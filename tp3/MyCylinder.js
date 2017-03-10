/**
 * MyPrism
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() 
 {

this.normals=[];
 	this.indices=[];
 	this.vertices=[];
 	var ang=0;
 	var ind=-1;
 	var h;
 	var flag=0;
	for (j=0; j<this.slices+1; j++) {
		h=-1/this.stacks;
		for (i=0;i<this.stacks;i++){
			
			this.vertices.push(Math.cos(ang),Math.sin(ang),h+1/this.stacks);
			
			this.normals.push(Math.cos(ang),Math.sin(ang),0);
			
			ind=ind+1;
			h=h+1/this.stacks;
			if (j!=0)
			{
				if (flag==0)
				{
					this.indices.push(ind,ind-this.stacks+1,ind-this.stacks);
					flag=1;
				}
				else{
					this.indices.push(ind-this.stacks,ind-1,ind);
				this.indices.push(ind,ind-this.stacks+1,ind-this.stacks);
				}
			}
			
		}
		ang=ang+2*Math.PI/this.slices;
	}

	console.log(this.normals);
	console.log(this.indices);
	console.log(this.vertices);

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };