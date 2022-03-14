/**
 * this alway returns a referance to the current object
 */

 const person={
    name: "bayram",
    walk(){
        console.log(this)
    }
}

person.walk(); // this will show person object.

/**
 * BELOW CODE EXPLANATION
 * hovever js is not work always like this.
 * walk() We get undefined in below condition. 
 * Therefore this keyword behaves differently from other programming language in JS
 * THE VALUE OF THIS is determined with how to FUNCTION CALLED
 * If you call function as a method in an object. person.walk() - this always return a reference to person object.
 * However if you call function as a stand alone object or outside of an object this will return a global object which is 
 * window object in browsers
 * But in this particular implementation we didnt get window object on console.
 * Because of the strict mode defined by React or vue to prevents potential problems
 * Thats why intead of getting person object we get undefined.
 */

const walk = person.walk; // const walk is a function
walk(); // we dont get a reference to person object. We get undefined 
// we can solve this problem with binding.

