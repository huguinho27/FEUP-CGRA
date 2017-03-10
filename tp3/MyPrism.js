function MyPrism(scene, slices, stacks)  
{
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() 
 {
 	var coordx = 1;
	var coordy = 0;
	var coordz = 0;
	var n = 0;
	var ang = 0;
	var dAng = 2 * Math.PI / this.slices;
	var v1 = 0; //first vertex
	this.vertices = [];
	this.indices = [];
	this.normals = [];
	
	var ang2 = Math.PI / this.slices;


	for(var j = 0; j < this.stacks; j++) 
	{
		for (var i = 0; i < this.slices; i++) 
		{

			this.vertices.push(coordx, coordy, coordz);
			this.vertices.push(coordx, coordy, coordz + 1/this.stacks);

			ang += dAng;

			coordy = Math.sin(ang);
			coordx = Math.cos(ang);

			this.vertices.push(coordx, coordy, coordz);
			this.vertices.push(coordx, coordy, coordz + 1/this.stacks);

			if(i == this.slices - 1) {
				this.indices.push(v1 + 1, n+1, n);
				this.indices.push(n, v1, v1 + 1);

				this.indices.push(n, n+1, v1 + 1);
				this.indices.push(v1 + 1, v1, n);
			}
			else {
				this.indices.push(n+3, n+1, n);
				this.indices.push(n, n+2, n+3);
				
				this.indices.push(n, n+1, n+3);
				this.indices.push(n+3, n+2, n);

			}
			n += 4;

			this.normals.push(Math.cos(ang2), Math.sin(ang2), 0);
			this.normals.push(Math.cos(ang2), Math.sin(ang2), 0);
			this.normals.push(Math.cos(ang2), Math.sin(ang2), 0);
			this.normals.push(Math.cos(ang2), Math.sin(ang2), 0);

			ang2 += dAng;
		}

		coordx = 1;
		coordy = 0;
		ang = 0;
		coordz+=1/this.stacks;

		v1 = n;
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
