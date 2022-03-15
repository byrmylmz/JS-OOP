/**
 * normal function
 */
 const square = function(number){
    return number * number;
}
/**
 * arrow function after es6 
 */
const square1 = (number)=>{
    return number * number;
}
/**
 * Single parameter
 */
const square2 = number=>{
    return number * number;
}
/**
 * zero parameter
 */
const square3 = ()=>{
    return number * number;
}
/**
 * SINGLE LINE RETURN
 */
const square4 = number => number * number;

/**
 * --------------------------------------------------------------------------
 * Where it is useful
 */

const jobs = [
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false},
];

const activeJobs = jobs.filter(function(job){return JSON.isActive;});
const activeJobs1 = jobs.filter((job)=> job.isActive);
console.log(activeJobs1);
