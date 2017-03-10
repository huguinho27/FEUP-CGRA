/**
 * MyDrone
 * @constructor
 */
function MyDrone(scene, ang, x,y,z)
{
 	CGFobject.call(this,scene);
    
    this.ang = 0;
    this.x = x || 8;
    this.y = y || 4;
    this.z = z || 8;
    this.cablex = 8;
    this.cabley = 4;
    this.cablez = 8;
    var degToRad = Math.PI / 180.0;
	
	this.backhelixspeed = 0;
	this.sidehelixspeed = 0;
	this.fronthelixspeed = 0;
	this.angGeral = -160;
	this.pitch = 0;
	this.movingForward = false;
	this.movingBackwards = false;
	this.rotatingLeft = false;
	this.rotatingRight = false;
	this.movingUpwards = false;
	this.movingDownwards = false;
	this.amazonOn = false;
	this.dhlOn = false;
	this.upsOn = false;

	this.amazon = new CGFappearance(this.scene);
	this.amazon.loadTexture("../resources/images/amazon.jpg");

	this.dhl = new CGFappearance(this.scene);
	this.dhl.loadTexture("../resources/images/dhl.png");

	this.ups = new CGFappearance(this.scene);
	this.ups.loadTexture("../resources/images/ups.jpg");

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);
  		
 	this.mycilinder = new MyCylinderWith2Tops(scene, 25, 1);
	this.semiSphere = new MyLamp(this.scene, 200, 200, 17);
	this.helice = new MyHelice(this.scene);
	this.curves = new Myx2Curve(this.scene);
	this.base = new MyUnitCubeQuad(this.scene);
	this.cable = new MyCable(this.scene);

 	this.initBuffers();
  };

MyDrone.prototype = Object.create(CGFobject.prototype);
MyDrone.prototype.constructor = MyDrone;

