$('document').ready(function(){
    let $wrap = $('.wrap img');
    let $btnLR = $('.btn div');
    let $btn = $('.btnList div');
    let $imgLength = $('.wrap img').length;
    let $contain = $('.contain');
    var idx = 0;
    var timer = null;
    //hover event
    $btnLR.eq(0).hover(function(){
        $btnLR.eq(0).css('background-position','0px 0px')
    },function(){
        $btnLR.eq(0).css('background-position','83px 0px')
    })
    $btnLR.eq(1).hover(function(){
        $btnLR.eq(1).css('background-position','-41px 0px')
    },function(){
        $btnLR.eq(1).css('background-position','41px 0px')      
    })
   
    //package a function
    play()
    function play(){
        $wrap.eq(idx).fadeIn(500).siblings().fadeOut(500);
        $btn.eq(idx).addClass('active').siblings().removeClass('active');
    }
    //bottom list
    $btn.on('click',function(){
        idx =$(this).index();
        play();
    })
    //click event
    $btnLR.click(function(){
       var index = $(this).index()
       //if index = 0 or 1; 1 is true; 0 is false
        if(index){
           next();
        }else{
            idx--;
            if(idx < 0){
                idx=$imgLength-1;
            }  
            play();
        }
    });
    auto();
    function auto(){ 
       timer = setInterval(function(){
           next();
       },2000)
    }
    $contain.hover(function(){
        clearInterval(timer);
    },auto);
    //package the same code
    function next(){
        idx++;
           if(idx > $imgLength-1){
               idx = 0;
           }
           play();
    }
})