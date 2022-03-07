
// https://javascript.info/constructor-new

let x = new Object(); // "object constructor" syntax
let y = {};  // "object literal" syntax

// Other constructor operators
new String();  // instead we use '', "", ``
new Boolean(); // instead we use true, false
new Number();  // instead we use1,2,3


//sample 
function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  
  alert(user.name); // Jack
  alert(user.isAdmin); // false