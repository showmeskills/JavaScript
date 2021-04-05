let this_change = {
    call(Fn,obj,...args) {
        if(obj === null || obj === undefined){
            obj = globalThis;
        };
        obj.temp = Fn
        let result = obj.temp(...args)
        delete obj.temp
        return result
    },
    apply(Fn,obj,args){
        if(obj === null || obj === undefined){
            obj = globalThis;
        };
        obj.temp = Fn
        let result = obj.temp(...args)
        delete obj.temp
        return result
    },
    bind(Fn,obj,...args){
        return function(...args1){
            return call(Fn,obj,...args,...args1)
        }
    }
}

export default this_change