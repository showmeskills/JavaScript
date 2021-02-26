const PubSub = {
    id:1,
    callbacks:{},    
    //subscribe event
    subscribe(channel,callback){
        let token = 'token_' + this.id++;
        if(this.callbacks[channel]){
            this.callbacks[channel] = callback;
        }else{
            this.callbacks[channel] = {
                [token]: callback
            };
        }
        return token;
    },
    //publish event
    subscribe(channel, data){
        if(this.callbacks[channel]){
            Object.values(this.callbacks[channel]).forEach(callback=>{
                callback(data);
            })
        }
    },
    //unsubscribe events 
    //there are types of unsubscribe here, which we have to consider
    //1.there is not query value when it is used, query value is an undefined
    //2.Using a token that is a type of string
    //3.Unsubscribing one of publish events 
    unsubscribe(flag){
        if(!flag){
            this.callbacks = {};
        }else if (typeof flag === 'string'){
            if(flag.indexOf('token_') === 0){
                let callbackObj = Object.values(this.callbacks).find(obj=> obj.hasOwnProperty(flag));
                if(callbackObj){
                    delete this.callbacks[flag]
                }
            }else{
                delete this.callbacks[flag];
            }
        }
    }
};

