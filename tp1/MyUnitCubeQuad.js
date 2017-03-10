/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
 
function MyUnitCubeQuad(scene) 
{
	CGFobject.call(this,scene);
	this.quad = new MyQuad(this.scene);
	this.quad.initBuffers();
};

MyUnitCubeQuad.prototype = Object.create(CGFobject.prototype);
MyUnitCubeQuad.prototype.constructor=MyUnitCubeQuad;

MyUnitCubeQuad.prototype.display=function()
{
	this.scene.pushMatrix() //face da frente
		this.scene.translate(0,0,0.5);
		this.quad.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix() // face de tras
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(Math.PI,0,1,0)
		this.quad.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix() //face lado dir
		this.scene.translate(0.5,0,0);
		this.scene.rotate((Math.PI/2),0,1,0);
		this.quad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix() //face lado esq
		this.scene.translate(-0.5,0,0);
		this.scene.rotate((Math.PI/2),0,-1,0);
		this.quad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix() //base
		this.scene.translate(0,-0.5,0);
		this.scene.rotate((Math.PI/2),1,0,0);
		this.quad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix() //topo
		this.scene.translate(0,0.5,0);
		this.scene.rotate((Math.PI/2),-1,0,0);
		this.quad.display();
	this.scene.popMatrix();
};
