$('document').ready(function(){
    let $hide = $('.hide');
    let $price = $('.price');
    let $hideP = $('.hide p');
    let $priceSpan = $('.price span');
    let $arr =[];
    let $content = $('#content');
    let $lis = $('#content li');
    let $lisSpan = $('#content li span');
    let $lisLength = $('#content li').length;
    $price.hover(()=>{
        $hide.show();
    },()=>{
        $hide.hide();
    })

    for(let  i=0; i < $lisLength; i++){
        $arr.push([]);
        $arr[i][0] = $lisSpan[i].innerHTML * 1;
        $arr[i][1] = $lis[i].innerHTML;
    }
    
    console.log($arr)


    $hideP.on('click',function(){
        var index = $(this).index();
        $hide.hide();
        $priceSpan.html($(this).html());
        $priceSpan.addClass('red');
        priceSort(index);
    })

    function priceSort(idx){
        $arr.sort(function(a,b){
            return idx ? a[0]-b[0]:b[0]-a[0];
        })

        
        $content.html('');
        for(let i=0;i<$lisLength;i++){
            $content.append("<li>"+$arr[i][1]+"</li>");
        }
        
    }
})