var degToRad = Math.PI / 180.0;
 
function MyTarget(scene, slices,stacks, x, z) 
{
	CGFobject.call(this,scene);
    
	this.cylinder = new MyCylinderWithTops(this.scene,20,1);

	this.targetText = new CGFappearance(this.scene);
	this.targetText.loadTexture("../resources/images/target.png");

	this.x = x;
	this.z = z;
	
};

MyTarget.prototype = Object.create(CGFobject.prototype);
MyTarget.prototype.constructor = MyTarget;

MyTarget.prototype.getPosX = function()
{
    return this.x;	 
}

MyTarget.prototype.getPosY = function()
{
	return 1;
}

MyTarget.prototype.getPosZ = function()
{
	return this.z;
}

MyTarget.prototype.display = function()
{
	this.scene.pushMatrix();
	   this.scene.scale(1,0.1,1);
	   this.scene.translate(13,0.5,13);
	   this.scene.rotate(180*degToRad,0,0,1);
	   this.scene.rotate(90*degToRad,1,0,0);
	   this.targetText.apply();
	   this.cylinder.display();
	this.scene.popMatrix();
}