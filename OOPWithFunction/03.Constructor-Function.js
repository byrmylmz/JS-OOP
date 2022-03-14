
 /**
  |-------------------------------------------------------------------
  | Constructor Function // if you use this and new.
  |-------------------------------------------------------------------
  | we have to way to create object 1.factory 2.constructor function
  |-------------------------------------------------------------------
  */
  function Circle(radius){
    //console.log('this',this); // show us what is inside this.
    this.radius=radius;
    this.draw = function(){
        console.log('draw')
    }
}
const another = new Circle(1); // new is create empty object
console.log(another);

