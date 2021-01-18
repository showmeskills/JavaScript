let tabs = document.getElementsByClassName('bar-item');
let imgs = document.getElementsByClassName('imgs');
let text = document.getElementsByClassName('text');

for(let i = 0; i < tabs.length; i++){
    
    tabs[i].addEventListener('touchstart',function(){
        for(var j = 0; j < imgs.length; j++){
    
            imgs[j].classList.remove('active');
            text[j].classList.remove('active');
        }
        imgs[i].classList.add('active');
        text[i].classList.add('active');
    })
}
