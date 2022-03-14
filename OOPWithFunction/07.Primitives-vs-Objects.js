/**
|Primitives are copied by their value
 */
let x1= 10;
let y1=x1;

let object = {value:10};
function increase(object){
    object.value++
}
increase(object);
console.log(object);



/**
 * Objects are copied by their reference
 */
let x = {value:10};
let y = x;

x.value=20;


let obj = {value:10};
function increase(obj){
    obj.value++
}
increase(obj);
console.log(obj);
