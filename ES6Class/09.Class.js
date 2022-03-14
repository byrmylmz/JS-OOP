 /**
  |-------------------------------------------------------------------
  | Factory Function // if you use return
  |-------------------------------------------------------------------
  | https://javascript.info/class
  | https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
  */
class Person{
    constructor(name){
    this.name = name;
    }

    walk(){
        console.log('walk');
    }
}

const person = new Person()