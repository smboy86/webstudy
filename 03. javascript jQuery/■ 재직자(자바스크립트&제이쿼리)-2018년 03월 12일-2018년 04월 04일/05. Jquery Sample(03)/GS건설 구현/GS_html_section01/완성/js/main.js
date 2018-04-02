var banMax, banMove=false, banNum =0, banStop = false;
var banInterval, banDuration = 8000; 
var listRollMax, listRollMove=true, listRollNum =0, listRollStop = false;
var checkN =0;
var listRollInterval, listRollDuration = 8000; 
var curN =0, curMax, visRollMove = true;
var visRollInterval,  vDuration=10000;
var cloudInterval,  cDuration=20000;
var listRollTime = 500;
var cloudM = false;

$(function(){
	//메인 비쥬얼 

	mVisMotion();
	
	jQuery(".visualD .visA").eq(0).css("z-index",300);
	curMax = jQuery(".visualD .visA").size()-1;
	if(!visRollMove) visRollInterval = setInterval("visRoll()", vDuration);
	jQuery(".visualD .visBtD  a").each(function(w){
		jQuery(this).click(function(){
			if(!visRollMove){
				visRollMove = true;
				if(w == 0){
					visRollSet();
					curN--;
					if(curN < 0) curN = curMax;
					visRollM();
					visRollMove = false;
				}else if(w == 1){
					visRollSet();
					curN ++;
					if(curN > curMax) curN = 0;
					visRollM();
					visRollMove = false;
				}
			}   
		}).hover(function(){
			clearInterval(visRollInterval);
		}, function(){
			clearInterval(visRollInterval);
			visRollInterval = setInterval("visRoll()", vDuration);
		})
	})

	//리스트 롤링 동그라미 버튼
	listRollMax = $(".BuBtnA .bt").size()-1;
	if(!listRollMove) listRollInterval = setInterval("listRoll()", listRollDuration);
	jQuery(".BuBtnA .bt").each(function(index){
		jQuery(this).click(function(){
			if(!listRollMove) {
				listRollMove = true;
				if(listRollMax >= 1){
					if(listRollNum !=index) {
						if(listRollNum<index) {
							if(index - listRollNum> 1){
								jQuery(".yellBar").slice(0 , index).width(50); 
								jQuery(".BuBtnA .bt").slice(0 , index).addClass("on");
							}
							checkN = listRollNum;
							listRollNum = index;
							jQuery(".yellBar").eq(listRollNum).stop().animate({width:50}, listRollTime,function(){
								jQuery(".mMusRollD ul").eq(checkN).stop().animate({left:"-100%"}, 500);
								jQuery(".BuBtnA .bt").eq(listRollNum).addClass("on");
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"100%"}, 0);
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"0"}, 500, function(){
									listRollMove = false;
								});
							});
						} else if(listRollNum>index) {
							if(listRollNum- index > 1){
								var listBarN = index +2;
								var listBtN = index +1;
								jQuery(".yellBar").slice(listBarN , listRollMax).width(0); 
								jQuery(".BuBtnA .bt").slice(listBtN , listRollMax).removeClass("on");
								jQuery(".yellBar").eq(listRollMax).width(0); 
								jQuery(".BuBtnA .bt").eq(listRollMax).removeClass("on");
							}
							checkN = listRollNum;
							listRollNum = index;
							jQuery(".BuBtnA .bt").eq(checkN).removeClass("on");
							jQuery(".yellBar").eq(listRollNum+1).stop().animate({width:0}, listRollTime,function(){
								jQuery(".mMusRollD ul").eq(checkN).stop().animate({left:"100%"}, 500);
								jQuery(".BuBtnA .bt").eq(listRollNum).addClass("on");
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"-100%"}, 0);
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"0"}, 500, function(){
									listRollMove = false;
								});
							});
						}
					}else if(listRollNum == index){
						listRollMove = false;
					}
				}
			}
		})	.hover(function(){
			clearInterval(listRollInterval);
		}, function(){
			clearInterval(listRollInterval);
			if(listRollMax >= 1)listRollInterval = setInterval("listRoll()", listRollDuration);
		})
	});
	
	//리스트 롤링 좌우 롤링버트
	jQuery(".mMuseumS .rollbtnA button").each(function(q){
		jQuery(this).click(function(e){
			if(!listRollMove){
				listRollMove= true;
				if(listRollMax >0){
					if(q==0){
						if(listRollNum-1 < 0){ 
							listRollNum = listRollMax;
							jQuery(".yellBar").width(50); 
							jQuery(".BuBtnA .bt").addClass("on");
							jQuery(".mMusRollD ul").eq(0).stop().animate({left:"100%"}, 1000);
							jQuery(".mMusRollD ul").eq(listRollMax).stop().animate({left:"-100%"}, 0);
							jQuery(".mMusRollD ul").eq(listRollMax).stop().animate({left:"0"}, 1000, function(){
								listRollMove = false;
							});
						}else{
							jQuery(".BuBtnA .bt").eq(listRollNum).removeClass("on");
							jQuery(".yellBar").eq(listRollNum).stop().animate({width:0}, listRollTime,function(){
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"100%"}, 800);
								listRollNum --;	
								jQuery(".BuBtnA .bt").eq(listRollNum).addClass("on");
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"-100%"}, 0);
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"0"}, 800, function(){
									listRollMove = false;
								});
							});
						}
					}else{
						if(listRollNum+1 > listRollMax){ 
							listRollNum =0;
							jQuery(".yellBar").width(0); 
							jQuery(".BuBtnA .bt").removeClass("on");
							jQuery(".BuBtnA .bt").eq(0).addClass("on");
							jQuery(".mMusRollD ul").eq(listRollMax).stop().animate({left:"-100%"}, 1000);
							jQuery(".mMusRollD ul").eq(0).stop().animate({left:"100%"}, 0);
							jQuery(".mMusRollD ul").eq(0).stop().animate({left:"0"}, 1000, function(){
								listRollMove = false;
							});
						}else{
							jQuery(".yellBar").eq(listRollNum+1).stop().animate({width:50}, listRollTime,function(){
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"-100%"}, 800);
								listRollNum ++;
								jQuery(".BuBtnA .bt").eq(listRollNum).addClass("on");
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"100%"}, 0);
								jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"0"}, 800, function(){
									listRollMove = false;
								});
							});
						}
					}
				}
			}
		}).hover(function(){
			clearInterval(listRollInterval);
		}, function(){
			clearInterval(listRollInterval);
			if(listRollMax >= 1) listRollInterval = setInterval("listRoll()", listRollDuration);
		})
	})


	//배너 비쥬얼 모션 (동그라미 버튼)
	banMax = $(".banBtA .bt").size()-1;
	banInterval = setInterval("banRoll()", banDuration);
	jQuery(".banBtA .bt").each(function(q){
		jQuery(this).click(function(){
			if(!banMove) {
				banMove = true;
				if(banNum !=q) {
					if(banNum<q) {
						jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"-100%"}, 500);
						jQuery(".banBtA .bt").eq(banNum).removeClass("on");
						banNum = q;
						jQuery(".banBtA .bt").eq(banNum).addClass("on");
						jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"100%"}, 0);
						jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"0"}, 500, function(){
							banMove = false;
						});
					} else if(banNum>q) {
						jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"100%"}, 500);
						jQuery(".banBtA .bt").eq(banNum).removeClass("on");
						banNum = q;
						jQuery(".banBtA .bt").eq(banNum).addClass("on");
						jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"-100%"}, 0);
						jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"0"}, 500, function(){
							banMove = false;
						});
					}
				}else if(banNum == q){
					banMove = false;
				}
			}
		})	.hover(function(){
			clearInterval(banInterval);
		}, function(){
			clearInterval(banInterval);
			if(!banStop && banMax >= 1) banInterval = setInterval("banRoll()", banDuration);
		})
	});
	
	//비쥬얼 모션 동작버튼 (재생 / 멈춤 )
	jQuery(".banBtA .playBt").click(function(){
		if(!banMove) {
			banMove = true;
			if(!banStop) {
				// 멈춤 버튼
				banStop = true;
				banMove = false;
				clearInterval(banInterval);
				jQuery(this).addClass("on");
			} else {
				// 재생 버튼		
				banStop = false;
				banMove = false;
				clearInterval(banInterval);
				banInterval = setInterval("banRoll()", banDuration);
				jQuery(this).removeClass("on");
			}
		}
	})
	
	//박물관 리스트 
	$(".mMusRollD ul").eq(0).find("li").css("opacity","0").css("top","40px");
	$(".mMusRollD ul li:nth-child(2)").css("left", 240);
	$(".mMusRollD ul li:nth-child(3)").css("left", 480);
	$(".mMusRollD ul li:nth-child(4)").css("left", 720);

	//메인 인디게이터
	var mIndiTop = 336;
	
	$(window).scroll(function(){		
		if($(window).scrollTop()<50){
			jQuery(".mindiD").stop().animate({top:336}, 400);
		}else{
			jQuery(".mindiD").stop().animate({top:mIndiTop + jQuery(window).scrollTop()}, 400);
		}
		//스크롤 버튼 클릭시 이동 
		$(".mindiD  a").each(function(q){
			if($(window).scrollTop() < 500){
				mindi1();
				$(".mindiD  a").eq(0).addClass("on");
			}else if(jQuery(window).scrollTop() <1000 && jQuery(window).scrollTop() >= 500){
				mindi2();
				seeMotion();
				$(".mindiD  a").eq(1).addClass("on");
			}else if($(window).scrollTop()<1980 && jQuery(window).scrollTop() >= 1000){
				mindi3();
				newsMotion();
				$(".mindiD  a").eq(2).addClass("on");
			}else if($(window).scrollTop() >= 1980){
				mindi4();
				museumMotion();				
				listRollMove = false;
				$(".mindiD a").eq(3).addClass("on");
			}
			$(this).click(function(){
				if(q==0){
					mindi1();
					jQuery(".mindiD  a").eq(0).addClass("on");
					jQuery(".mindiD").stop().animate({top:336}, 400);
					//$(window).scrollTop(0);
					jQuery("body,html").stop().animate({scrollTop:0}, 400);
				}else if(q==1){
					mindi2();
					seeMotion();
					jQuery(".mindiD  a").eq(1).addClass("on");
					jQuery(".mindiD ").stop().animate({top:1100}, 400);
					//$(window).scrollTop(900);
					jQuery("body,html").stop().animate({scrollTop:900}, 400);
				}else if(q==2){
					mindi3();
					newsMotion();
					listRollMove = false;
					jQuery(".mindiD  a").eq(2).addClass("on");
					jQuery(".mindiD").stop().animate({top:1984}, 400);
					//jQuery(window).scrollTop(1650);
					jQuery("body,html").stop().animate({scrollTop:1650}, 400);
				}else if(q==3){
					mindi4();
					museumMotion();
					jQuery(".mindiD a").eq(3).addClass("on");
					jQuery(".mindiD").stop().animate({top:2874}, 400);
					//$(window).scrollTop(2500);
					jQuery("body,html").stop().animate({scrollTop:2500}, 400);
				}
			})
		})
		$(".visB .mScrollBtA .scrollBtB").click(function(){
			mindi2();
			$(".mindiD  a").eq(1).addClass("on");
			jQuery(".mindiD").stop().animate({top:1100}, 400);
			$("body,html").stop().animate({scrollTop:900}, 400);
		})
		
		$(".mSeeD .mScrollBtA .scrollBtB").click(function(){
			mindi3();
			$(".mindiD  a").eq(2).addClass("on");
			jQuery(".mindiD").stop().animate({top:1984}, 400);
			$("body,html").stop().animate({scrollTop:1650}, 400);
		})
		$(".mSeeD .mScrollBtA .scrollBtT").click(function(){
			mindi1();
			$(".mindiD  a").eq(0).addClass("on");
			jQuery(".mindiD").stop().animate({top:336}, 400);
			$("body,html").stop().animate({scrollTop:0}, 400);
		})
		$(".mNewsD .mScrollBtA .scrollBtB").click(function(){
			mindi4();
			$(".mindiD a").eq(3).addClass("on");
			jQuery(".mindiD").stop().animate({top:2874}, 400);
			$("body,html").stop().animate({scrollTop:2500}, 400);
		})
		$(".mNewsD .mScrollBtA .scrollBtT").click(function(){
			mindi2();
			$(".mindiD  a").eq(1).addClass("on");
			jQuery(".mindiD ").stop().animate({top:1100}, 400);
			$("body,html").stop().animate({scrollTop:900}, 400);
		})
		$(".mMuseumD .mScrollBtA .scrollBtT").click(function(){
			mindi3();
			$(".mindiD  a").eq(2).addClass("on");
			jQuery(".mindiD").stop().animate({top:1984}, 400);
			$("body,html").stop().animate({scrollTop:1650}, 400);
		})
	});$(window).scroll();
})
//비쥬얼 처음 모션
function mVisMotion(){
	TweenMax.fromTo(jQuery(".cloudA .cimg1 img"), 2.5, {opacity:0, left:-600, width:160}, {opacity:1, left:-450, width:242,delay:0.3,  ease:Power2.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg2 img"), 2, {opacity:0, top:790, width:390}, {opacity:1, top:726, width:425,delay:0.3,  ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg3 img"), 1.2, {opacity:0, top:720, width:580}, {opacity:1, top:680, width:607, delay:0.5, ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg4 img"), 1, {opacity:0, top:720, width:300}, {opacity:1, top:677, width:342, delay:0.7, ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg5 img"), 1, {opacity:0, top:750,  width:290}, {opacity:1, top:700, width:322, delay:0.7, ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg6 img"), 1.2, {opacity:0, top:660, width:390}, {opacity:1, top:615, width:476, delay:0.7,  ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg7 img"), 3.5, {opacity:0, left:-336, width:260}, {opacity:1,  left:-236, width:182, delay:1,  ease:Power2.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg8 img"), 3, {opacity:0, left:-80, width:60}, {opacity:1,  left:20, width:91, delay:1.2,  ease:Power2.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg9 img"), 4.2, {opacity:0, left:300, width:120}, {opacity:1,  left:438, width:142, delay:1.2,  ease:Power4.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg10 img"), 3.5, {opacity:0, left:400}, {opacity:1,  left:460, delay:1,  ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg11 img"), 3.5, {opacity:0, top:360,left:1150}, {opacity:1,  top:344,left:1000,  delay:1.2,  ease:Power4.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg12 img"), 2, {opacity:0,top:570}, {opacity:1,top:550,  delay:0.8,  ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".cloudA .cimg13 img"), 2, {opacity:0,left:1270}, {opacity:1,left:1290,  delay:0.5,  ease:Power4.easeOut, onComplete:function(){
		cloudInterval = setInterval("cloudMove()", 3000);
	}});
	TweenMax.fromTo(jQuery(".visA0 .titA"), 1, {opacity:0, top:114}, {opacity:1, top:84, delay:1, ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".visA0 .txtA"), 1, {opacity:0, top:372}, {opacity:1, top:342, delay:1.2, ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".visA0 .btnA"), 1, {opacity:0, top:467}, {opacity:1, top:437, delay:1.4, ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".visA0 .imgA img"), 1.5, {opacity:0,top:545, width:769}, {opacity:1,top:29, width:869, delay:1.8, ease:Power3.easeOut});
	TweenMax.fromTo(jQuery(".visualD .visBtD"), 1, {opacity:0}, {opacity:1, delay:1.6, ease:Power3.easeOut});
	visRollMove = false;
}

 function cloudMove(){
	if(cloudM){
		TweenMax.to(jQuery(".cloudA .cimg1 img"), 20, {left:-450, delay:0.8,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg2 img"), 15, {top:650, delay:0.4,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg3 img"), 15, {top:760, delay:0.2,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg4 img"), 15, {top:677, delay:0.4,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg5 img"), 15, {top:750, delay:0.2,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg6 img"), 15, {top:650, delay:0.8,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg7 img"), 20, {left:-150, delay:0.7,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg8 img"), 20, {left:20, delay:0.5,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg9 img"), 20, {left:438, delay:0,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg10 img"), 20, {left:460, delay:0.5,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg11 img"), 20, {left:1086,  delay:1.4,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg12 img"), 20, {left:1300, delay:0.7,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg13 img"), 20, {left:1000, delay:1,  ease:Power1.linear});
	}else{
		TweenMax.to(jQuery(".cloudA .cimg1 img"), 20, {left:-600, delay:0.8,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg2 img"), 15, {top:726, delay:0.4,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg3 img"), 15, {top:680, delay:0.2,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg4 img"), 15, {top:710, delay:0.4,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg5 img"), 15, {top:700, delay:0.2,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg6 img"), 15, {top:615, delay:0.8,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg7 img"), 20, {left:-450, delay:0.5,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg8 img"), 20, {left:-300, delay:0.7,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg9 img"), 20, {left:250, delay:0.8,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg10 img"), 20, {left:100, delay:0.5,  ease:Power1.linear});		
		TweenMax.to(jQuery(".cloudA .cimg11 img"), 20, {left:1300,  delay:0.5,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg12 img"), 20, {left:1000, delay:0.7,  ease:Power1.linear});
		TweenMax.to(jQuery(".cloudA .cimg13 img"), 20, {left:1500, delay:0.5,  ease:Power1.linear});
	}
	cloudM = !cloudM;
 }

//비주얼 롤링 리셋모션
var visRoll_twn1, visRoll_twn2,visRoll_twn3,visRoll_twn4,visRoll_twn5;

function visRollSet(){
	if(visRoll_twn1) visRoll_twn1.kill();
	if(visRoll_twn2) visRoll_twn2.kill();
	if(visRoll_twn3) visRoll_twn3.kill();
	if(visRoll_twn4) visRoll_twn4.kill();
	if(visRoll_twn5) visRoll_twn5.kill();

	jQuery(".visualD .visA").eq(curN).css("z-index",0);
	TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".imgA").find("img"), 0.5, {css:{opacity:0, top:545, width:769}, ease:Power3.easeOut});
	TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".titA"), 0.3, {css:{opacity:0}, ease:Power3.easeOut, onComplete:function(){
		jQuery(".visualD .visA").eq(curN).find(".titA").css("top",114);
	}});
	TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".txtA"), 0.3, {css:{opacity:0}, ease:Power3.easeOut, onComplete:function(){
		jQuery(".visualD .visA").eq(curN).find(".txtA").css("top",372);
	}});
	TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".btnA"), 0.3, {css:{opacity:0}, ease:Power3.easeOut, onComplete:function(){
		jQuery(".visualD .visA").eq(curN).find(".btnA").css("top",467);
	}});
	if(jQuery(".visualD .visA").eq(curN).find(".iconA").size() >0){
		TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".iconA"), 0.3, {css:{opacity:0, top:185},delay:0.3,  ease:Power2.easeOut});
	}
}

