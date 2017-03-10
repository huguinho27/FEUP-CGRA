var degToRad = Math.PI / 180.0;
 
function MyCable(scene) 
{
	CGFobject.call(this,scene);
	
	this.cable = new MyCylinderWith2Tops(this.scene, 30, 3);
	this.hook = new MyHook(this.scene);
	
	this.length = 1.1;
};

MyCable.prototype = Object.create(CGFobject.prototype);
MyCable.prototype.constructor=MyCable;


MyCable.prototype.display = function()
{
	this.scene.pushMatrix();
		this.scene.rotate(90*degToRad, 1, 0, 0);
		this.scene.scale(0.05, 0.05, this.length);
		this.cable.display();
		this.scene.materialDefault.apply();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0, -this.length, 0);
		this.hook.display();
	this.scene.popMatrix();
}