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
//FIRST FUNCTION
 function Circle(radius){
     /**
      * LOCAL VARIABLES
      * local variables is not accessible from ouside.
      * You can hide certatin member of class from outside.
      * sample let color = 'red';
      */
    let color = 'red'; // local variable. it is not this.color as object
    /**
     * PROPERTIES 
     * They are implementation detail.
     * If you use 'this' They are accessible from outside.
     * Make it private with 'let'
     */
    let defaultLocation = {x:0,y:0}
    this.radius = radius;
    /**
     * METHOD
     * if you use 'this' They are accessible from outside
     * Make it private with 'let'
     */

    let.computeOptimumLocation = function(){
        //...
    }
    /**
     * SECOND FUNCTION is in first function
     */
    this.draw = function(){
        /**
         * LOCAL VARIABLES
         * These variables is limitid to this function
         * SCOPE - https://www.w3schools.com/js/js_scope.asp
         *  Scope determines the accessibility (visibility) of variables.
         * CLOSURE - https://www.w3schools.com/js/js_function_closures.asp
         *  Global variables can be made local (private) with closures.
         *  Means we can access to color or defaultLocation in the parent scope.
         *  Scope is here Closure is parent scope. **
         */
        let x,y;
        /**
         * samples we can reach in parent scope*
         * defaultLocation
         * this.radius
         * color
         */

        computeOptimumLocation();
        console.log()
    }
}

const circle = new Circle(10);
circle.draw();
