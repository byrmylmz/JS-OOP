 /**
  |-------------------------------------------------------------------
  | Modules
  |-------------------------------------------------------------------
  | https://javascript.info/modules-intro
  | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
  */
import { Person } from "./Person.js";

export default class Teacher extends Person{
        constructor(name,degree){
            /**
             * we need call contructor of parent class with super()
             */
            super(name); 
            this.degree = degree;

        }
        
        teach(){
            console.log("teach");
            
        }
    }

    