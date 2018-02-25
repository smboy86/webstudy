var front = {

	winW : null,
	winH : null,
	browser : null,
	sc : null,

	init : function(){

		front.browser = navigator.userAgent;

		front.common.init();
		front.main.init();
		front.contents.init();
		front.swipe.init();

	},

	common : {

		colorClass : ['every1', 'sports', 'sports2', 'drama', 'music' ],

		init : function(){

			var common = front.common;

			common.gnb.init();
			common.allmenu.init();
			common.search.init();
			common.channelPop.init();

			// front.winW = $(window).width();
			// front.winH = $(window).height();

			$(window).resize(function(){
				front.winW = $(window).width();
				front.winH = $(window).height();
				console.log(front.winH);

				front.common.layerPopup.resize();

			});

			$(window).trigger('resize');

			$(window).scroll(function(){
				front.sc = $(document).scrollTop();

				if($('footer').length > 0){
					if(front.sc > 10){
						if(front.sc < $('footer').offset().top - $(window).height()){
							$('footer .channel-box').addClass('fix')
							$('footer .btn-top').addClass('fix')
						}else{
							$('footer .channel-box').removeClass('fix');
							$('footer .btn-top').removeClass('fix')
						}
					}else{
						$('footer .channel-box').removeClass('fix');
						$('footer .btn-top').removeClass('fix')
					}
				}
			});

			//위로가기 버튼
			$('footer .btn-top').click(function(){
				front.common.moveScroll(0, 750);
				return false;
			});

			//레이어팝업 닫기
			$('.layer-popup-wrap').each(function(){
				$(this).find('.layer-popup > .btn-close').click(function(){
					$(this).parent().parent().hide();
					return false;
				});
				$(this).find('.layer-con .btn-close').click(function(){
					$(this).parent().parent().parent().hide();
					return false;
				});
			});

		},

		layerPopup : {

			resize : function(){

				if(front.winH < 850){
					$('.layer-popup-wrap .layer-popup').addClass('is-small');
				}else{
					$('.layer-popup-wrap .layer-popup').removeClass('is-small');
				}

			}

		},

		moveScroll : function(tgY, speed){

			if(speed == null || speed == 'undefind') speed = 1000;
			$('html, body').stop().animate({'scrollTop':tgY}, {queue:false, duration:speed, easing:'easeOutCubic'});

		},

		gnb : {

			activeNum : -1,
			item : null,

			init : function(){

				var gnb = front.common.gnb;

				var $gnb = $('#gnb'),
					$item = $gnb.find('nav a'),
					$bar = $gnb.find('.bar'),
					_len = $item.length,
					_delay;

				gnb.item = $item;

				$item.each(function(idx){

					var _tgX, _tgW;
					
					if($(this).hasClass('active')){
						gnb.activeNum = idx;
					}

					$(this).on('mouseover', function(e){

						clearTimeout(_delay);

						_tgX = parseInt($(this).offset().left - $item.eq(0).offset().left);
						_tgW = $(this).width();

						barActive(_tgX, _tgW, 1);

					}).on('mouseleave', function(e){

						clearTimeout(_delay);

						_tgX = parseInt($item.eq(gnb.activeNum).offset().left - $item.eq(0).offset().left);
						_tgW = $item.eq(gnb.activeNum).width();

						_delay = setTimeout(function(){
							if(gnb.activeNum < 0) barActive(-200, _tgW, 0);
							else barActive(_tgX, _tgW, 1);
						}, 5000);

					})

				});

				function barActive(_x, _w, _alpha){
					$bar.stop().animate({ 'left': _x, 'width': _w, 'opacity': _alpha }, { queue:false, duration:750, easing:'easeOutCubic' });
				}

				setTimeout(function(){
					$item.eq(gnb.activeNum).trigger( gnb.activeNum < 0 ? 'mouseleave' : 'mouseover' );
				}, 1000);

			},

			set : function(){
				front.common.gnb.item.each(function(idx){
					if($(this).hasClass('active')){
						front.common.gnb.activeNum = idx;
					}
				});
				$('#gnb nav a').eq(front.common.gnb.activeNum).trigger('mouseover');
			}

		},

		allmenu : {

			init : function(){

				// 전체메뉴

				var $allmenuBox = $('.allmenu-box'),
					_active = true,
					_baseH = $('header').height(),
					_tgH = $allmenuBox.height() + parseInt($allmenuBox.css('padding-top')) + parseInt($allmenuBox.css('padding-bottom')) + _baseH;
		
				// $allmenuBox.hide();
				$('.btn-allmenu').click(function(e){

					e.preventDefault();
					
					if(!_active) return;

					_active = false;

					$(this).toggleClass('active');
					$('header').toggleClass('open');

					if($(this).hasClass('active')){

						$('#gnb').fadeOut(200);
						$('header').height(_tgH);
						// $allmenuBox.fadeIn(500);
						$('#dimd').fadeIn(500).addClass('is-use-gnb');

						setTimeout(function(){
							_active = true;
						}, 500)

					}else{

						$('#gnb').delay(200).fadeIn(450);
						$('header').height(_baseH);
						// $allmenuBox.fadeOut(500);
						$('#dimd').fadeOut(300);
						setTimeout(function(){
							$('#dimd').removeClass('is-use-gnb');
							_active = true;
						}, 500)

					}

				})

			}
		},

		search : {

			init : function(){

				var $schBox = $('.search-box');	

				$schBox.each(function(){
					var _this = $(this),
						_delayAction,
						_resetBtnFocus = false;

					// 검색어 input
					$(this).find('.wording').on('focus', function(){
						$(this).parent().parent().addClass('active');
					}).on('focusout', function(e){

						_delayAction = setTimeout(function(){
							_this.removeClass('active');
							if(_this.find('.wording').val() == ' ') _this.find('.wording').val('');
						}, 100);

					});

					// 검색어 리셋버튼
					$(this).find('.btn-reset').click(function(){
						clearTimeout(_delayAction);
						$(this).parent().siblings('.wording').val(' ').focus();
						return false;
					})
				});

			}

		},

		channelPop : {

			box : null,
			oldNum : -1,
			activeNum : 0,
			rootSC : 0,
			isSC : 0,
			menu : null,

			init : function(){

				var channelPop = front.common.channelPop;

				if($('#chnnelIntro').length == 0) return;

				channelPop.box = $('#chnnelIntro');

				//이미지 스와이프
				var _imgSwiperItem = [];
				var _imgSwiperBase = new Swiper('#chnnelIntro .top-visual .visual', {
					loop: false,
					mode: 'vertical',
					speed: 750,
					simulateTouch: false
				});

				for(var i=1; i<=5; i++){
					var _listLen = $('#chnnelIntro .top-visual .visual .visual-item.n0' + i).find('li').length;
					_imgSwiper = new Swiper( '#chnnelIntro .top-visual .visual .visual-item.n0' + i, {
						loop: (_listLen > 1) ? true : false,
						pagination: '#chnnelIntro .top-visual .visual .visual-item .swiper-pagination.n0' + i,
						paginationClickable: true,
						speed: 500
					});
					_imgSwiperItem.push(_imgSwiper);
				}

				//채널PR 스와이프
				var _prSwiper = new Swiper('#chnnelIntro .channel-pr .swiper-container', {
					speed: 500,
					simulateTouch: false
				});

				//프로그램PR 스와이프
				var _programSwiper = new Swiper('#chnnelIntro .program-pr .swiper-container', {
					speed: 500,
					simulateTouch: false,
					resizeReInit: true,
					initialSlide: 0,
					calculateHeight: false,
					onSlideChangeStart: function(){
						front.common.channelPop.resize();
						// var _h = $('#chnnelIntro .program-pr .swiper-container .swiper-slide-active > div').height();
						// $('#chnnelIntro .program-pr .swiper-container, #chnnelIntro .program-pr .swiper-container .swiper-slide').height(_h);
					},
					onSlideChangeEnd: function(){
						front.common.channelPop.resize();
						// var _h = $('#chnnelIntro .program-pr .swiper-container .swiper-slide-active > div').height();
						// $('#chnnelIntro .program-pr .swiper-container, #chnnelIntro .program-pr .swiper-container .swiper-slide').height(_h);
					}
				});				

				//드라마 이벤트 광고
				var _dramaAdSwiper = new Swiper('#chnnelIntro .program-pr .item .event-ad', {
					loop: true,
					pagination: '#chnnelIntro .program-pr .item .event-ad .swiper-pagination',
					paginationClickable: true
				});

				//프로그램PR 하단 메뉴 이동
				channelPop.box.find('.program-pr li .foot').each(function(idx){

					var _id;

					$(this).find('a').click(function(e){
						if($(this).hasClass('btn-prev')){
							_id = channelPop.activeNum - 1;
							if(_id < 0) _id = front.common.colorClass.length - 1;
						}else{
							_id = channelPop.activeNum + 1;
							if(_id > front.common.colorClass.length - 1) _id = 0;
						}

						channelPop.menu.eq(_id).trigger('click');
						return false;
					});
				});

				// 열기버튼
				$('footer .channel-box .menu > a').click(function(){
					// channelPop.activeNum = 0;
					// channelPop.box.find('> .inner').css('top', 0);
					// channelPop.open();
					return false;
				});
				$('footer .channel-box .menu li a').each(function(idx){
					$(this).click(function(){
						channelPop.activeNum = idx;
						channelPop.open();
						return false;
					});
				});

				// 닫기버튼
				channelPop.box.find('> .btn-close').click(function(){
					channelPop.isSC = $(window).scrollTop();
					channelPop.close();
					return false;
				});

				//채널소개 內 채널이동 버튼
				channelPop.menu = channelPop.box.find('.quick-menu a');
				channelPop.menu.each(function(idx){
					$(this).click(function(){
						//버튼 활성화
						channelPop.menu.removeClass('active');
						$(this).addClass('active');
						//채널별 클래스 설정
						channelPop.oldNum = channelPop.activeNum;
						channelPop.box.removeClass(front.common.colorClass[channelPop.activeNum]);

						channelPop.activeNum = idx;
						channelPop.box.addClass(front.common.colorClass[channelPop.activeNum]);
						//비주얼 설정
						_imgSwiperBase.swipeTo(channelPop.activeNum);
						channelPop.box.find('.top-visual .title li').removeClass('active');
						channelPop.box.find('.top-visual .title li').eq(channelPop.activeNum).addClass('active');
						//PR 설정
						_prSwiper.swipeTo(channelPop.activeNum);
						//프로그램 설정
						setTimeout(function(){
							_programSwiper.swipeTo(channelPop.activeNum, 100);
							front.common.channelPop.resize();
							// var _h = $('#chnnelIntro .program-pr .swiper-container .swiper-slide-active > div').height();
							// $('#chnnelIntro .program-pr .swiper-container, #chnnelIntro .program-pr .swiper-container .swiper-slide').height(_h);
						}, 100);

						//전체 스크롤 Top으로
						if($('#wrap').hasClass('invisible')){
							var _t = ($(window).scrollTop() > 800) ? 800 : 500;
							front.common.moveScroll(0, 0);
						}

						return false;
					});
				});

			},

			open : function(){

				var channelPop = front.common.channelPop;

				//푸터 채널 가림
				$('footer .channel-box').addClass('hidden');

				channelPop.menu.eq(channelPop.activeNum).trigger('click');

				//채널소개box 등장
				setTimeout(function(){

					channelPop.rootSC = $(window).scrollTop();
					channelPop.box.stop().animate({ 'top': 0 }, { queue: false, duration: 1000, easing: 'easeInOutExpo',
						complete: function(){
							$('#wrap').addClass('invisible');
							$(window).scrollTop(0);
							channelPop.box.addClass('active');
						}
					});
				}, ($('footer .channel-box').hasClass('fix')) ? 300 : 0 )

			},

			close : function(){
				
				var channelPop = front.common.channelPop;

				channelPop.box.find('> .inner').css('top', -channelPop.isSC);

				$('#wrap').removeClass('invisible');
				$(window).scrollTop(channelPop.rootSC);
				channelPop.box.removeClass('active');
				channelPop.box.stop().animate({ 'top': '100%' }, { queue: false, duration: 800, easing: 'easeInOutExpo', 
					complete: function(){
						$('footer .channel-box').removeClass('hidden');
						channelPop.box.attr('class', '');
						channelPop.box.find('> .inner').css('top', 0);
					}
				});
			},

			resize : function(){
				var _h = $('#chnnelIntro .program-pr .swiper-container .swiper-slide-active > div').height();
				$('#chnnelIntro .program-pr .swiper-container, #chnnelIntro .program-pr .swiper-container .swiper-slide').height(_h);

			}

		}

	},

	main : {

		visualSwipe : null,
		scheduleSwipe : null,

		init : function(){

			var main = front.main;

			if(!$('#wrap').hasClass('main')) return;

			// 핫클립 광고영역
			var hotclipAdSwipe = new Swiper('.ad-box', {
				loop: ($('.ad-box li').length > 1) ? true : false,
				pagination: '.ad-box .swiper-pagination',
				paginationClickable: true,
			});

			if($('.hotclip-box .ad-box').length > 0){

				if($('.ad-box li').length == 1){
					$('.ad-box .auto').hide();
					$('.ad-box .swiper-pagination').css('right', 20);
				}

				var $hotclipAdBox = $('.hotclip-box .ad-box'),
					$hotclipAdPlayBtn = $hotclipAdBox.find('.auto'),
					hotclipAdAuto;

				hotclipAdAuto = setInterval(hotclipAdRolling, 3000);

				$hotclipAdBox.on('mouseenter', function(){
					clearInterval(hotclipAdAuto);
				}).on('mouseleave', function(){
					if(!$hotclipAdPlayBtn.hasClass('stop')){
						hotclipAdAuto = setInterval(hotclipAdRolling, 3000);
					}
				})

				function hotclipAdRolling(){
					hotclipAdSwipe.swipeNext();
				}

				$hotclipAdPlayBtn.find('a').click(function(e){

					if($(this).hasClass('btn-play')){
						$hotclipAdPlayBtn.removeClass('stop');
					}else if($(this).hasClass('btn-pause')){
						$hotclipAdPlayBtn.addClass('stop');
					}
					
					return false;
				})
			}

			//편성표
			var scheduleSwipe = new Swiper('.main-schedule .chennel-box .swiper-container', {
				loop: true
			});

			main.scheduleSwipe = scheduleSwipe;

			$('.main-schedule .chennel-box .control a').each(function(idx){
				$(this).click(function(){
					if(idx == 0){
						scheduleSwipe.swipePrev();
					}else{
						scheduleSwipe.swipeNext();
					}
					return false;
				});
			});

			//상단 비주얼
			var visualItem = $('.main-visual .visual .swiper-wrapper li'),
				visualLen = visualItem.length,
				visualAuto,
				visualRollingTime = 3000,
				visualColorClass = front.common.colorClass;

			var visualSwipe = new Swiper('.main-visual .visual', {
				loop: true,
				slidesPerView: 3,
				speed: 500,
				// centeredSlides: true,
				pagination: '.main-visual .visual .swiper-pagination',
				paginationClickable: true,
				simulateTouch: false,
				onSlideChangeStart: function(){
					visualChennelColorSet();
					$('.main-visual .visual .swiper-pagination > *.swiper-active-switch').find('.bar').stop().css('width', 0).animate({ 'width': '100%' }, { queue:false, duration:visualRollingTime, easing:'linear' });
					$('.main-visual .visual .swiper-pagination > *:not(.swiper-active-switch)').find('.bar').stop().css('width', 0);
				},
				onSlideChangeEnd: function(e){
					// console.log('onSlideChangeEnd : ', e.activeIndex);
				}
			});

			main.visualSwipe = visualSwipe;

			$('.main-visual .visual .swiper-pagination > *').each(function(idx){
				$(this).append('<span class="bar"></span>');
				$('.main-visual .visual .swiper-pagination > *.swiper-active-switch').find('.bar').stop().css('width', 0).animate({ 'width': '100%' }, { queue:false, duration:visualRollingTime, easing:'linear' });
				$('.main-visual .visual .swiper-pagination > *:not(.swiper-active-switch)').find('.bar').stop().css('width', 0);
			});

			visualAuto = setInterval(visualRolling, visualRollingTime);
			visualChennelColorSet();

			$(window).resize(function(){
				visualTextResize();
			});

			visualTextResize();

			function visualTextResize(){
				var _w, _gap = 5,
					_ml = parseInt($('.main-visual .visual .swiper-wrapper li .info .box').css('margin-right'));

				$('.main-visual .visual .swiper-wrapper li .info').each(function(idx){
					_w = $(this).width() - $(this).find('.box').width() - _ml - _gap;
					$(this).find('.txt').width(_w);
				});
			}

			$('.main-visual .visual .swiper-wrapper').animate({'margin-left': '33.3%'}, { queue:false, duration: 2000, easing:'easeOutCubic'}); //리스트 등장

			$('.main-visual .visual .control a').each(function(idx){
				$(this).click(function(){
					if(idx == 0){
						if (visualSwipe.activeIndex == 2){
							if(front.browser.indexOf('MSIE 9.0') > 0){
								visualSwipe.swipeTo(visualLen-1, 0);
								visualSwipe.swipePrev();
							}else{
								visualSwipe.swipeTo(0);
								visualSwipe.swipePrev();
							}
						}else{
							visualSwipe.swipePrev();
						}
					}else{
						visualSwipe.swipeNext();
					}
					return false;
				});
			});

			$('.main-visual .visual .move-btn .auto a').each(function(idx){
				$(this).click(function(){
					if(idx == 0){
						$(this).parent().removeClass('stop');
					}else{
						$(this).parent().addClass('stop');
					}
					return false;
				})
			});

			$('.main-visual').on('mouseenter', function(){
				clearTimeout(visualAuto);
			}).on('mouseleave', function(){
				clearTimeout(visualAuto);
				if(!$('.main-visual .visual .move-btn .auto').hasClass('stop')){
					visualAuto = setInterval(visualRolling, visualRollingTime);
				}
			});

			function visualRolling(){
				visualSwipe.swipeNext();
			}

			function visualChennelColorSet(){
				$('.main-visual .visual .swiper-pagination > *').each(function(idx){
					for(var i=0; i<visualColorClass.length; i++){
						if(visualItem.eq(idx).attr('class').indexOf(visualColorClass[i]) > 0) _class = visualColorClass[i];
					}
					$(this).addClass(_class);
				});
			}

		}

	},

	contents : {

		init : function(){

			// 고객센터 > faq
			var $faqList = $('.faq-list li');
			$faqList.find('dt').each(function(){
				$(this).click(function(){
					if($(this).parent().parent().hasClass('active')){
						$(this).parent().parent().removeClass('active');
						return false;
					}

					$(this).parent().parent().addClass('active').siblings().removeClass('active');
					return false;
				});
			});

			// 클립영상
			$('.program-sel-box > a').click(function(){
				if($(this).parent().hasClass('active')) $(this).parent().removeClass('active');
				else  $(this).parent().addClass('active');
				return false;
			})
			$('.program-sel-box').on('mouseleave', function(){
				$(this).removeClass('active');
			})

			// 회사소개 > 가입안내
			var baseStationTab = $('.base-station .base-station-tab'),
				baseStationTabLi = baseStationTab.find('ul > li'),
				baseStationListBox = $('.base-station-list');

			baseStationTabLi.on('click', function(){
				var _this = $(this),
				idx = _this.index();

				_this.addClass('active').siblings().removeClass('active');
				baseStationListBox.eq(idx).addClass('on').siblings().removeClass('on');

				return false;
			});

			//이벤트 > 이벤트 상세 > URL 공유하기
			$('.url-share').each(function(idx){

				var _in = false;
				// var _this = $(this);

				$(this).on('mouseenter', function(){
					_in = true;
				}); 
				$(this).on('mouseleave', function(){
					_in = false;
				});
				$(this).find('> a').click(function(){
					$(this).parent().toggleClass('active');
					return false;
				});
				$(this).find('.copy-box a').click(function(){
					$(this).parent().parent().toggleClass('active');
					return false;
				});
				$(this).on('focusout', function(){
					setTimeout(function(){
						if(!_in){
							urlCopyBoxClose();
						}
					}, 50);
				});
				$(this).on('focusin', function(){
				});
			});

			function urlCopyBoxClose(){
				$('.url-share').removeClass('active');
			}

			front.contents.scheduleList.reset();

		},

		scheduleList : {
			reset : function(){
				// 편성표
				$('.schedule-list li').each(function(idx){
					$(this).css('padding-right', $(this).find('.option').width() + 70) ;
				});
			}
		}
	},

	swipe : {
		
		init : function(){

			// 공통 스와이프
			if($('.swiper-container').length <= 0) return;

			var _subSideBnnSwiper = new Swiper('.program-banner', {
				loop: true,
				pagination: '.program-banner .swiper-pagination',
				paginationClickable: true,
				// simulateTouch: false
			});

			// 클립영상
			var _subSideBnnSwiper = new Swiper('.clip-list-box', {
				loop: false,
				pagination: '.clip-list-box .swiper-pagination',
				paginationClickable: true,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 32,
				// simulateTouch: false
			});

			//푸터 배너
			var _footBnnSwiper = new Swiper('footer .banner', {
				loop: true,
				mode: 'vertical'
			});
			$('footer .banner .control a').each(function(idx){
				$(this).click(function(){
					switch(idx){
						case 0: _footBnnSwiper.swipePrev(); break;
						case 1: _footBnnSwiper.swipeNext(); break;
					}
					return false;
				});
			});

		}

	}

}

$(function(){
	front.init();
})
