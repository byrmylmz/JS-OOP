/**
 * Objects are dynamic
 * Afer create object
 * You can add properties and delete.
 * in java php pyton you can not do
 * You have to update class each time
 * Therefore javascript is best.
 */

function Circle(radius){
    //propertty
    this.radius = radius;
    //method
    this.draw = function(){
        console.log()
    }
}

const circle = new Circle(10);
circle.location = { x:1 }; // dot notation is simples
circle['location']= { x:1 };  // bracket notation 

/**
 * bracket notation is somtimes is usefull
 * if you want to accesss dyncamicly to property
 */

const propertName = 'location';
circle[propertName] = { x:1 };

/**
 * delete
 */

delete circle['location'];