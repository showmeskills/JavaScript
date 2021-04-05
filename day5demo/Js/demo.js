window.onload = function(){
    let hide = document.getElementsByClassName('hide')[0];
    let price = document.getElementsByClassName('price')[0];
    let hideBtn = document.querySelectorAll('.hide p');
    let priceCont = document.querySelectorAll('.price span')[0];
    let arr = [];
    let content = document.getElementById('content');
    let lis = document.querySelectorAll('#content li');
    let lisPrice = document.querySelectorAll('#content li span');

        for(var i = 0; i < lis.length; i++){
            arr.push([]);
            arr[i][0] = lis[i].innerHTML;
            arr[i][1] = lisPrice[i].innerHTML * 1;//changing to number 
        }
        

        price.onmouseover = function(){
            hide.style.display = 'block';
        }
        price.onmouseout = function(){
            hide.style.display = 'none';
        }
        
        for(let i = 0; i < hideBtn.length;i++){
            hideBtn[i].onclick = function(){
                hide.style.display = 'none';
                priceCont.innerHTML = this.innerHTML;
                priceCont.className = 'red';
                priceSort(i)//ES6 let variables are unique so variable i is equal to 0 or 1;
            }
        }

        function priceSort(idx){
            arr.sort(function(a,b){
               return idx ? a[1]-b[1]:b[1]-a[1];
            });
            content.innerHTML = '';
            for(var i = 0; i < arr.length; i++){
                content.innerHTML += `<li> ${arr[i][0]} </li>`
            }
        }
        
        

}