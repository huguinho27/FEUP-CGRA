var degToRad = Math.PI / 180.0;
 
function MyHook(scene) 
{
	CGFobject.call(this,scene);
	this.cylinder = new MyCylinderWith2Tops(this.scene, 6, 6);
	
};

MyHook.prototype = Object.create(CGFobject.prototype);
MyHook.prototype.constructor=MyHook;

MyHook.prototype.display = function()
{
	this.scene.pushMatrix();
	   this.scene.translate(0,0.15,0);
	    this.scene.scale(0.1,0.3,0.1);
		this.scene.rotate(90*degToRad,1,0,0);
		this.cylinder.display();
	this.scene.popMatrix();
}