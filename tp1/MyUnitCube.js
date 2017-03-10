/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */
function MyObject(scene) 
{
	CGFobject.call(this,scene);

	this.initBuffers();
};

MyObject.prototype = Object.create(CGFobject.prototype);
MyObject.prototype.constructor=MyObject;

MyObject.prototype.initBuffers = function () {
	this.vertices = [
			//FACE FRENTE
            -0.5, -0.5, 0.5,
            0.5, -0.5, 0.5,
            -0.5, 0.5, 0.5,
            0.5, 0.5, 0.5,
            //FACE DE TRAS
            0.5, -0.5, -0.5,
            0.5, 0.5, -0.5,
            -0.5, 0.5, -0.5,
            -0.5, -0.5, -0.5,


			];

	this.indices = [
            0, 1, 2, 
			3, 2, 1,
			//FACE TRAS
			7,5,4,
			7,6,5,
			//FACE DE LADO DIREITO
			3,1,4,
			3,4,5,
			//FACE LADO ESQUERDO
			7,0,2,
			2,6,7,
			//TOPO
			2,3,5,
			5,6,2,
			//BASE
			1,0,4,
			7,4,0,

			

        ];
		
	this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
};
