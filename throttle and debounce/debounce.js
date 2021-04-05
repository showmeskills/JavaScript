function debounce(callback,waitTime){
    let time = null;
    return function(event){
        if(time !== null){
            clearInterval(time);
        }
        setTimeout(()=>{
            callback.call(this,event);
            time = null;
        },waitTime);
    }
}