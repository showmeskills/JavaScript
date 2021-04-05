function mergeObject(...objs){
    //声明一个空对象
    let result = [];
    //遍历参数对象
    objs.forEach(obj=>{
        //获取当前对象的所有属性
        Object.keys(obj).forEach(key=>{
            //检测result中是否存在key属性
            if(result.hasOwnProperty(key)){
                result[key] = [].concat(result[key],obj[key]);
            }else{
                //obj[key]当前遍历对象的属性值
                result[key] = obj[key];
            }
        })
    })
    return result;
}