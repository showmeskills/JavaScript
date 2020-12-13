window.onload = function(){
    let img = document.getElementsByTagName('img')[0];

    mousewheel(img,function(d,e){
        if(d > 0){
            img.width += 10;
            img.height +=10;
        }else{
            img.width -= 10;
            img.height -=10;
        }
    })

    function mousewheel(dom,fn){
        
         function fn1(e){
            e = e || window.event;
            if(fn.call(this,(e.wheelDelta/120 || e.detail/-3),e)===undefined){
                if(e.preventDefault()){
                    e.preventDefault();
                }else{
                    e.returnValue = false;
                }
            }
         }   

        if(dom.onmousewheel === null){
            var type = 'mousewheel';
        }else{
            var type1 = 'DOMMouseScroll'
        }

        if(document.addEventListener){
            dom.addEventListener(type,fn1,false);
        }else{
            dom.attachEvent('on'+type1,fn1)
        }
    }
}