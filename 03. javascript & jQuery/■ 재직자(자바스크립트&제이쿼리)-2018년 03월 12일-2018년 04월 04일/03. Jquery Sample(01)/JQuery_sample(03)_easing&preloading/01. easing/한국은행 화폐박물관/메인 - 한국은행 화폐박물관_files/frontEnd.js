/* 
	project : Bank of Korea Museum
	author : lee sung jin
	date : 2013.05
*/

$(function(){
	
	$(window).resize(function() {
		chkWidth();
	});
	responsive();
	gnbCtl();
	popLayer();
	pageUtil();
	boardUtil();
	setStyle();
	displayUtil();
	tabUtil();
	imgSlide();
	openVR();
	
	if($.browser.msie && $.browser.version=="6.0") {
		$.ifixpng('/static/images/common/pixel.gif'); 
		$('#visualArea li, #visualArea span, #visualArea h1').ifixpng();
		$('#box3d a img, .imgArea h1 img, #boxPlace img, #boxDisplay img').ifixpng();
	}
	
});

function chkWidth() {
	var wType;
	var wid = $(window).width();
	if ( wid >= 980 ) { wType = 'deskTop'; $('#subMenuWrap').show(); }
	else if ( wid > 700 && wid < 980 ) { wType = 'tablet'; $('#subMenuWrap').show(); }
	else { wType = 'mobile'; $('#subMenuWrap').hide();  }	
	$('body').attr('id',wType);
}

// responsive control
function responsive() { 
	chkWidth();
	
	if ( Modernizr.touch ) {
			setTimeout(function(){ if (window.pageYOffset == 0) { window.scrollTo(0,1); } }, 50); 
	}	
	if ( Modernizr.audio ) {
		$('#gnb').clone().attr('id','mGnb').appendTo('body');
		$('#mGnb a, h2, h3, .titInfo, #subMenu a, #footLink a, .titAboutHead em, .titAboutHead strong, .tabStep li, .tabStep li a, .titBox p, .titPlan, #regNav li a, .btnArea a, .btnArea button, .boxReplyWrite p a, .infoTab ul li a').each(function() {
			if ( $(this).children('img').size() > 0 ) {
				$(this).append('<span class=swapTxt>' + $(this).children().attr('alt') + '</span>');
				$(this).children('img').addClass('swapImg');
			}
		});
		$('.btnEnglish').clone().appendTo('#header');
	}
}

// data hide for mobile
function hideData(obj) {
	var target = $('.dataList');
	var dataHead = target.find('thead th');
	var dataBody = target.find('tbody tr');
	var hideName = ['첨부파일','작성일','조회'];
	var indexNum = [];
	var i;
	dataHead.each(function() {
		for ( i = 0; i < hideName.length; i++) {
			if ( $(this).text() == hideName[i] || $(this).children('img').attr('alt') == hideName[i] ) {
				$(this).addClass('hideData');
				indexNum.push($('th.hideData').index());
			}
		}
	});
	dataBody.each(function() {
		for ( i = 0; i < indexNum.length; i++) {
			$(this).find('td').eq(indexNum[i]).addClass('hideData');
		}
	});
	$('.hideData').hide();
}

function addCellHeader(table) {
	if (!table) { return false; }
	var trs = table.getElementsByTagName('tr');
	var trsChild;
	var grid = {};
	var cells;
	for (var i = 0, cntI = trs.length; i < cntI; i++) {
		if (!grid[i]) { grid[i] = {}; }
		trsChild = trs.item(i).childNodes;
		cells = 0;
		for (var j = 0, cntJ = trsChild.length; j < cntJ; j++) {
			if (trsChild[j].nodeType == 1) { grid[i][cells++] = trsChild[j]; }
		}
	}
	var cellHeader = '';
	for (row in grid) {
		if (row == 0) { continue; }
		for (cell in grid[row]) {
			if (cell == 0) { continue; }
			cellHeader = grid[0][cell].innerHTML + ' - ' + grid[row][0].innerHTML;
			grid[row][cell].setAttribute('data-cell-header', cellHeader);
		}
	}
}

