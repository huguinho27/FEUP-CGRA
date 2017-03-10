/**
 * MyFloor
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 
function MyFloor(scene) 
{
	CGFobject.call(this,scene);
	this.unitcubequad = new MyUnitCubeQuad(this.scene);
	this.unitcubequad.initBuffers();
};

MyFloor.prototype = Object.create(CGFobject.prototype);
MyFloor.prototype.constructor=MyFloor;

MyFloor.prototype.display = function () 
{
		this.scene.translate(4,0,3);
		this.scene.scale(8,0.1,6);
		this.unitcubequad.display();
}