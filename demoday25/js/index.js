let tabs = document.getElementsByClassName('bar-item');
let imgs = document.getElementsByClassName('imgs');
let text = document.getElementsByClassName('text');

//获取content-item
let items = document.getElementsByClassName('content-item');


for(let i = 0; i < tabs.length; i++){
    
    tabs[i].addEventListener('touchstart',function(){
        for(var j = 0; j < imgs.length; j++){
    
            imgs[j].classList.remove('active');
            text[j].classList.remove('active');
            items[j].classList.remove('active');
        }
        imgs[i].classList.add('active');
        text[i].classList.add('active');
        items[i].classList.add('active');
    })
}

//菜单导航
let t_li = document.getElementsByClassName('t-li');

for(let i = 0; i < t_li.length; i++){
    t_li[i].addEventListener('touchstart',function(){
        for(var j = 0; j < t_li.length; j++){
            t_li[j].classList.remove('li-active');
        }
        t_li[i].classList.add('li-active');
    })
}

