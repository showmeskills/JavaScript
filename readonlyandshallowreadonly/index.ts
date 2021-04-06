
const readonlyHandler = {
    get(target,prop){
        const result = Reflect.get(target,prop);
        console.log('拦截到了读取数据',prop,result);
        return result;
    },
    set(target,prop,value){
        console.log('只能读取数据不能修改数据');
        return true;
    },
    deleteProperty(){
        console.log('只能读取数据不能删除数据');
        return true;
    }
}



//shallowReadonly
const shallowReadonly = (target:object[])=>{
    //需要判断当前的数据是不是对象
    if(target&& typeof target === 'object'){
        return new Proxy(target,readonlyHandler);
    }
    return target;
}


//readonly
const readonly = (target:object[])=>{
    //需要判断当前的数据是不是对象
    if(target&& typeof target === 'object'){
        if(Array.isArray(target)){
            target.forEach((item,index)=>{
                target[index]=readonly(item as []);
            })
        }else{
            Object.keys(target).forEach(key=>{
                target[key] = readonly(target[key]);
            })
        }

        return new Proxy(target,readonlyHandler);
    }
    return target;
}