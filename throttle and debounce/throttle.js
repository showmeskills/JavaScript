function throttle(callback,waitTime){
    let start = 0;
    return function(event){
        let now = Date.now();
        if(now - start > waitTime){
            callback.call(this,event);
            start = now;
        }
    }
}