//비쥬얼 롤링 보여질 모션
function visRollM(){
	jQuery(".visualD .visA").eq(curN).css("z-index",300);
	jQuery(".mScene").find("img").attr("src", "/common/images/txt/mVisN_txt"+(curN)+".png");
	jQuery(".mScene").find("img").attr("alt", (curN+1) + "번째 비주얼")
	visRoll_twn1 = new TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".imgA").find("img"), 1.4, {css:{opacity:1,top:29, width:869}, delay:0.8,  ease:Power2.easeOut});
	visRoll_twn2 = new TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".titA"), 1, {css:{opacity:1, top:84},delay:0.6,  ease:Power3.easeOut});
	visRoll_twn3 = new TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".txtA"), 1, {css:{opacity:1, top:342},delay:0.8,  ease:Power3.easeOut});
	if(jQuery(".visualD .visA").eq(curN).find(".iconA").size() >0){
		visRoll_twn4 = new TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".iconA"), 1.5, {css:{opacity:1, top:153},delay:0.7,  ease:Power3.easeOut});
	}
	visRoll_twn5 = new TweenMax.to(jQuery(".visualD .visA").eq(curN).find(".btnA"), 1, {css:{opacity:1, top:437},delay:1,  ease:Power3.easeOut});
}

//비쥬얼 인터벌 
function visRoll(){
	visRollSet();
	curN ++;
	if(curN > curMax) curN = 0;
	visRollM();
	visRollMove = false;
}

