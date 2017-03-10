var degToRad = Math.PI / 180.0;
 
function MyLoad(scene, x, y, z) 
{
	CGFobject.call(this,scene);
	
	this.cube = new MyUnitCubeQuad(this.scene);
	
	this.x = x;
	this.y = y;
	this.z = z;

	this.attached = 0;

	this.box = new CGFappearance(this.scene);
	this.box.loadTexture("../resources/images/box.jpg");

	this.box2 = new CGFappearance(this.scene);
	this.box2.loadTexture("../resources/images/box2.jpg");
};

MyLoad.prototype = Object.create(CGFobject.prototype);
MyLoad.prototype.constructor = MyLoad;

MyLoad.prototype.getPosX = function()
{
	return this.x;
}

MyLoad.prototype.getPosY = function()
{
	return this.y;
}

MyLoad.prototype.getPosZ = function()
{
	return this.z;
}

MyLoad.prototype.display = function()
{
	this.scene.pushMatrix();
		this.scene.translate(this.x, this.y, this.z);
		if(this.attached == 1)
		{
		    this.scene.rotate(this.scene.drone.angGeral*degToRad, 0, 1, 0);
		    this.box2.apply();
		}
		if(this.attached == 0)
		  this.box.apply();
		if (this.attached == 2)
		  this.box.apply();
		this.cube.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
}