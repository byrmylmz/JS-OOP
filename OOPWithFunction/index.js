// repeat with the interval of 2 seconds

let start=1,stop,running=0;

if(running){
    console.log('running dont start again');
    
}else{
   

    setTimeout(function(){

        console.log('4 sec completed');
        start=0;
        stop=1;
        running=0;
        console.log('start '+start);
        console.log('stop '+stop);
        console.log('running '+running);
        
        
    }, 4000);
    
}




// after 5 seconds stop