// 배너 인터벌 
function banRoll(){
	jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"-100%"}, 500);
	jQuery(".banBtA .bt").eq(banNum).removeClass("on");
	banNum ++;
	if(banNum > banMax) banNum =0;
	jQuery(".banBtA .bt").eq(banNum).addClass("on");
	jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"100%"}, 0);
	jQuery(".banImgA .imgA ").eq(banNum).stop().animate({left:"0"}, 500, function(){
		banMove = false;
	});
}

//리스트 인터벌 
function listRoll(){
	if(listRollNum+1 > listRollMax){ 
		listRollNum =0;
		jQuery(".yellBar").width(0); 
		jQuery(".BuBtnA .bt").removeClass("on");
		jQuery(".BuBtnA .bt").eq(0).addClass("on");
		jQuery(".mMusRollD ul").eq(listRollMax).stop().animate({left:"-100%"}, 1000);
		jQuery(".mMusRollD ul").eq(0).stop().animate({left:"100%"}, 0);
		jQuery(".mMusRollD ul").eq(0).stop().animate({left:"0"}, 1000, function(){
			listRollMove = false;
		});
	}else{
		jQuery(".yellBar").eq(listRollNum+1).stop().animate({width:50}, listRollTime,function(){
			jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"-100%"}, 800);
			listRollNum ++;
			jQuery(".BuBtnA .bt").eq(listRollNum).addClass("on");
			jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"100%"}, 0);
			jQuery(".mMusRollD ul").eq(listRollNum).stop().animate({left:"0"}, 800, function(){
				listRollMove = false;
			});
		});
	}
}

