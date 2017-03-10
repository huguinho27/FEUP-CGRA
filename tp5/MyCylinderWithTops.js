/**
 * MyCylinderWithTops
 * @constructor
 */
 function MyCylinderWithTops(scene, slices, stacks) 
 {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
    this.mycilinder = new MyCylinder(scene, this.slices,
     this.stacks, 1,1);
    this.mycircle = new MyCircle(scene, this.slices, 1);
 };

 MyCylinderWithTops.prototype.display = function()
 {
    this.mycircle.display();
    this.mycilinder.display();
 };