 /**
  |-------------------------------------------------------------------
  | Inheritance
  |-------------------------------------------------------------------
  | https://javascript.info/class-inheritance
  | https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#inheritance
  */

  class Person{
    constructor(name){
    this.name = name;
    }

    walk(){
        console.log('walk');
    }
    
    }

    class Teacher extends Person{
        constructor(name,degree){
            /**
             * we need call contructor of parent class with super()
             */
            super(name); 
            super(degree);

        }
        teach(){
            console.log("teach");
        }
    }

const teacher = new Teacher('bayram','80');

