$('document').ready(function(){
	var $imgLength = $('.imgList li').length;
	var $obj = $('.imgList li');
	var $left = $('.left');
	var $right = $('.right');

	var $time = 0;
	var $a = 0;
	var $arrHeight = [];
	var $arrWidth = [];
	var $arrTop = [];
	var $arrLeft = [];
	var $arrOpacity = [];
	var $arrZindex = [];

	
	$time = new Date();
	$right.on('click',function(){
		if(new Date - $time > 500){
			z(0)
		}
		$time = new Date();
	});
	$left.on('click',function(){
		if(new Date - $time > 500){
			z(1)
		}
		$time = new Date();
	})
	function z(ele){
		for(var i = 0; i < $imgLength; i++){
			$arrHeight[i] = $obj.eq(i).css('height');
			$arrWidth[i] = $obj.eq(i).css('width');
			$arrTop[i] = $obj.eq(i).css('top');
			$arrLeft[i] = $obj.eq(i).css('left');
			$arrOpacity[i] = $obj.eq(i).find('img').css('opacity');
			$arrZindex[i] = $obj.eq(i).css('z-index');
		}
		 
		for(var i = 0; i < $imgLength; i++){
			if(ele==0){
				if(i==0){
					$a = 9
				}else{
					$a = i - 1;
				}
			}
			if(ele == 1){
				if(i==9){
					$a = 0;
				}else{
					$a = i + 1;
				}
			}
			$obj.eq(i).find('img').css('opacity',$arrOpacity[$a]);
			$obj.eq(i).css('z-index',$arrZindex[$a]);
			$obj.eq(i).animate({
				'width':$arrWidth[$a],
				'height':$arrHeight[$a],
				'top':$arrTop[$a],
				'left':$arrLeft[$a],
			},500)
		}             
	}
})

