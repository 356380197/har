$(document).ready(function(){
	$('.img_list').children('img').eq(0).show();
	$('.demonstrate ul li').click(function(){
		var index = $(this).index();
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.img_list').children('img').eq(index).show().siblings().hide();
	})
})
