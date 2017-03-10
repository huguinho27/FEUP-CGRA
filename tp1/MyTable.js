/**
 * MyTable
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 
function MyTable(scene) 
{
	CGFobject.call(this,scene);
	this.unitcubequad = new MyUnitCubeQuad(this.scene);
	this.unitcubequad.initBuffers();
};

MyTable.prototype = Object.create(CGFobject.prototype);
MyTable.prototype.constructor=MyTable;

MyTable.prototype.display = function () 
{
	this.scene.pushMatrix()
		this.scene.translate(1,1.8,1);
		this.scene.scale(0.3,3.5,0.3);
		this.unitcubequad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix()
		this.scene.translate(1,1.8,3);
		this.scene.scale(0.3,3.5,0.3);
		this.unitcubequad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix()
		this.scene.translate(5,1.8,1);
		this.scene.scale(0.3,3.5,0.3);
		this.unitcubequad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix()
		this.scene.translate(5,1.8,3);
		this.scene.scale(0.3,3.5,0.3);
		this.unitcubequad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix()
		this.scene.translate(3,3.6,2);
		this.scene.scale(5,0.3,3);
		this.unitcubequad.display();
	this.scene.popMatrix();
};
