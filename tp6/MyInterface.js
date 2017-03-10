/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() 
{
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) 
{
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'Menu');	

	// add a group of controls (and open/expand by defult)
	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'velocidade', 0, 5);
	this.gui.add(this.scene, 'escalaGUI', 0.1, 2.0);
	this.gui.add(this.scene, 'currDroneAppearance', this.scene.droneAppearanceList);

	var groupLights=this.gui.addFolder("Luzes");
	groupLights.open();

	groupLights.add(this.scene, 'luz0');
	groupLights.add(this.scene, 'luz1');
	groupLights.add(this.scene, 'luz2');
	groupLights.add(this.scene, 'luz3');
	
	var watch=this.gui.addFolder("Relogio");
	watch.open();
	watch.add(this.scene, 'relogioAtivo');

	return true;
};

/**
 * processKeyboard
 * @param event {Event}
 */
MyInterface.prototype.processKeyDown = function(event) 
{ 
	CGFinterface.prototype.processKeyboard.call(this,event);
	switch (event.keyCode)
	{
		case (65):
		case (97): //'a' letter
			this.scene.rotatingLeft = true;
			break;
		case (68):
		case (100): //'d' letter
			this.scene.rotatingRight = true;
			break;
		case (87):
		case (119): // 'w' letter
			this.scene.movingForward = true;
			break;
		case(83):
		case(115): // 's' letter
			this.scene.movingBackwards = true;
			break;
		case(73):
		case(105): // 'i' letter
			this.scene.movingUpwards = true;
			break;
		case (74):
		case (106): //'j' letter
			this.scene.movingDownwards = true;
			break;
		case (80):
		case (112):
			this.scene.drone.moveRope(this.scene.velocidade);
			break;
		case (76):
		case (108):
			this.scene.drone.moveRope(-this.scene.velocidade);
			break;
	};
};

MyInterface.prototype.processKeyUp = function(event) 
{
	CGFinterface.prototype.processKeyboard.call(this,event);
	switch (event.keyCode)
	{
		case (65):
		case (97): //'a' letter
			this.scene.rotatingLeft = false;
			break;
		case (68):
		case (100): //'d' letter
			this.scene.rotatingRight = false;
			break;
		case (87):
		case (119): // 'w' letter
			this.scene.movingForward = false;
			break;
		case(83):
		case(115): // 's' letter
			this.scene.movingBackwards = false;
			break;
		case(73):
		case(105): // 'i' letter
			this.scene.movingUpwards = false;
			break;
		case (74):
		case (106): //'j' letter
			this.scene.movingDownwards = false;
			break;
		
	};
};