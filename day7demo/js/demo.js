window.onload = function(){
    (function(){
        let quantity = document.getElementsByClassName('quantities');
        let addBtn = document.getElementsByClassName('add');
        let minusBtn = document.getElementsByClassName('minus');
        let subTotal = document.getElementsByClassName('subtotal');
        let unitPrice = document.getElementsByClassName('unit_price');
        let box = document.getElementsByClassName('box');
        let box1 = document.getElementsByClassName('box1');
        let tickle = document.getElementsByClassName('tickle');
        let tickle1 = document.getElementsByClassName('title1');
        let count = 0;
        let total = document.getElementsByClassName('total')[0];
        let totalPrice = document.getElementsByClassName('total_price')[0];
        for(let i = 0; i < quantity.length; i++){
            addBtn[i].onclick = function(){
                quantity[i].innerHTML++;
                subTotal[i].innerHTML = unitPrice[i].innerHTML*quantity[i].innerHTML;
                calc()
            }
            minusBtn[i].onclick = function(){
                quantity[i].innerHTML--;
                if(quantity[i].innerHTML < 0){
                    quantity[i].innerHTML = 0;
                }            
                subTotal[i].innerHTML = unitPrice[i].innerHTML*quantity[i].innerHTML;
                calc()
            }
        }
        function calc(){
            var price = 0;
            var volume = 0;
                for(let i = 0; i < box.length; i++){
                    volume += quantity[i].innerHTML *1;
                    price +=Number(subTotal[i].innerHTML);
            }
            totalPrice.innerHTML = price;
            total.innerHTML = volume;
        }
        function calc2(ele){
            var price = 0;
            var volume = 0;
            var num = 0;
            totalPrice.innerHTML = price;
            total.innerHTML = volume;
            quantity[ele].innerHTML = num;
            subTotal[ele].innerHTML = num;
        }

        for(let i = 0; i < box.length; i++){
            tickle[i].swit = true;
            box[i].onclick = function(){
                if(tickle[i].swit){
                    tickle[i].style.display = 'block';
                    count++;
                    calc();
                }else{
                    tickle[i].style.display = 'none';
                    count--;
                    calc2(i)
                }
                tickle[i].swit = !tickle[i].swit;
                if(count === 3){
                    tickle1[0].style.display = 'block';
                }else if(count === 0){
                    tickle1[2].style.display = 'block';
                }else{
                    tickle1[0].style.display = 'none';
                    tickle1[2].style.display = 'none';
                }
            }
        }

       //fulled picked
       box1[0].onclick = function(){       
           count = 3;
           tickle1[0].style.display = "block";
           tickle1[1].style.display = 'none';
           tickle1[2].style.display = 'none';
           for(let i = 0; i < box.length; i++){
               tickle[i].style.display ='block';
               tickle[i].swit = false;
               calc()
           }
       }
        
       //opposite click 
       box1[1].onclick = function(){
         for(let i = 0; i < box.length; i++){
             if(tickle[i].swit === true){
                tickle[i].style.display = 'block';
                count++;
                calc();
            }else{
                tickle[i].style.display = 'none';
                count--;
                calc2(i)
            }
            tickle[i].swit = !tickle[i].swit;
            if(count === 3){
                tickle1[0].style.display = 'block';
            }else if(count === 0){
                tickle1[2].style.display = 'block';
            }else{
                tickle1[0].style.display = 'none';
                tickle1[2].style.display = 'none';
            }
         }
       }

       //clear btn
       box1[2].onclick = function(){
           count = 0;
           tickle1[0].style.display = 'none';
           tickle1[1].style.display = 'none';
           tickle1[2].style.display = 'block';
           calc2()
           for(let i = 0; i < box.length; i++){
               tickle[i].style.display = 'none';
               tickle[i].swit = true;
           }
       }
        

    })()

}