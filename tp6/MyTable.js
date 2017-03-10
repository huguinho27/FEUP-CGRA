/**
 * MyTable
 * @constructor
 */
 function MyTable(scene)
 {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

     this.materialDefault = new CGFappearance(this.scene);
	
 	/*this.materialTampo = new CGFappearance(this);
 	this.materialTampo.setAmbient(0.3,0.3,0.3,1);
	this.materialTampo.setDiffuse(0.6,0.6,0.6,1);
	this.materialTampo.setSpecular(0.1,0.1,0.1,0);
	this.materialTampo.setShininess(10);
	this.materialTampo.setColor(0.5,0.25,0);

	this.materialPerna = new CGFappearance(this);
 	this.materialPerna.setAmbient(0.3,0.3,0.3,1);
	this.materialPerna.setDiffuse(0.6,0.6,0.6,1);
	this.materialPerna.setSpecular(0.8,0.8,0.8,1);
	this.materialPerna.setShininess(120);
	this.materialPerna.setColor(0.88,0.88,0.88);*/

 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor = MyTable;

 MyTable.prototype.display = function() 
 {
   

 	// legs
 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	//this.materialPerna.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	//this.materialPerna.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	//this.materialPerna.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	//this.materialPerna.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
 	this.scene.pushMatrix();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
 	//this.materialTampo.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	
 }
