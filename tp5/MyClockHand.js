/**
 * MyClockHand
 * @constructor
 */

 function MyClockHand(scene, scale, dCentro) 
 {
 	CGFobject.call(this,scene);
 	this.ponteiro = new MyQuad(scene);
 	this.ang = 0;
 	this.sca = scale;
 	this.dist = dCentro;
  };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;

 MyClockHand.prototype.setAngle = function(ang)
 {
    this.ang  = -ang;
 };
 
 MyClockHand.prototype.display = function() 
 {
   this.scene.rotate((this.ang*degToRad),0,0,1);
   this.scene.translate(0,this.dist,0);
   this.scene.scale(0.05,this.sca,1);

   this.ponteiro.display();
 };