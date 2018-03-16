/* 
	project : Bank of Korea Museum
	author : lee sung jin
	date : 2013.05
*/

$(document).ready(function(){
	mainVisual();
	mainVisualM();
	mainBox();	
	
	$('#skipNavi a').attr('href','#mainBox');

});

function mainVisual() {
	
	var visList = $('#visualArea ul').children('li');
	visList.each(function() {
		init($(this).attr('id'));
	});
	visAnim(visList.first().addClass('on').attr('id'));	
	$('#mainVisual button').animate({'width' : '12%'},1200,'easeInOutExpo');
	$('#btnPrev').click(function() {
		var tar = visList.filter('.on').prev();
		init(visList.filter('.on').attr('id'));
		if ( tar.size() > 0 ) { tar.addClass('on').siblings().removeClass(); visAnim(tar.attr('id')); }
		else  { visList.last().addClass('on').siblings().removeClass(); visAnim(visList.last().attr('id')); }		
	});
	$('#btnNext').click(function() {
		var tar = visList.filter('.on').next();
		init(visList.filter('.on').attr('id'));
		if ( tar.size() > 0 ) { tar.addClass('on').siblings().removeClass(); visAnim(tar.attr('id')); }
		else  { visList.first().addClass('on').siblings().removeClass(); visAnim(visList.first().attr('id')); }
	});
	$('#page a').click(function(e) {
		e.preventDefault();
		var tar = visList.eq($(this).index());
		init(visList.filter('.on').attr('id'));
		tar.addClass('on').siblings().removeClass(); visAnim(tar.attr('id'));
	});
	
	function visAnim(obj) {
		var bok = '#' + obj;
		var effect = 'easeOutQuad';
		switch (bok) {
			case '#vis01' :
				$('#visualArea').scrollTo($(bok), 700, { onAfter : function() {
					$(bok).animate({'background-size' : 685},900);
					$(bok).children('.bank').animate({'top' : 129},900, effect);
					$(bok).children('.wood').animate({'bottom' : 37},900, effect);
					$(bok).children('.coin').animate({'bottom' : 78},900, effect);
					$(bok).children('.leaf01').animate({'top' : 51, 'right' : 68},1000, effect);
					$(bok).children('.leaf02').animate({'top' : 42, 'right' : 197},1200, effect);
					$(bok).children('h1').animate({'left' : 30},900, effect);
					$(bok).children('p').fadeIn();
					$(bok).animate({'background-position-x' : '100%'},9000,'linear');
				}, easing:'easeInOutExpo'});
				break;
			case '#vis02' :
				$('#visualArea').scrollTo($(bok), 700, { onAfter : function() {
					$(bok).animate({'background-size' : 544},900, effect);
					$(bok).children('.coin01').animate({'top' : 84},900, effect);
					$(bok).children('.coin02').animate({'bottom' : 37},900, effect);
					$(bok).children('h1').animate({'left' : 30},900, effect);
					$(bok).children('p').fadeIn();
				}, easing:'easeInOutExpo'});
				break;
			case '#vis03' :
				$('#visualArea').scrollTo($(bok), 700, { onAfter : function() {
					$(bok).animate({'background-size' : 685},900, effect);
					$(bok).children('.money01').animate({'top' : 103},900, effect);
					$(bok).children('.money02').animate({'top' : 110},900, effect);
					$(bok).children('.money03').animate({'top' : 181},900, effect);
					$(bok).children('.money04').animate({'top' : 223},700, effect);
					$(bok).children('.money05').animate({'top' : 140},800, effect);
					$(bok).children('.money06').animate({'top' : 248},900, effect);
					$(bok).children('.money07').animate({'top' : 110},1000, effect);
					$(bok).children('.money08').animate({'top' : 227},900, effect);
					$(bok).children('.money09').animate({'top' : 158},900, effect);
					$(bok).children('h1').animate({'left' : 30},900, effect);
					$(bok).children('p').fadeIn();
				}, easing:'easeInOutExpo'});
				break;
		}
		$('#page a').eq($(bok).index()).addClass('on').siblings().removeClass();
	}
	
	function init(obj) {
		var bok = '#' + obj;
		switch (bok) {
			case '#vis01' :
				$(bok).stop(true,true).animate({'background-position-x' : '0'},0);
				$(bok).children('.bank').animate({'top' : -1000},700);
				$(bok).children('.wood').animate({'bottom' : -500},700);
				$(bok).children('.coin').animate({'bottom' : -500},700);
				$(bok).children('.leaf01').animate({'top' : -400, 'right' : -406},700);
				$(bok).children('.leaf02').animate({'top' : -400, 'right' : -379},700);
				$(bok).children('h1').animate({'left' : 350},700);
				$(bok).children('p').fadeOut();
				break;
			case '#vis02' :
				$(bok).children('.coin01').animate({'top' : -600},700);
				$(bok).children('.coin02').animate({'bottom' : -500},700);
				$(bok).children('h1').animate({'left' : 350},700);
				$(bok).children('p').fadeOut();
				break;
			case '#vis03' :
				$(bok).children('span').each(function() {
					$(this).animate({'top' : -500},700,'easeOutQuad');
				});
				$(bok).children('h1').animate({'left' : 450},700);
				$(bok).children('p').fadeOut();
				break;
		}
		$(bok).animate({'background-size' : 0},100);
	}
}

function mainVisualM() {
	$('#mainVisualM ul').bxSlider({
	    maxSlides: 1,
	    nextSelector: '.button.btnNext',
	    prevSelector: '.button.btnPrev',
	    pagerSelector : '.page'
	    //adaptiveHeight : true
	});
	$('#mainVisualM').mouseenter(function() {
		$('.button').fadeIn();
	});
	$('#mainVisualM').mouseleave(function() {
		$('.button').fadeOut();
	});
	
}

function mainBox() {
	$('#boxBanner ul').bxSlider({
		auto : true,
		autoStart : false,
		autoHover : true,
		autoDelay : 1000,
		autoControls : true,
		autoControlsCombine : true,
		autoControlsSelector : '.btnPlay',
	    maxSlides: 1,
	    nextSelector: '.btnNavi.next',
	    prevSelector: '.btnNavi.prev',
	    pagerSelector : '.btnPage'
	});
	
	$('#boxBanner ul li a').focus(function() {
		$('.btnPage').eq($(this).parent().index()).trigger('click');
	});

	$('.imgArea a').click(function(e) {
		e.preventDefault();
		var mLayer = $($(this).attr('href'));
		$('#mainBox').animate({'marginTop' : mLayer.height()},800,'easeInOutExpo', function() {
			mLayer.css('top',- mLayer.height());
			mLayer.fadeIn().siblings('.boxLayer').hide();
		});
	});
	$('.boxLayer button').click(function() {
		$(this).parent('.boxLayer').fadeOut('slow',function() {
			$('#mainBox').animate({'marginTop': 0},700,'easeOutQuad');
		});
	});
	
	
	
}