function mindi1(){
	$(".mindiD").removeClass("pg2");
	$(".mindiD").removeClass("pg3");
	$(".mindiD").removeClass("pg4");
	$(".mindiD").addClass("pg1");
	$(".mindiD  a").removeClass("on");
}
function mindi2(){
	$(".mindiD").removeClass("pg1");
	$(".mindiD").removeClass("pg3");
	$(".mindiD").removeClass("pg4");
	$(".mindiD").addClass("pg2");
	$(".mindiD  a").removeClass("on");
}
function mindi3(){
	$(".mindiD").removeClass("pg1");
	$(".mindiD").removeClass("pg2");    
	$(".mindiD").removeClass("pg4");
	$(".mindiD").addClass("pg3");
	$(".mindiD  a").removeClass("on");
}
function mindi4(){
	$(".mindiD").removeClass("pg1");
	$(".mindiD").removeClass("pg2");
	$(".mindiD").removeClass("pg3");
	$(".mindiD").addClass("pg4");
	$(".mindiD  a").removeClass("on");
}

function seeMotion(){
	TweenMax.to(jQuery(".mSeeD .titA"), 1.2,{opacity:1, top:99,delay:.2, ease:Power3.easeOut});
	TweenMax.staggerTo(jQuery(".mSeeD .leftA .bt1"),0.6,{opacity:1, top:0, delay:.6, ease:Power3.easeOutQuart});
	TweenMax.staggerTo(jQuery(".mSeeD .leftA .bt2"), 0.6,{opacity:1, top:0, delay:.8, ease:Power3.easeOutQuart});
	TweenMax.staggerTo(jQuery(".mSeeD .rightA .mInfoA"),0.6,{opacity:1, top:0, delay:1, ease:Power3.easeOutQuart});
	TweenMax.staggerTo(jQuery(".mSeeD .rightA .bt1"),0.6,{opacity:1, top:185, delay:1.2, ease:Power3.easeOutQuart});
	TweenMax.staggerTo(jQuery(".mSeeD .rightA .bt2"), 0.6,{opacity:1, top:185, delay:1.4, ease:Power3.easeOutQuart});
	TweenMax.to(jQuery(".mSeeD .mScrollBtA"), 1,{opacity:1, delay:1.6, ease:Power3.easeOut});
}