// location
function locationSet() {
	var gnbTxt = $('#titCon h2 img').attr('alt');
	var curTxt = $('#location span.current').text();	
	$('.topDepth').each(function() {
		if ( $(this).children('img').attr('alt') == gnbTxt ) {
			changeSrc($(this).addClass('on'));
		}
	});
	$('#subMenu a').each(function() {
		if ( $(this).children('img').attr('alt') == curTxt ) {
			changeSrc($(this).addClass('curTxt'));
		}
		if ($(this).children('img').attr('alt') == curTxt && $(this).parents('.snbSub').size() > 0) {
			$(this).parents('.snbSub').addClass('curTxtSub');
		}
	});
}

// gnb
function gnbCtl(obj) {
	locationSet();
	
	$('#gnb .topDepth').bind('click focus', function(e) {
		e.preventDefault();
		$('#bgGnb').slideDown(200, 'easeOutQuart', function() {
			$('#gnb .gnbSub').show();
		});
	});
	$('#headerWrap').bind('mouseleave', function() {
		$('#gnb .gnbSub').hide(100,function() {
			$('#bgGnb').slideUp(200);	
		});
		changeSrc($('#gnb a').not('.on'),'off');
	});
	$('*:not("#gnb a")').bind('focus', function() {
		$('#gnb .gnbSub').hide();
		$('#bgGnb').hide();	
	});
	
	$('#mGnb a.topDepth').on('click', function(e) {
		e.preventDefault();
		$(this).next('.gnbSub').slideToggle(400,'easeOutQuad');
	});		
		
	// gnb
	$('#gnb a').bind('focus mouseover', function() {
		changeSrc($('#gnb a').not('.on'),'off');
		changeSrc($(this));	
	});
	
	// submenu
	if ( $('.curTxtSub').size() > 0 ) {
		$('.curTxtSub').show();
		changeSrc($('.curTxtSub').prev().addClass('curTxt'));
	}
	$('#subMenu ul li a').not('.snbSub a').not('.curTxt').bind('focus mouseover', function() {
		if ( $(this).next('.snbSub').size() > 0 ) {
			$(this).addClass('on').next('ul').show();
		}
		else {
			$('.snbSub').not('.curTxtSub').hide();
		}
		changeSrc($('#subMenu a').not('.curTxt'),'off');
		changeSrc($(this));
	});
	$('#subMenuWrap').bind('mouseleave', function() {
		$('.snbSub').not('.curTxtSub').hide();
		changeSrc($('#subMenu a').not('.curTxt'),'off');	
	});
	
	$('#btnGnb').click(function() {
		$('#mGnb').animate({'right' : '0'}, 300, function() {
			$('<button type="button" id="closeGnb">CLOSE</button>').appendTo($('body'));
			$('#closeGnb').fadeIn().click(function() {		
				$(this).fadeOut();
				$('#mGnb').animate({'right' : -100 + '%'}, 300,'easeInExpo' );
			});
		});	
	});	
	
	$('#mobile #titCon h2').click(function() {
		$('#subMenuWrap').slideToggle('300','easeInQuad');
	});
			
}


