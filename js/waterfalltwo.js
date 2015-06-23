$(window).on('load',function(){
			
				waterfall();
		
	
})

function scrollload (){
				var oBox = $('<div>').addClass('box').appendTo($('#main'));
				var oPic = $('<div>').addClass('pic').appendTo($(oBox));
				var oImg = $('<img>').appendTo($(oPic));
				var oBot = $('<div>').addClass('bottom').appendTo($(oBox));
				var oP = $('<p>').appendTo($(oBot));
				var oUl = $('<ul>').appendTo($(oBot));
				var oLil = $('<li>').addClass('bottom_l').appendTo($(oUl));
				var oLir = $('<li>').addClass('bottom_r').appendTo($(oUl));
				var oB = $('<b>').appendTo($(oLil));	
				var oHead_man = $('<div>').addClass('head_img').appendTo($(oBot));
				var oI = $('<img>').appendTo($( oHead_man));
				var oMan_name = $('<span>').addClass('man_name').appendTo($(oBot));
				waterfall();
}

function waterfall (){
	var $boxs = $('#main>div');
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');
	var hArr = [];
	$boxs.each(function(index,value){
		var h = $boxs.eq(index).outerHeight();
		if (index<cols) {
			hArr[index] = h;
		} else{
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			})
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
		}
	})
}

function checkScrollSlide(){
	var $lastBox = $('#main>div').last();
	var lastBoxDis =$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;


}








