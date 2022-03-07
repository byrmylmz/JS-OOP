

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// first arguemtn {} is specify the this.
Circle.call({},1);  // same with const another = new Circle(1);
// if you have array you can pass it as second argument with apply
Circle.apply({},[1,2,3,4])


//javascirpt use to create function behind the screen
const Circle1 = new Function('radius',`
        this.radius = radius;
        this.draw = function(){
            console.log('draw');
        }
`)

const circle = new Circle1(1);

/**
 * when we use new operator its internally create empty object and pass the first argument as call method
 * Circle.call({},1);  // same with const another = new Circle(1);
 * if you dont use new // this which is inside the function will window object // global // like  Circle.call(window,1); 
 */
const another = new Circle(1);