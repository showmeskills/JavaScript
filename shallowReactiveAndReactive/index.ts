
const reactiveHandler = {
    get(target,prop) {
       const result = Reflect.get(target,prop);
       return result
    },
    set(target,prop,value) {
        const result = Reflect.set(target,prop,value);
        return result;
    },
    deleteProperty(target,prop){
        const result = Reflect.deleteProperty(target,prop);
        return result;
    }
}

const shallowReactive = (target:object[])=>{
    if(target&&typeof target === "object"){
        return new Proxy(target,reactiveHandler);
    }
    return target;
}

const reactive = (target:object[])=>{
    if(target&&typeof target === "object"){
        if(Array.isArray(target)){
            target.forEach((item,index)=>{
                target[index]=reactive(item as []);
            })
        }else{
            Object.keys(target).forEach(key=>{
                target[key] = reactive(target[key]);
            })
        }
        return new Proxy(target,reactiveHandler);
    }
    return target;
}