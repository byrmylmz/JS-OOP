/**
 |-------------------------------------------------------------------
 | GETTERS SETTER
 |-------------------------------------------------------------------
 | Source https://javascript.info/property-accessors#getters-and-setters
 | We can acess the local variable from outside thanks to getters and setters.
 | 
 */

 function Circle(radius){
  
    let color = 'red'; 
   
    let defaultLocation = {x:0,y:0}
    this.radius = radius;

    this.getDefaultLocation = function(){
        return defaultLocation;
    }
   
    this.draw = function(){
        console.log('draw')
    }

    Object.defineProperty(this,'defaultLocation',{
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
                throw new Error('Invalied Location.');
            defaultLocation=value;
        }
    })
 }
 
const circle = new Circle(10);
circle.defaultLocation={x:1,y:1};//ok
circle.defaultLocation={x:1}; // error value.y doesnt exist
circle.draw();

 
 
 
 