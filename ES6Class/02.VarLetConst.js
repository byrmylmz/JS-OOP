/**
 * before ES6 / var was used
 * Var is accesible from outside
 * Var ->scope->function
 */

 function sayVarHello(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i); // will show 5 here outside the block
}

/**
 * Let came with ES6
 * it is only accesible inside the block
 * Let ->scope->block
 */
 function sayLetHello(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    console.log(i); // will not show 5 at outside of the block
}

//sayVarHello();
sayLetHello();


/**
 * Const
 * It is not reassignable.
 * It is not variable because it can not change. 
 * It is a constant.
 * Const->scope->block.
 */
const x = 1;
x = 2; // will give error.