function popLayer() {
	
	$('#dpCon').on('click', '.openLayer', function(e) {
		e.preventDefault();
		//$('html').addClass('hideScroll');
		$('<div class=bgLayer></div>').appendTo('#content');
		var tar = '#vocieBox';
		$(window).on('resize', function() {
			$(tar).css({'width' : $('#contentWrap').width(), 'marginLeft' : -($(tar).width()/2), 'top' : $(window).height()/2 - $(tar).height(), 'height' : $(window).height() });
		});
		$(window).resize();
		$('#btnSns').hide();
		$('#footer').hide();
		$('.bgLayer').fadeTo('fast', 0.6, function() {
			$(tar).fadeIn();
			$('video,audio').mediaelementplayer();
			
		});

		$('.btnClosePop, .bgLayer').click(function() {
			$('.mejs-pause').trigger('click');
			$(window).off();
			$(tar).css('top' , -1000);
			$('#footer').show();
			$('#btnSns').show();
			$('.bgLayer').hide(500,function() {
				//$('html').removeClass('hideScroll');
				$('.bgLayer').remove();
				
			});
		});
	});
	
	$('.openCert').click(function(e) {
		e.preventDefault();
		$('html').addClass('hideScroll');
		$('<div class=bgLayer></div>').appendTo('#contentWrap');
		var tar = $(this).attr('href');
		$(window).on('resize', function() {
			$(tar).css('width', $('#contentWrap').width());
			$(tar).css('marginLeft',-($(tar).width()/2) );
			$(tar).css('height',$(window).height());
		});
		$(window).resize();
		$('#footer').hide();
		$('.bgLayer').fadeTo('fast', 0.6, function() {
			$(tar).fadeIn();
		});

		$('.btnClosePop, .bgLayer').click(function() {
			$(tar).fadeOut(500,function() {
				$('#footer').show();
				$('.bgLayer').hide(500,function() {
					$('html').removeClass('hideScroll');
					$('.bgLayer').remove();
				});
			});
		});
	});
	
	$('.openCertCmnt').click(function(e) {
		if(!chkInput(document.pForm.WRITER, "이름을 입력해 주시기 바랍니다."))	return false;
		if(!chkInput(document.pForm.PASSWD, "비밀번호를 입력해 주시기 바랍니다."))	return false;
		if(!isOnlyEng(document.pForm.PASSWD)) {
			alert("비밀번호는 숫자 또는 영문만 입력해 주시기 바랍니다.");
			document.pForm.PASSWD.focus();
			return false;
		}
		if(!chkInput(document.pForm.CONTENT, "내용을(를) 입력해 주시기 바랍니다."))	return false;
		e.preventDefault();
		$('html').addClass('hideScroll');
		$('<div class=bgLayer></div>').appendTo('#contentWrap');
		var tar = $(this).attr('href');
		$(window).on('resize', function() {
			$(tar).css('width', $('#contentWrap').width());
			$(tar).css('marginLeft',-($(tar).width()/2) );
			$(tar).css('height',$(window).height());
		});
		$(window).resize();
		$('#footer').hide();
		$('.bgLayer').fadeTo('fast', 0.6, function() {
			$(tar).fadeIn();
		});

		$('.btnClosePop, .bgLayer').click(function() {
			$(tar).fadeOut(500,function() {
				$('#footer').show();
				$('.bgLayer').hide(500,function() {
					$('html').removeClass('hideScroll');
					$('.bgLayer').remove();
				});
			});
		});
	});
	
}

function tabUtil() {
	$('.boxTab h2 a').click(function(e) {
		e.preventDefault();
		$('.boxTab article div').fadeOut();
		$($(this).attr('href')).children('div').fadeIn();
		$(this).addClass('on').parent().siblings().children().removeClass('on');
	});
	$('.boxTab h2:first').children('a').trigger('click');
			
	$('#srchNav li a').click(function(e) {
		e.preventDefault();
		$('.tabCon').hide();
		$($(this).attr('href')).show();
		changeSrc($('#srchNav li a'),'off');
		changeSrc($(this));
	});
	$('#srchNav li:first').children('a').trigger('click');
	
	$('#tabNavi a').click(function(e) {
		e.preventDefault();
		$('.tabCon').hide();
		$($(this).attr('href')).show();
		if ( $('.areaImgList').size() > 0 || $('.imgProduct').size() > 0 ) { imgSlide(); }
		$(this).addClass('on').parent().siblings().children().removeClass();
	});
	$('#tabNavi li:first').children('a').trigger('click');
	
	$('#boxBoard h1 a').click(function(e) {
		e.preventDefault();
		$('#boxBoard div').fadeOut();
		$(this).parent().next().fadeIn();
		changeSrc($('#boxBoard h1 a'),'off');
		changeSrc($(this));
	});
	$('#boxBoard h1:first').children('a').trigger('click');

}

function imgSlide() {
	if ( $('.areaImgList').size() > 0 ) {
		$(".areaImgList").carouFredSel({
			responsive:true,
			circular: true,
			infinite: false,
			auto 	: false,
			items	: {
				width : 64,
				visible : {
					max : 6
				}
			},
			scroll : {
				items : 1,
				easing : 'linear',
				duration : 300
			},
			swipe : {
				items : 1,
				easing : 'quadratic',
				duration : 300
			},
			prev	: '.prev',
			next	: '.next'
		});
		$('.areaImgList a').each(function() {
			$('<span></span>').appendTo($(this));
			$('.areaImgList a span').fadeTo('fast','0.5');
		});
		$('.areaImgList a').click(function(e) {
			e.preventDefault();
			$('#imgLarge').empty();
			$('.areaImgList a').removeClass().children('span').show();
			$(this).children('img').clone().appendTo('#imgLarge');
			$(this).addClass('on').children('span').hide();
		});
		$('.areaImgList li:first a').trigger('click');
	}
	
	if ( $('.imgProduct ul').size() > 0 ) {
		$(".imgProduct ul").carouFredSel({
			responsive:true,
			circular: false,
			infinite: false,
			auto 	: false,
			items	: {
				width : 113,
				visible : {
					max : 5
				}
			},
			scroll : {
				items : 1,
				easing : 'linear',
				duration : 300
			},
			swipe : {
				items : 1,
				easing : 'quadratic',
				duration : 300
			},
			prev	: '.prev',
			next	: '.next'
		});
		$('.imgProduct li:first a').trigger('click');
	}

}

