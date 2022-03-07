/**
 * ABSTRACTION PRENCIPLES
 *  Hide the details.
 *  Show the essentials.
 * Many programmers has problem with object
 * Eveyting in their object is public and accessible from outside
 * This will bring number of issues.
 *  Thus everytime they need to change implementation of objects.
 *  you have to and modify many places in your code
 * 
 */
function Circle(radius){
    //properties
    this.radius = radius;
    this.defaultLocation={ x:0, y:0,}
    //method
    this.computeOptimumLocation = function(){
        //...
    }
    this.draw = function(){
        this.computeOptimumLocation();
        console.log()
    }
}

const circle = new Circle(10);
circle.draw();