MyDrone.prototype.display = function()
{

	this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
		this.cable.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(this.x,this.y,this.z);
     	this.scene.rotate(this.angGeral*degToRad,0,1,0);
     	this.scene.rotate(this.pitch*degToRad,1,0,0);

	  this.scene.pushMatrix();
       	this.scene.scale(0.1,0.1,3);
        this.scene.translate(0,0,-0.5);
        this.mycilinder.display();
      this.scene.popMatrix();
      
	  this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.scale(0.1,0.1,3);
        this.scene.translate(0,0,-0.5);
        this.mycilinder.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
        this.scene.translate(0,0,1.30);
        this.scene.scale(0.1,0.2,0.1);
        this.scene.translate(0,1,1);
        this.scene.rotate(90*degToRad,1,0,0);
        this.mycilinder.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
        this.scene.translate(0,0,-1.5);
        this.scene.scale(0.1,0.2,0.1);
        this.scene.translate(0,1,1);
        this.scene.rotate(90*degToRad,1,0,0);
        this.mycilinder.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
        this.scene.scale(0.1,0.2,0.1);
        this.scene.translate(-14.1,1,0);
        this.scene.rotate(90*degToRad,1,0,0);
        this.mycilinder.display();
      this.scene.popMatrix();

	  this.scene.pushMatrix();
        this.scene.scale(0.1,0.2,0.1);
        this.scene.translate(14.1,1,0);
        this.scene.rotate(90*degToRad,1,0,0);
        this.mycilinder.display();
      this.scene.popMatrix();
	
	  this.scene.pushMatrix(); //perna lado "inicio" 1
	  	this.scene.rotate(180*degToRad,1,0,0);
	  	this.scene.scale(1,1,0.2);
	  	this.scene.translate(0,-0.2,-1.3);
	  	this.curves.display();
	  this.scene.popMatrix();

	  this.scene.pushMatrix(); //perna lado "inicio" 2
	  	this.scene.rotate(180*degToRad,1,0,0);
	  	this.scene.scale(1,1,0.2);
	  	this.scene.translate(0,-0.2,1.3);
	  	this.curves.display();
	  this.scene.popMatrix();

	  this.scene.pushMatrix(); //perna lado 1
	  	this.scene.rotate(180*degToRad,0,1,0);
	  	this.scene.rotate(180*degToRad,1,0,0);
	  	this.scene.scale(1,1,0.2);
	  	this.scene.translate(0,-0.2,1.3);
	  	this.curves.display();
	  this.scene.popMatrix();

	  this.scene.pushMatrix(); //perna lado 2
	  	this.scene.rotate(180*degToRad,0,1,0);
	  	this.scene.rotate(180*degToRad,1,0,0);
	  	this.scene.scale(1,1,0.2);
	  	this.scene.translate(0,-0.2,-1.3);
	  	this.curves.display();
	  this.scene.popMatrix();7

	  this.scene.pushMatrix();// pé 1
	  	this.scene.scale(0.05,0.05,1.8);
	  	this.scene.translate(20,-16,0);
	  	this.base.display();
	  this.scene.popMatrix();

	  this.scene.pushMatrix();// pé 2
	  	this.scene.scale(0.05,0.05,1.8);
	  	this.scene.translate(-20,-16,0);
	  	this.base.display();
	  this.scene.popMatrix();

	  this.scene.pushMatrix(); //cupula frente
	  	this.scene.scale(0.1,0.2,0.1);
	  	this.scene.translate(14.01,1.1,0);
      	this.scene.rotate(-90*degToRad,1,0,0);
        this.semiSphere.display();
      this.scene.popMatrix();

      this.scene.pushMatrix(); //cupula helice tras
	  	this.scene.scale(0.1,0.2,0.1);
	  	this.scene.translate(-14.18,1.1,0);
      	this.scene.rotate(-90*degToRad,1,0,0);
        this.semiSphere.display();
      this.scene.popMatrix();

      this.scene.pushMatrix(); //cupula helice esquerda
	  	this.scene.scale(0.1,0.2,0.1);
	  	this.scene.translate(0,1.1,14.01);
      	this.scene.rotate(-90*degToRad,1,0,0);
        this.semiSphere.display();
      this.scene.popMatrix();

      this.scene.pushMatrix(); //cupula helice direita tras
	  	this.scene.scale(0.1,0.2,0.1);
	  	this.scene.translate(0,1.1,-14.01);
      	this.scene.rotate(-90*degToRad,1,0,0);
        this.semiSphere.display();
      this.scene.popMatrix();

   	//----------------------------------------------------------------/  
	//--------------------------HELICES-------------------------------/
	//----------------------------------------------------------------/

	this.scene.pushMatrix(); //HELICES

      this.scene.pushMatrix(); //helice direita tras 
	  	this.scene.translate(0, 0.2,-1.4);
	  	this.scene.rotate(this.backhelixspeed*this.scene.escalaGUI*degToRad,0,1,0);
	  	this.scene.scale(0.6,0.003,0.045);
 		this.scene.rotate(-90*degToRad,1,0,0);
        this.helice.display();
      this.scene.popMatrix();

      this.scene.pushMatrix(); //helice esquerda frente 
	  	this.scene.translate(0, 0.2,1.4);
	  	this.scene.rotate(this.fronthelixspeed*this.scene.escalaGUI*degToRad,0,1,0);
	  	this.scene.scale(0.6,0.003,0.045);
 		this.scene.rotate(-90*degToRad,1,0,0);
        this.helice.display();
      this.scene.popMatrix();    

      this.scene.pushMatrix(); //helice frente 
      	this.scene.translate(1.41, 0.2,0);
      	this.scene.rotate(this.sidehelixspeed*this.scene.escalaGUI*degToRad,0,1,0);
      	this.scene.rotate(90*degToRad,0,1,0);
      	this.scene.scale(0.6,0.003,0.045);
 		this.scene.rotate(-90*degToRad,1,0,0);
        this.helice.display();
      this.scene.popMatrix();

      this.scene.pushMatrix(); //helice tras todas 
      	this.scene.translate(-1.41, 0.2,0);
      	this.scene.rotate(this.sidehelixspeed*this.scene.escalaGUI*degToRad,0,1,0);
      	this.scene.rotate(90*degToRad,0,1,0);
      	this.scene.scale(0.6,0.003,0.045);
 		this.scene.rotate(-90*degToRad,1,0,0);
        this.helice.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
      	this.scene.scale(0.6,0.75,0.6);
      	this.scene.translate(0,-0.1,0);
      	this.scene.rotate(-90*degToRad,1,0,0);
      	if (this.amazonOn)
      		this.amazon.apply();
      	if (this.dhlOn)
      		this.dhl.apply();
      	if (this.upsOn)
      		this.ups.apply();
        this.semiSphere.display();
      this.scene.popMatrix();
    this.scene.popMatrix();

   this.scene.popMatrix();
};

MyDrone.prototype.rotateHelixes = function()
{
 	if(this.moving != 1)
 	{
 		this.fronthelixspeed += 7.2;
		this.backhelixspeed += 7.2;
		this.sidehelixspeed -= 7.2;
		if (this.pitch >= 0)
   		{
   			this.pitch -= 0.5;
   		}

   		if (this.pitch < 0)
   		{
   			this.pitch += 0.5;
   		}
 		this.display();
 	}
}

MyDrone.prototype.checkCollision = function()
{
	var hookposx = this.getHookPosX();
	var hookposy = this.getHookPosY();
	var hookposz = this.getHookPosZ();

	var boxposx = this.scene.load.getPosX();
	var boxposy = this.scene.load.getPosY();
	var boxposz = this.scene.load.getPosZ();
	
	if((boxposx - 0.5) < hookposx)
		if((boxposx + 0.5) > hookposx)
			if((boxposz - 0.5) < hookposz)
				if((boxposz + 0.5) > hookposz)
					if((boxposy - 0.5) < hookposy)
						if(boxposy + 0.2> hookposy)
							if(this.scene.load.attached == 0)
								this.scene.load.attached = 1;
		
					
}

