window.onload=function(){
    var wrap = document.getElementsByClassName('wrap')[0];
    var btnPrev = document.querySelectorAll('.btn div')[0];
    var btnNext = document.querySelectorAll('.btn div')[1];
    var btnList = document.querySelectorAll('.btnList div');
    var imgLength = wrap.children.length;
    var contain = document.getElementsByClassName('contain')[0];
    var index = 0;
    var idx = 0;//control bottom btn to set a public index
    var idx1 = 0;
    var timer = null;
    //mouse over change img-position
    btnPrev.onmouseover=function(){
        this.style.backgroundPosition = `${166}px`
    };
    btnPrev.onmouseout=function(){
        this.style.backgroundPosition = `${83}px`
    };
    btnNext.onmouseover=function(){
        this.style.backgroundPosition = `-${41}px`
    };
    btnNext.onmouseout=function(){
        this.style.backgroundPosition = `${41}px`
    };
    //click event 
    btnNext.onclick=function(){
        next();
    };
    btnPrev.onclick=function(){
        prev()
    };
    function next(){
    index++;
    //using style.transition and setTimeout to reset play order
    wrap.style.transition = '1s';
    if(index == 1){
        index = 0;
        setTimeout(function(){
            index++;
            wrap.style.left = `-${index * 100}%`;
        },10)
    }else if(index > imgLength -1){
        index = 0;
        wrap.style.transition = '0s';
        setTimeout(function(){
            index++;
            wrap.style.transition = '1s';
            wrap.style.left = `-${index * 100}%`;
        },10)
    }
    wrap.style.left =  `-${index * 100}%`;
    idx = index > 0? index - 1 : index;
    idx++;
    if(idx === imgLength -1) idx=0;
        move(idx)
    };
    
    function prev(){
        index--;
        wrap.style.transition = '1s';
        if(index < 0){
            index = imgLength - 1;
            wrap.style.transition = '0s';
            setTimeout(function(){
                index --;
                wrap.style.transition = '1s';
                wrap.style.left ='-'+index * 100+"%";
            },10)
        }
        wrap.style.left = '-'+index * 100 +'%';
        idx = index == imgLength -1? imgLength - 2:index;
        move(idx)
    }
    
    
    //btn at the bottom 
    (function(){
        for(let i = 0; i<btnList.length;i++){
            btnList[i].onclick = function(){
                btnList[index].className = '';
                index = i;
                wrap.style.left = `-${i * 100}%`
                btnList[i].className = 'active';
            }
        }
    })();
    
    ////left and right btn to control btnlist
    function move(i){
        btnList[idx1].className='';
        idx1 = i;
        btnList[i].className='active';
    }

    //autoPlay
    timer = setInterval(function(){
        next()
    },2000);

    contain.onmouseenter = function(){
        clearInterval(timer);
    }
    contain.onmouseleave = function(){
        timer = setInterval(function(){
            next();
        },2000);
    }
}