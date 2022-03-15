/**
 * ES6 map
 * render a list of items
 */

const colors = ['red','green','blue'];


const items1 = colors.map(color=>'<li>'+color +'</li>');


/**
 * template literals
 */

const items2 = colors.map(color=>`<li>${color}</li>`)

console.log(items2);
