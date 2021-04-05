/**
 * @param {Array} arr
 * @param {*} args
 */

 function concat(arr,...args){
    let result = [...args];
    arr.forEach(item=>{
        if(Array.isArray(item)){
            result.push(...item);
        }else{
            result.push(item)
        }
    })
    return result;
 }

 /**
 * 
 * @param {Array} arr 
 * @param {*} size 
 */

 function chunk(arr, size=1){
     if(arr.length === 0){
         return [];
     }
     let result = [];
     let tmp = [];

     arr.forEach(item=>{
         if(tmp.length === 0){
             result.push(tmp)
         }
         tmp.push(item)
         if(tmp.length === size){
             tmp = [];
         }
     })
     return result;
 }


 /**
 * 
 * @param {Array} arr1
 * @param {Array} arr2
 */

 function difference(arr1,arr2=[]){
     if(arr1.length === 0){
         return [];
     }
     if(arr2.length === 0){
         return arr1.slice();
     }

     const result = arr1.filter(item => !arr2.includes(item));
     return result;
 }


 /**
 * 
 * @param {Array} arr
 * @param {Number} size
 */

function drop(arr, size=1) {
    return arr.filter((value,index) => index >= size)
 }

 /**
 * 
 * @param {Array} arr
 * @param {Number} size
 */

function dropRight(arr, size=1) {
    return arr.filter((value,index) => index < arr.length - size)
 }


 /**
 * 
 * @param {Array} arr 
 */

 function flatten(arr){
     let result = [];
     arr.forEach(item=>{
         if(Array.isArray(item)){
             result = result.concat(flatten(item))
         }else{
             result = result.concat(item);
         }
     })
     return result;
 }
 /**
 * 
 * @param {Array} arr 
 */

 function flatten1(arr){
     let result = [...arr];
     while(result.some(item=>Array.isArray(item))){
         result = [].concat(...result)
     }
     return result
 }


 /**
 * @param {Array} arr
 * @param {*} args
 */
//the second params are number/string
 function pull(arr,...args){
     let result = [];
     for(let i=0;i< arr.length; i++){
         if(args.includes(arr[i])){
             result.push(arr[i])
             arr.splice(i,1);
             //every time the arr reduces one element, then whole arr should reduce one length;
             i--
         }
     }
     return result;
 }
 
 /**
 * @param {Array} arr
 * @param {Array} arr2
 */
//the second params are Array 
function pullAll(arr,arr2) {
    return pull(arr,...arr2);
 }


 /**
 * 
 * @param {Array} arr 
 * @param {Number} initIndex 
 * @param {Number} endIndex 
 */

 function slice(arr,initIndex,endIndex){

    if(arr.length === 0){
        return [];
    }
   
    initIndex = initIndex || 0;
    
    if(initIndex > arr.length || initIndex < 0){
        return [];
    }

    endIndex = endIndex || arr.length;

    if(endIndex < initIndex){
        end = arr.length;
    }

    let result = [];
    if(endIndex > 0){
        for(let i = 0; i < arr.length; i++){
            if(i >= initIndex && i < endIndex){
                result.push(arr[i]);
            }
        }
    }else if(endIndex < 0){
        for(let i = 0; i < arr.length + endIndex; i++){
            if(i >= initIndex){
                result.push(arr[i]);
            }
        }   
    }
    return result;
 }
