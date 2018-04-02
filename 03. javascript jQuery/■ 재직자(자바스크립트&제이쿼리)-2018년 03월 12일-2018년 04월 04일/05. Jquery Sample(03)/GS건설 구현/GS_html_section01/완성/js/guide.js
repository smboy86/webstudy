$(function(){
	//gnb
	jQuery(".gnbD .oneD").mouseenter(function(e){		
		jQuery(".gnbD").addClass("on");
		jQuery(".gnbD li .twoD").removeClass("hover");
		jQuery(".headerD").stop().animate({height:380},400, "easeOutCubic");
	})
	jQuery(".gnbD").focusin(function(){
		jQuery(".gnbD .oneD").mouseenter();
	})

	jQuery(".gnbD").mouseleave(function(e){		
		jQuery(".gnbD").removeClass("on");
		jQuery(".headerD").stop().animate({height:77}, 400, "easeOutCubic");
	}).focusout(function(){
		jQuery(".gnbD").mouseleave();
	})
	
	jQuery(".gnbD li .twoD").mouseenter(function(e){		
		jQuery(".gnbD li .twoD").removeClass("hover");
		jQuery(this).addClass("hover");
	}).focusin(function(){
		jQuery(".gnbD li .twoD").removeClass("hover");
		jQuery(this).addClass("hover");
	})

	// 본문바로가기
	jQuery(".goBody").focusin(function(){
		jQuery(this).css("top", "0");
	}).focusout(function(){
		jQuery(this).css("top", "-100px");
	})
})