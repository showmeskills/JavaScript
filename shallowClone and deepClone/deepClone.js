/**
 * @param {*} target
 */

 function deepClone(target,map = new Map()) {
     //target should be an object, and it can\'t be null
     if(typeof target === 'object' && target !== null){
        //prevent infinite; if cache has existed already,and return it
        let cache = map.get(target);
        if(cache){
            return cache;
        }
        //justfiy target is an object or an array
        let isArray = Array.isArray(target)
        let result = isArray ? [] :{};
        //use ES6 map.set creates an object
        map.set(target,result);
        if(isArray){
            target.forEach((item,index)=>{
                
                result[index] = deepClone(item,map);
            })
        }else{
            //Object.keys() it will return an array which is involved in the keys of target
            Object.keys(target).forEach(key=>{
                resultp[key] = deepClone(target[key],map);
            })
        }
        return result;
     }else{
        return target;
     }
 }