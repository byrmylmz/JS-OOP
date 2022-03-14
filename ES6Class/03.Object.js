
const person ={
    /**
     * property name
     */
    name:'bayram',
    /**
     * walk is function in object.
     * It calls method.
     */
    walk:function(){

    },
    /**
     * With ES6 We can create method without comma
     */
    TreeWalker(){

    }
}

    /**
     * we can call the method inside the object
     * With dot and brackets.
     */
    person.walk();
    person['walk'];
    
    /**
     * we can assign new value to property
     */
    person['bayram'] ='yilmaz';

    /**
     * Dynamicly access to peroperty and method.
     */
    const inputFromFrom ='name';
    person[inputFromFrom]='bayram';

    /**
     * if we know what property and method we need to access.
     * We use dot notation.
     */

    person.TreeWalker();
    person.name;
    person.walk;