function displayUtil() {
	$('#dpNav li a').click(function(e) {
		e.preventDefault();
		$('.tabCon').hide();
		$($(this).attr('href')).show();
		changeSrc($('#dpNav li a'),'off');
		changeSrc($(this));
		
		$('.viewMap').click(function(){
			$('#dpTit h1').empty();
			$('#dpCon').empty();	
		});
		
		$('.viewList').click(function(){
			$('#dpTit h1').empty();
			$('#dpCon').empty();	
		});
	});
	
	$('#dpNav li:first').children('a').trigger('click');
	
	var mapL = $('.largeMap .area li a');
	var mapS = $('.smallMap .area li a:not(.none)');
	var vrLink = $('.imgVr ul li a:not(.none)');
	
	mapL.bind('focus mouseenter', function() {
		$(this).children('.num').hide();
		$(this).children('em').show();	
	});
	mapL.bind('mouseleave blur', function() {
		if ( $(this).not('.on') ) {
			$(this).children('em').hide();
			$(this).children('.num').show();	
		}
	});
	mapL.not('.none').on('click', function(e) {
		e.preventDefault();
		$(this).children('.info').fadeOut();
		$(this).addClass('on').parent().siblings().children('a').removeClass();
		$('.largeMap').animate({'marginTop':20 + '%', 'marginLeft' : 40 + '%'},300, 'easeInExpo', function() {
			$('#dpMap').animate({'height' : 294},300, function() {
				$('.imgVr').fadeIn().animate({'left' : 23},300,'easeOutQuint');
				timer = setInterval(function() {
					$("#dpMap .imgVr ul li a").toggleClass('blink');
				},1000);
			});
			$(this).css('margin',0).removeClass('largeMap').addClass('smallMap');
		});
		$($(this).attr('href')).show().siblings().hide();
	});
	
	mapS.on('click', function(e) {
		$($(this).attr('href')).show().siblings().hide();
	});
	
	vrLink.bind('focus mouseenter', function() {
		vrLink.children().hide();
		$(this).children().fadeIn();
	});
	
	vrLink.bind('click',function(e) {
		e.preventDefault();
		var dpCon = $(this).attr('href') + ' #boxDisplay';
		var dpTit = $('.area li a.on>em').text();
		$('#dpTit h1').text(dpTit);	
		$('#dpCon').load(dpCon);	
		$(this).addClass('on').parent().siblings().children().removeClass('on');
	});
	
	if ($('#dpList').size() > 0) { $('.dpListInfo').animate({'right' : 0},500,'easeOutQuad'); }
	
	$('#dpList h1 a').not('.none').click(function(e) {
		e.preventDefault();
		$('.depth02').find('ul').remove();
		$('.dpListInfo').fadeTo('fast',0.7).animate({'right' : -120+'%'},500, 'easeInExpo', function() {
			$(this).hide();
		});
		$(this).parent().next().clone().appendTo('.depth02');
		$(this).addClass('on').parent().siblings().children().removeClass();		
	});
	
	$('.depth02').on('click', 'a',  function(e) {
		e.preventDefault();
		var dpCon = $(this).attr('href') + ' #boxDisplay';
		var dpTit = $('#dpList h1 a.on').text();
		$('#dpTit h1').text(dpTit);
		$('#dpCon').load(dpCon);	
		$(this).addClass('on').parent().siblings().children().removeClass();
	});

}

