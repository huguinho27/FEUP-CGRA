function Myx2Curve(scene)
{
	CGFobject.call(this,scene);
	this.initBuffers();
}
	
Myx2Curve.prototype = Object.create(CGFobject.prototype);
Myx2Curve.prototype.constructor=Myx2Curve;

Myx2Curve.prototype.initBuffers = function () {
	step=0.05;
	halfWidth=0.2;
	
	
	this.vertices=[];
	this.normals=[];
	this.texCoords=[];
	
	this.indices=[];
	
	for(side=-1;side<=1;side+=1) //up and down of the quadratic
	{
	this.vertices.push(0,0,-halfWidth);
	this.normals.push(0,1,0);
	//this.texCoords.push();
	this.vertices.push(0,0,halfWidth);
	this.normals.push(0,1,0);
	//this.texCoords.push();
	for(i=1;i<20;i++)
	{
		//calc vertice
		x=step*i;
		y=x*x;
		this.vertices.push(x,y,halfWidth); //m1=tan(ang), m=-1/m1
		halfWidth=-halfWidth;
		
		//calc normal
		m=-(x/y); //declive da normal
		ang=Math.atan(m);
		this.normals.push(Math.cos(ang),Math.sin(ang),0);
		
		//texCoords
		//this.texCoords.push();
	}
	this.vertices.push(1,1,halfWidth);
	this.normals.push(Math.cos(Math.atan(-1)),Math.sin(Math.atan(-1)),0);
	//this.texCoords.push();
	this.vertices.push(1,1,-halfWidth);
	this.normals.push(Math.cos(Math.atan(-1)),Math.sin(Math.atan(-1)),0);
	//this.texCoords.push();
	
	
	if(side==1)
		handicap=23;
	else handicap=0;
	
	this.indices.push(handicap+0,handicap+2,handicap+3);
	this.indices.push(handicap+0,handicap+3,handicap+2);
	for(i=0;i<21;i++)
	{
		if(side==-1)
			this.indices.push(handicap+i,handicap+i+2,handicap+i+1);
		else this.indices.push(handicap+i,handicap+i+1,handicap+i+2);
	}
	}
	
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
}