MyDrone.prototype.moveLoad = function()
{
	var hookposx = this.getHookPosX();
	var hookposy = this.getHookPosY();
	var hookposz = this.getHookPosZ();

	var boxposx = this.scene.load.getPosX();
	var boxposy = this.scene.load.getPosY();
	var boxposz = this.scene.load.getPosZ();

	var targetx = this.scene.target.getPosX();
	var targety = this.scene.target.getPosY();
	var targetz = this.scene.target.getPosZ();
	
	if(this.scene.load.attached == 1)
	{
		this.scene.load.x = hookposx;
		this.scene.load.y = hookposy;
		this.scene.load.z = hookposz;
	}
	
	if(this.scene.load.attached == 2)
	{
		this.scene.load.x = targetx;
		this.scene.load.y = targety;
		this.scene.load.z = targetz;
	}	
}

MyDrone.prototype.rotateLeft = function()
{
 	this.rotatingLeft = true;
    this.fronthelixspeed += 3.6;
	this.backhelixspeed += 3.6;
	this.sidehelixspeed -= 14.4;
    this.angGeral += 1;
    this.display();
}

MyDrone.prototype.rotateRight = function()
{
	this.rotatingRight = true;
    this.fronthelixspeed += 3.6;
	this.backhelixspeed += 3.6;
	this.sidehelixspeed -= 14.4;

    this.angGeral -= 1;
    this.display();
}

MyDrone.prototype.getHigher = function()
{
   this.movingUpwards = true;
   this.fronthelixspeed += 14.4;
   this.backhelixspeed += 14.4;
   this.sidehelixspeed -= 14.4;
   
   this.y += 0.04*this.scene.velocidade;
   this.display();
}

MyDrone.prototype.getLower = function()
{
   this.movingDownwards = true;
   this.fronthelixspeed += 3.6;
   this.backhelixspeed += 3.6;
   this.sidehelixspeed -= 3.6;
   this.y -= 0.04*this.scene.velocidade;
   this.display();
}

MyDrone.prototype.moveForward = function()
{
	this.movingForward = true;
 	this.fronthelixspeed += 3.6;
   	this.backhelixspeed += 14.4;
   	this.sidehelixspeed -= 7.2;
   	if (this.pitch <= 16) 
    {
    	this.pitch += 0.5; 
    }
    this.x += (Math.sin(degToRad*this.angGeral)/20)*this.scene.velocidade;
    this.z += (Math.cos(degToRad*this.angGeral)/20)*this.scene.velocidade;
    this.display();
}

MyDrone.prototype.moveRope = function(speed)
{
	if(this.cable.length + (speed/35) > 1)
		if(this.cable.length + (speed/35) < 5)
			this.cable.length +=  speed/35;
}

MyDrone.prototype.moveBack = function()
{
   this.movingBackwards = true;
   this.fronthelixspeed += 14.4;
   this.backhelixspeed += 3.6;
   this.sidehelixspeed -= 7.2;
   if (this.pitch >= -16) 
   {
    	this.pitch -= 0.5;
   }
   this.x -= (Math.sin(degToRad*this.angGeral)/20)*this.scene.velocidade;
   this.z -= (Math.cos(degToRad*this.angGeral)/20)*this.scene.velocidade;
   this.display();
}

MyDrone.prototype.getHookPosX= function()
{
	return this.x;
}

MyDrone.prototype.getHookPosY= function()
{
	 return (this.y - this.cable.length - 0.25);
}

MyDrone.prototype.getHookPosZ= function()
{
	return this.z;
}

MyDrone.prototype.update = function(currTime)
{
	if (this.scene.movingForward)
		this.moveForward();
	else if (this.scene.movingBackwards)
		this.moveBack();
	else if (this.scene.rotatingLeft)
		this.rotateLeft();
	else if (this.scene.rotatingRight)
		this.rotateRight();
	else if (this.scene.movingUpwards)
		this.getHigher();
	else if (this.scene.movingDownwards)
		this.getLower();
	else
		this.rotateHelixes();

	if (this.scene.currDroneAppearance == 0) 
	{
		this.amazonOn = true;
		this.dhlOn = false;
		this.upsOn = false;
	}	
	if (this.scene.currDroneAppearance == 1) 
	{
		this.amazonOn = false;
		this.dhlOn = true;
		this.upsOn = false;
	}	
	if (this.scene.currDroneAppearance == 2) 
	{
		this.amazonOn = false;
		this.dhlOn = false;
		this.upsOn = true;
	}
}