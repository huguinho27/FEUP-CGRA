/**
 * MyHelice
 * @constructor
 */
 function MyHelice(scene)
 {
 	CGFobject.call(this,scene);
  
 	this.mycilinder = new MyCylinderWithTops(scene, 12, 1);

 	this.initBuffers();
  };

 MyHelice.prototype = Object.create(CGFobject.prototype);
 MyHelice.prototype.constructor = MyHelice;

 MyHelice.prototype.display = function()
 {
 	var degToRad = Math.PI / 180.0;
 	this.scene.pushMatrix();
 		
		this.mycilinder.display();
	this.scene.popMatrix();
 };