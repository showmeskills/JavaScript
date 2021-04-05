/**
 * @param{*} target
 * es6
 */

 function shallowClone(target){
     if(typeof target === 'object' && target !== null){
         if(Array.isArray(target)){
             return [...target];
         }else{
             return {...target};
         }
     }else{
         return target;
     }
 }

 /**
 * @param{*} target
 * es5
 */

 function shallowClone1(target){
     if(typeof target === 'object' && target !== null){
         let result = Array.isArray(target) ? [] : {};
         for(let key in target){
             if(target.hasOwnProperty(key)){
                 result[key] = target[key];
             }
         }
         return result;
     }else{
         return target;
     }
 }