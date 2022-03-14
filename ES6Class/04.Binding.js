const person={
    name: "bayram",
    walk(){
        console.log(this)
    }
}

//person.walk();

//const walk = person.walk; // const walk is a function
//walk(); // we dont get a reference to person object. We get undefined

/**
 * In js functions are objects
 */

/**
 * Bind method 
 * If we use it we can get the value of person object.
 * In react it comonly use 
 */

 const walk1 = person.walk.bind(person); // when we call the bind on  the walk function we get a new walk function 
 walk1(); // we dont get a reference to person object. We get undefined
 
 