function newsMotion(){
	TweenMax.to(jQuery(".mNewsD .titA"), 1.2, {opacity:1, top:140, delay:0.2, ease:Power3.easeOut});
	TweenMax.staggerTo(jQuery(".mNewsD .box1"), .8 , {opacity:1, top:30, delay:.4, ease:Power2.easeOutQuart});
	TweenMax.staggerTo(jQuery(".mNewsD .box2"), .8 , {opacity:1, top:0, delay:.6, ease:Power2.easeOutQuart});
	TweenMax.staggerTo(jQuery(".mNewsD .box3"), .8 , {opacity:1, top:40, delay:.8, ease:Power2.easeOutQuart});
	TweenMax.to(jQuery(".mNewsD .mScrollBtA"), 1,{opacity:1, delay:.9, ease:Power3.easeOut});
}
 
 function museumMotion(){
	TweenMax.to(jQuery(".mMuseumD .titA"), 1.5, {opacity:1, top:135, delay:0.2, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mMusRollD ul").eq(0).find("li").eq(0), 0.8, {css:{top:0, opacity:1}, delay:0.6,ease:Power3.easeInOut});
	TweenMax.to(jQuery(".mMusRollD ul").eq(0).find("li").eq(1), 0.8, {css:{top:0, opacity:1}, delay:0.8, ease:Power3.easeInOut});
	TweenMax.to(jQuery(".mMusRollD ul").eq(0).find("li").eq(2), 0.8, {css:{top:0, opacity:1}, delay:1, ease:Power3.easeInOut});
	TweenMax.to(jQuery(".mMusRollD ul").eq(0).find("li").eq(3), 0.8, {css:{top:0, opacity:1}, delay:1.2, ease:Power3.easeInOut});
	if(listRollMax >= 1){
		TweenMax.to(jQuery(".mMuseumD .rollbtnA .leftBt"), .5,{opacity:1, delay:1.5, ease:Power3.easeOut});
		TweenMax.to(jQuery(".mMuseumD .rollbtnA .rightBt"), .5,{opacity:1, delay:1.5, ease:Power3.easeOut});
	}else{
		jQuery(".mMuseumD .rollbtnA").hide();
	}
	TweenMax.to(jQuery(".mMuseumD .BuBtnA"), .8,{opacity:1, delay:1.7, ease:Power3.easeOut});
	TweenMax.to(jQuery(".mMuseumD .mScrollBtA"), 1,{opacity:1, delay:1.8, ease:Power3.easeOut});
}
 
