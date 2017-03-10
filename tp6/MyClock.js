/**
 * MyClock
 * @constructor
 */
 
 function MyClock(scene) 
 {
	this.scene = scene;
	this.myclock = new MyCylinderWithTops(scene,12,1);
	this.ponteiroHoras = new MyClockHand(scene,0.4,0.15);
	this.ponteiroMinutos = new MyClockHand(scene, 0.6, 0.25);
	this.ponteiroSegundos = new MyClockHand(scene, 0.8,0.4);


	this.scene.materialB = new CGFappearance(this);
	this.scene.materialB.setAmbient(1,1,1,1);
	this.scene.materialB.setDiffuse(1,1,1,1);
	this.scene.materialB.setSpecular(1,1,1,1);
	this.scene.materialB.setShininess(50);

	this.scene.circleAppearance = new CGFappearance(this);
	this.scene.circleAppearance.setSpecular(0,0.1,0.1,0.1);
	this.scene.circleAppearance.setDiffuse(0.6,0.6,0.6,1);
	this.scene.circleAppearance.loadTexture("../resources/images/clock.png");
 };

 MyClock.prototype.update = function(currTime)
 {
 	this.ponteiroHoras.setAngle((currTime/60/60/60)+120);
 	this.ponteiroMinutos.setAngle((currTime/60/60)+180);
 	this.ponteiroSegundos.setAngle((currTime/60)+120);
 };

 MyClock.prototype.display = function() 
 {
 	//ponteiroHoras
 	this.scene.pushMatrix();
		this.scene.translate(0,0,1.15);
		this.scene.materialB.apply();
		this.ponteiroHoras.display();
	this.scene.popMatrix();

	//ponteiroMinutos
	this.scene.pushMatrix();
		this.scene.translate(0,0,1.3);
		this.scene.materialB.apply();
		this.ponteiroMinutos.display();
	this.scene.popMatrix();

	//ponteirosSegundos
	this.scene.pushMatrix();
		this.scene.translate(0,0,1.3);
		this.scene.materialB.apply();
		this.ponteiroSegundos.display();
	this.scene.popMatrix();
	
	this.scene.circleAppearance.apply();
    this.myclock.display();
 }