function Circle(radius){
    //propertty
    this.radius = radius;
    //method
    this.draw = function(){
        console.log()
    }
}

const circle = new Circle(10);

for (let key in circle){
    //we can check the type 
    if(typeof circle[key] !== 'function'){
        console.log(key,circle[key])
    }
     const keys =  Object.keys(circle);
     console.log(keys);

     if('radius' in circle){
         console.log('Circle has a radius');
         
     }
     
}


/**
 * typeof
 */
 typeof undefined // "undefined"

 typeof 0 // "number"
 
 typeof 10n // "bigint"
 
 typeof true // "boolean"
 
 typeof "foo" // "string"
 
 typeof Symbol("id") // "symbol"
 
 typeof Math // "object"  (1)
 
 typeof null // "object"  (2)
 
 typeof alert // "function"  (3)