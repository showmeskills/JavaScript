/**
 * addEventListener(element,type,Fn,selector)
 */

 function addEventListener(el,type,Fn,selector){
     if(typeof el === 'string'){
         el = document.querySelector(el);
     }
     if(!selector){
         el.addEventListener(type,Fn);
     }else{
        el.addEventListener(type,function(e){
            const target = e.target;
            if(target.matches(selector)){
                Fn.call(target,e);
            }
        })
     }
 }