/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
function map(arr,callback) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i],i));
    }
    return result;
}

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 * @param {*} initValue 
 */
function reduce(arr,callback,initValue) {
    let result = initValue;
    for(let i = 0; i < arr.length; i++){
        result = callback(arr[i],result);
    }
    return result;
}

/**
 * 
 * @param {Array} arr
 * @param {Function} callback
 */

 function filter(arr,callback) {
     let result = [];
     for(let i = 0; i < arr.length; i++){
         let res = callback(arr[i],i)
         if(res){
             return arr[i]
         }
     }
     return result
 }


 /**
  * 
  * @param {Array} arr
  * @param {Function} callback
  */

  function find(arr,callback){
      for(let i = 0; i <arr.length; i++){
          let result = callback(arr[i],i);
          if(result){
              return arr[i];
          }
      }
      return undefined;
  }


  /**
   * 
   * @param {Array} arr
   * @param {Function} callback
   */

   function findIndex(arr,callback){
    for(let i = 0; i <arr.length; i++){
        let result = callback(arr[i],i);
        if(result){
            return i;
        }
    }
    return -1;
   }


   /**
    * 
    * @param {Array} arr
    * @param {Function} callback
    */

    function every(arr,callback){
        for(let i = 0; i < arr.length; i++){
            let result = callback(arr[i],i);
            if(!result){
                return false;
            }
        }
        return true;
    }

    /**
     * 
     * @param {Array} arr
     * @param {Function} callback
     */

    function some(arr,callback){
        for(let i = 0; i < arr.length; i++){
            let result = callback(arr[i],i);
            if(result){
                return true
            }
        }
        return false
    }

    //the array becomes an unique array in three ways

    /**
     * @param {Array} arr
     */

    function unique(arr){
        let result = [];
        arr.forEach(item=>{
            if(result.indexOf(item) === -1){
                result.push(arr[item])
            }
        })
        return result
    }
     /**
     * @param {Array} arr
     */
    function unique1(arr){
        let result = [];
        let obj = {};
        arr.forEach(item=>{
            if(obj[item] === undefined){
                obj[item] = true;
                result.push(item)
            }
        });
        return result
    }
    //ES6
    /**
     * @param {Array} arr
     */

     function unique2(arr){
         let set = new Set(arr);
         let array = [...set];
         return array
     }
    /**
     * @param {Array} arr
     */

    function unique3(arr){
        return [new Set(...arr)];
    }
     