function pageUtil() {
	var settings = {
			button      : '#toTop',
			text        : '컨텐츠 상단으로 이동',
			min         : 100,
			fadeIn      : 400,
			fadeOut     : 400,
			scrollSpeed : 800,
			easingType  : 'easeInOutExpo'
		},
		oldiOS     = false,
		oldAndroid = false;

	if( /(iPhone|iPod|iPad)\sOS\s[0-4][_\d]+/i.test(navigator.userAgent) ) { oldiOS = true; }
	if( /Android\s+([0-2][\.\d]+)/i.test(navigator.userAgent) ) { oldAndroid = true; }
	$('body').append('<a href="#" id="' + settings.button.substring(1) + '" title="' + settings.text + '">' + settings.text + '</a>');
	$( settings.button ).on('click', function( e ){
		$('html, body').animate({ scrollTop : 0 }, settings.scrollSpeed, settings.easingType );
		e.preventDefault();				
	})
	.on('mouseenter', function() {
		$( settings.button ).addClass('hover');
	})
	.on('mouseleave', function() {
		$( settings.button ).removeClass('hover');
	});

	$(window).scroll(function() {
		var position = $(window).scrollTop();
		if( oldiOS || oldAndroid ) {
			$( settings.button ).css({
				'position' : 'absolute',
				'top'      : position + $(window).height()
			});
		}
		if ( position > settings.min ) { $( settings.button ).fadeIn( settings.fadeIn ); $('#btnGnb').addClass('fix'); }
		else { $( settings.button ).fadeOut( settings.fadeOut ); $('#btnGnb').removeClass('fix'); }
	});
	
	$('#content').jfontsize({
	    btnMinusClasseId: '.smallFont',
	    btnDefaultClasseId: '.btnReset',
	    btnPlusClasseId: '.bigFont',
	    btnMinusMaxHits: 2,
	    btnPlusMaxHits: 2,
	    sizeChange: 1
	});

  $('.btnViewer a').click(function(e) {
	  e.preventDefault();
	  $('#viewerBox').toggle();
  });
  
}

function boardUtil() {
	//if ($('#btnPrint').size() > 0) {	$('#btnPrint').printPreview(); }
	$('#btnPrint').click(function() {
		window.print();
	});
	/*
	$('.inpSrch').bind('focus', function() {
		$(this).animate({'width' : 200},300);
	});
	$('.inpSrch').bind('blur', function() {
		$(this).animate({'width' : 109},300);
	});
	*/
	if ($('.questionList').size() > 0) { 
		$('.questionList dd').hide();
		$('.questionList dt button').click(function() {
			$(this).parent().next().slideToggle(100);
		});
	}
	
	if ($('.viewCms img').size() > 0) {
		$('.viewCms img').each(function() {
			$(this)
			.attr('alt',$(this).parents('.dataView').find('.tit').text())
			.removeAttr('title');
		});
	}
}


// dom css control
function setStyle() {
	$('.dataList tbody tr').hover(
		function() { $(this).addClass('on'); },
		function() { $(this).removeClass('on'); }
	);
	
	if ($("input.inpFile").size() > 0) {
		$("input.inpFile").filestyle({ 
		  image: "static/images/common/btn/btnFile.gif",
		  imageheight : 20,
		  imagewidth : 57,
		  width : 250
	    });
	}
	if ($("select.txtSel").size() > 0) {
		$("select.txtSel").selectBox();
		$('a.selectBox').attr('tabindex',0);
	}
	$('.regDateList tr').each(function() {
		$(this).children('td:last').addClass('last');
	});
}

//common

function openVR(){
	  $('.3dLink').click(function(e) {
		  e.preventDefault();		   	  
		  var url = $(this).attr('href'); 
		  var width=1280;
		  var height=760;
		  var posx=(screen.width-width)/2;
		  var posy=(screen.height-height)/2;
		  var position="width="+width+",height="+height+",top="+posy+",left="+posx+",resizable=0,status=0,scrollbars=no,toolbar=no,location=no,directories=no";
		  window.open(url,"VR",position);
		    
	  });
}

function changeSrc(obj, fnc){
	var text = ['On.', 'Off.'];
	if(fnc){
		text = ['Off.', 'On.'];
	}
	var target = $('img', obj);
	if(target.size() > 0){
		target.each(function(){
			$(this).attr('src', $(this).attr('src').replace(text[1], text[0]));
		});
	}
}

