 /**
  |-------------------------------------------------------------------
  | Lesson 2
  |-------------------------------------------------------------------
  | Factory Function // if you use return
  |-------------------------------------------------------------------
  */
            function createCircle(radius){
                return{
                    radius,
                    draw:function(radius){
                        console.log(radius)
                    }
                }
            }
            const circle = createCircle(1);
            circle.draw(6);

