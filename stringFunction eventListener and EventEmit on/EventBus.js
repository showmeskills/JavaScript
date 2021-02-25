const EventBus = {
    callbacks:{},
}
//event listener
EventBus.on = function(type,callback){
    if(this.callbacks[type]){
        this.callbacks[type].push(callback)
    }else{
        this.callbacks[type] = [callback];
    }
}
//event emit
EventBus.emit = function(type,data){
    if(this.callbacks[type] && this.callbacks[type].length>0){
        this.callbacks[type].forEach(callback=>{
            callback(data)
        })
    }
}
//event remove

EventBus.off = function(evenTname){
    if(evenTname){
        delete this.callbacks[evenTname]
    }else{
        this.callbacks = {};
    }
}
