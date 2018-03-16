
function mainStart() {

    var mainT0, mainT1, mainT2, num = 0, isMain = true, mainTwArr = [], bgArr = ["", "blue", "kiwi"], mnNum = 0, mnArr = [[0, 0], [69, -21], [108, -33], [108, -33]], n = 0,
        pageArr = ["brand", "product", "news", "event"], corverTw, old, btnArr = ["250px", "425px"], bn = 1;


    mainT0 = new TimelineLite()
        .append([
            TweenMax.from($('#vs01'), .7 + Math.random(), {css: {top:'800px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs0txt'), 1 + Math.random(), {delay: .3, css: {top: '-350px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs03'), .7 + Math.random(), {css: {top: '900px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs04'), .7 + Math.random(), {delay:.2, css: {top:'800px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs05'), .7 + Math.random(), {css: {top: '800px'}, ease: Back.easeOut}),

            TweenMax.from($('#logo01'),.5 + Math.random(), {delay: .6, css: {top: '-100px'}, ease: Back.easeOut}),

            TweenMax.from($('#obj01'), .5, {delay: 0.3, css: {top: '130px'}, ease: Sine.easeOut}),
            TweenMax.from($('#obj02'), .5, {delay: 0.3, css: {top: '150px'}, ease: Sine.easeOut})

            //TweenMax.fromTo($('#story0Btn'), .5 + Math.random(), {css: {top: '250px', alpha: 0}}, {css: {top: btnArr[bn], alpha: 1}, ease: Back.easeOut})
        ])
    mainT0.pause();

    mainT1 = new TimelineLite()
        .append([
            TweenMax.from($('#vs11'), .7 + Math.random(), {css: {top:'800px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs1txt'), 1 + Math.random(), {delay: .3, css: {top: '-350px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs13'), .7 + Math.random(), {css: {top: '900px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs14'), .7 + Math.random(), {delay:.2, css: {top:'800px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs15'), .7 + Math.random(), {css: {top: '800px'}, ease: Back.easeOut}),

            TweenMax.from($('#logo11'),.5 + Math.random(), {delay: .6, css: {top: '-100px'}, ease: Back.easeOut}),

            TweenMax.from($('#obj11'), .5, {delay: 0.3, css: {top: '130px'}, ease: Sine.easeOut}),
            TweenMax.from($('#obj12'), .5, {delay: 0.3, css: {top: '150px'}, ease: Sine.easeOut})

            //TweenMax.fromTo($('#story1Btn'), .5 + Math.random(), {css: {top: '250px', alpha: 0}}, {css: {top: btnArr[bn], alpha: 1}, ease: Back.easeOut})
        ])
    mainT1.pause();

    mainT2 = new TimelineLite()
        .append([
            TweenMax.from($('#vs21'), .7 + Math.random(), {css: {top:'800px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs2txt'), 1 + Math.random(), {delay: .3, css: {top: '-350px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs23'), .7 + Math.random(), {css: {top: '900px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs24'), .7 + Math.random(), {delay:.2, css: {top:'800px'}, ease: Back.easeOut}),
            TweenMax.from($('#vs25'), .7 + Math.random(), {css: {top: '800px'}, ease: Back.easeOut}),

            TweenMax.from($('#logo21'),.5 + Math.random(), {delay: .6, css: {top: '-100px'}, ease: Back.easeOut}),

            TweenMax.from($('#obj21'), .5, {delay: 0.3, css: {top: '130px'}, ease: Sine.easeOut}),
            TweenMax.from($('#obj22'), .5, {delay: 0.3, css: {top: '150px'}, ease: Sine.easeOut})

            //TweenMax.fromTo($('#story2Btn'), .5 + Math.random(), {css: {top: '250px', alpha: 0}}, {css: {top: btnArr[bn], alpha: 1}, ease: Back.easeOut})
        ])
    mainT2.pause();

    mainTwArr[0] = mainT0;
    mainTwArr[1] = mainT1;
    mainTwArr[2] = mainT2;
    mainTwArr[0].play();
    TweenMax.fromTo($('#story0Btn'), .5 + Math.random(), {css: {top: '-250px'}}, {css: {top: btnArr[bn], alpha: 1}, ease: Back.easeOut})

    $('#story1Btn').hide();
    $('#story2Btn').hide();

    TweenMax.from($('#menu'), .5 + Math.random(), {css: {left: '100%'}, ease: Back.easeOut})
    TweenMax.from($('#mnBar'), 2, {delay:.5, css: {top:'200px', left:'-60px'}, ease:RoughEase.ease.config({strength:0.8, points:3, template:Circ.easeOut, randomize:false, clamp:true}) })

//=========================================================================================================================================================================

    var i;
    for (i = 0; i < 3; i++) {
        $("#story" + i + "Btn").on('click', function () {

            isMain = !isMain;

            if (isMain) {
                goMain();
            } else {
                goSub();
                document.getElementById("m"+1).src = "../common/img/menu_"+num+2+"_on.png";
                TweenMax.to($("#twoDep"),.1, {css:{display: "block"}})
                old = 0;
                mnNum = 1;
                document.getElementById("corver").style.display = "block";
                corverTw = new TweenMax.to($("#corver"), .4, {css: {alpha: '1'}, onComplete: corverOut})
            }

        })

        $("#logo" + i + "1").on('click', function () {

            

            if(num > 0){

				mainTwArr[num].pause();
				mainTwArr[num].reverse(0.4);
				TweenMax.to($("#story"+num+"Btn"), .5 + Math.random(), {css: {top: '-250px'}, ease: Back.easeOut})

				num = 0;

				document.getElementById("wrapper").className = bgArr[num];
				mainTwArr[num].restart();
				$("#story"+num+"Btn").show();
				TweenMax.to($("#story"+num+"Btn"), .5 + Math.random(), {css: {top: '425px'}, ease: Back.easeOut})

				document.getElementById("vs"+num+"txt").style.display = "block";

				TweenMax.to($('#menu'), .5, {css: {left: '100%'}, ease: Sine.easeOut, onComplete:menuMove})  

			}
			
			if(!isMain){
				isMain = true;
				goMain()
			}

        })


    }

	$("#m00").on('click', function () {


            if(num > 0){

				mainTwArr[num].pause();
				mainTwArr[num].reverse(0.4);
				TweenMax.to($("#story"+num+"Btn"), .5 + Math.random(), {css: {top: '-250px'}, ease: Back.easeOut})

				num = 0;

				document.getElementById("wrapper").className = bgArr[num];
				mainTwArr[num].restart();
				$("#story"+num+"Btn").show();
				TweenMax.to($("#story"+num+"Btn"), .5 + Math.random(), {css: {top: '425px'}, ease: Back.easeOut})

				document.getElementById("vs"+num+"txt").style.display = "block";

				TweenMax.to($('#menu'), .5, {css: {left: '100%'}, ease: Sine.easeOut, onComplete:menuMove})  

			}
			
			if(!isMain){
				isMain = true;
				goMain()
			}

        })



    function goMain(){

		if($('.famIn').css('display') == "block"){
			$(".famIn").toggle();
		}

        document.getElementById("corver").style.display = "block";
        corverTw = new TweenMax.to($("#corver"), .4, {css: {alpha: '1'}})
        TweenMax.to($("#mainCopy"),.6, {top:'200px'})

        document.getElementById("vs"+num+"txt").style.display = "block";

        TweenMax.to($("#container"), .5, {css:{marginTop:'-180px'}, ease:Sine.easeInOut})
        TweenMax.to($("#headerWrap"), .7, {css:{marginTop:'0px'}, ease:Sine.easeInOut})
        TweenMax.to($("#story"+num+"Btn"), .7, {css:{top:'425px'}, ease:Sine.easeInOut})
        TweenMax.to($("#arrowL"), .7, {delay:.9, css:{left:'0px'}, ease:Sine.easeInOut})
        TweenMax.to($("#arrowR"), .7, {delay:.9, css:{right:'0px'}, ease:Sine.easeInOut})

        document.getElementById("story"+num).src = "../common/img/btn_subUp"+num+"1.png";
        $("#story" + num + "Btn").show();
        //TweenMax.to($("#vs"+num+"txt"),.3, {css:{top:'130px'}})
		document.getElementById("vs"+num+"txt").style.display = "block";

        TweenMax.to($('#mnBar'), 2,  {css: {top:mnArr[0][0], left:mnArr[0][1]}, ease:RoughEase.ease.config({strength:0.8, points:3, template:Circ.easeOut, randomize:false, clamp:true})})

        if(mnNum == 0){
            TweenMax.to($('#menu'), 1, {css: {left: '50%'}, ease: Sine.easeInOut})
        }

        mnNum = 0;
        n = 0;
        old = 0;
        isMain = true;
        bn = 1;

        var h;
        for(h=0; h<4; h++){

            document.getElementById("m"+h).src = "http://www.o-juice.co.kr/common/img/menu_0"+(h+1)+".png";

        }

        TweenMax.to($("#twoDep"),.1, {css:{display: "none"}})
    }

    function goSub(){

		if($('.famIn').css('display') == "block"){
			$(".famIn").toggle();
		}

        TweenMax.to($("#mainCopy"),.6, {top:'580px'})

        TweenMax.to($("#container"), .5, {css:{marginTop:'-300px'}, ease:Sine.easeInOut})
        TweenMax.to($("#headerWrap"), .7, {css:{marginTop:'-250px'}, ease:Sine.easeInOut})
        TweenMax.to($("#story"+num+"Btn"), .7, {css:{top:'180px'}, ease:Sine.easeInOut})
        TweenMax.to($("#arrowL"), .7, {css:{left:'-90px'}, ease:Sine.easeInOut})
        TweenMax.to($("#arrowR"), .7, {css:{right:'-90px'}, ease:Sine.easeInOut})

        document.getElementById("story"+num).src = "http://www.o-juice.co.kr/common/img/btn_subDw"+num+"1.png";
        //TweenMax.to($("#vs"+num+"txt"),.6, {css:{top:'-350px'}, ease:Sine.easeInOut})
		document.getElementById("vs"+num+"txt").style.display = "none";

        TweenMax.to($('#mnBar'), 2,  {css: {top:mnArr[1][0], left:mnArr[1][1]}, ease:RoughEase.ease.config({strength:0.8, points:3, template:Circ.easeOut, randomize:false, clamp:true})})

    }


    $("#arrowR").on('click', function(){

		if($('.famIn').css('display') == "block"){
			$(".famIn").toggle();
		}

        mainTwArr[num].pause();
        mainTwArr[num].reverse(0.4);
        TweenMax.to($("#story"+num+"Btn"), .5 + Math.random(), {css: {top: '-250px'}, ease: Back.easeOut})
		document.getElementById("vs"+num+"txt").style.display = "none";

        num++;
        if(num > 2){num = 0}

        document.getElementById("wrapper").className = bgArr[num];
        mainTwArr[num].restart();
		$("#story"+num+"Btn").show();
        TweenMax.to($("#story"+num+"Btn"), .5 + Math.random(), {css: {top: '425px'}, ease: Back.easeOut})

        document.getElementById("vs"+num+"txt").style.display = "block";

        TweenMax.to($('#menu'), .5, {css: {left: '100%'}, ease: Sine.easeOut, onComplete:menuMove})

    })

    $("#arrowL").on('click', function(){

		if($('.famIn').css('display') == "block"){
			$(".famIn").toggle();
		}

        mainTwArr[num].pause();
        mainTwArr[num].reverse(0.4);
        TweenMax.to($("#story"+num+"Btn"), .5 + Math.random(), {css: {top: '-250px'}, ease: Back.easeOut})
		document.getElementById("vs"+num+"txt").style.display = "none";

        num--;
        if(num < 0){num = 2}

        document.getElementById("wrapper").className = bgArr[num];
        mainTwArr[num].restart();
		$("#story"+num+"Btn").show();
        TweenMax.to($("#story"+num+"Btn"), .5 + Math.random(), {css: {top: '425px'}, ease: Back.easeOut})

        document.getElementById("vs"+num+"txt").style.display = "block";

        TweenMax.to($('#menu'), .5, {css: {left: '100%'}, ease: Sine.easeOut, onComplete:menuMove})

    })

    function menuMove(){

        document.getElementById("mnBg").src = "http://www.o-juice.co.kr/common/img/menu_bg"+num+"1.png";
        document.getElementById("mnBar").src = "http://www.o-juice.co.kr/common/img/bg_straw"+num+"1.png";
        TweenMax.to($('#menu'), 1, {css: {left: '50%'}, ease: Sine.easeInOut})
        TweenMax.fromTo($('#mnBar'), 2, {css: {top:200, left:-60}}, {delay:.5, css: {top:mnArr[mnNum][0], left:mnArr[mnNum][1]}, ease:RoughEase.ease.config({strength:0.8, points:3, template:Circ.easeOut, randomize:false, clamp:true})})

    }

	function menuMoveBr(){

        document.getElementById("mnBg").src = "http://www.o-juice.co.kr/common/img/menu_bg"+num+"1.png";
        document.getElementById("mnBar").src = "http://www.o-juice.co.kr/common/img/bg_straw"+num+"1.png";
        //TweenMax.to($('#menu'), 1, {css: {left: '50%'}, ease: Sine.easeInOut})
        //TweenMax.fromTo($('#mnBar'), 2, {css: {top:200, left:-60}}, {delay:.5, css: {top:mnArr[mnNum][0], left:mnArr[mnNum][1]}, ease:RoughEase.ease.config({strength:0.8, points:3, template:Circ.easeOut, randomize:false, clamp:true})})

    }

//================================================================================================================================================================================================================

    var j;
    for(j=0; j<4; j++){

        $("#m" + j ).on('click', function () {

            goSub()

            n = Number(this.id.substr(1));

			if($('.famIn').css('display') == "block"){
				$(".famIn").toggle();
			}

            if(isMain){
                old = mnNum;
                mnNum = n;
                document.getElementById("corver").style.display = "block";
                corverTw = new TweenMax.to($("#corver"), .4, {css: {alpha: '1'}, onComplete: corverOut})
            }else {
                if (n != mnNum) {
                    old = mnNum;
                    mnNum = n;
                    corverTw.kill();
                    document.getElementById("corver").style.display = "block";
                    corverTw = new TweenMax.to($("#corver"), .4, {css: {alpha: '1'}, onComplete: corverOut})
                }
            }

            isMain = false;

            if(n == 0){
                //TweenMax.to($('#menu'), .5, {css: {left: '100%'}, ease: Sine.easeOut})

				mainTwArr[num].reverse(0.4);
				TweenMax.to($("#story"+num+"Btn"), .1, {css: {top: '-250px'}, ease: Back.easeOut})

				num = 0;

				document.getElementById("wrapper").className = bgArr[num];
				mainTwArr[num].restart();
				document.getElementById("story"+num).src = "http://www.o-juice.co.kr/common/img/btn_subDw"+num+"1.png";
				//$("#story"+num+"Btn").show();
				//TweenMax.to($("#story"+num+"Btn"), .1, {css: {top: '270px'}, ease: Back.easeOut})

				//document.getElementById("m"+1).src = "../common/img/menu_"+num+2+"_on.png";
				TweenMax.to($('#menu'), .5, {css: {left: '100%'}, ease: Sine.easeOut, onComplete:menuMoveBr})
				document.getElementById("vs"+num+"txt").style.display = "none";

				var i;
				for(i=0; i<3; i++) {
					if(i == num){
						document.getElementById("subMn"+ i).src = "http://www.o-juice.co.kr/common/img/menu_020"+(i+1)+"_on.png";
					}else{
						document.getElementById("subMn"+ i).src = "http://www.o-juice.co.kr/common/img/menu_020"+(i+1)+".png";
					}
				}

				var h;
                for(h=0; h<4; h++){

                    if(h == old){
                        document.getElementById("m"+h).src = "http://www.o-juice.co.kr/common/img/menu_"+num+(h+1)+"_on.png";
                    }else{
                        document.getElementById("m"+h).src = "http://www.o-juice.co.kr/common/img/menu_0"+(h+1)+".png";
                    }

                }


            }else{
                TweenMax.to($('#mnBar'), 1,  {css: {top:mnArr[mnNum][0], left:mnArr[mnNum][1]}, ease:RoughEase.ease.config({strength:0.8, points:3, template:Circ.easeOut, randomize:false, clamp:true})})

                var h;
                for(h=0; h<4; h++){

                    if(h == mnNum){
                        document.getElementById("m"+h).src = "http://www.o-juice.co.kr/common/img/menu_"+num+(h+1)+"_on.png";
                    }else{
                        document.getElementById("m"+h).src = "http://www.o-juice.co.kr/common/img/menu_0"+(h+1)+".png";
                    }

                }
            }

            if(n == 1){
                $("#story" + num + "Btn").show();
                TweenMax.to($("#twoDep"),.1, {css:{display: "block"}})
            }else{
                $("#story" + num + "Btn").hide();
                TweenMax.to($("#twoDep"),.1, {css:{display: "none"}})
            }

			if(n == 2){
				getList('1','','','');
			}


        })

    }

    function corverOut(){

        document.getElementById("brand").style.display = "none";
        document.getElementById("product").style.display = "none";
        document.getElementById("news").style.display = "none";

        document.getElementById(pageArr[mnNum]).style.display = "block";

        corverTw = new TweenMax.to($("#corver"), .5, {delay:.2, css:{alpha:'0'}, ease:Sine.easeOut, onComplete:function finished(){
            TweenMax.to($("#corver"),.1, {css:{display: "none"}})
        }})

        if(mnNum == 0){
            setBrand();
        }

        if(mnNum == 1){
            setProduct();
        }

    }

    function setBrand(){

        document.getElementById("brandTap01").src = "http://www.o-juice.co.kr/common/img/teb01_on.png";
        document.getElementById("brandTap02").src = "http://www.o-juice.co.kr/common/img/teb02.png";

        document.getElementById("brand01").style.display = "block";
        document.getElementById("brand02").style.display = "none";

    }

    $("#brandTap01" ).on('click', function () {

        document.getElementById("brandTap01").src = "http://www.o-juice.co.kr/common/img/teb01_on.png";
        document.getElementById("brandTap02").src = "http://www.o-juice.co.kr/common/img/teb02.png";

        document.getElementById("brand01").style.display = "block";
        document.getElementById("brand02").style.display = "none";

    })
    $("#brandTap02" ).on('click', function () {

        document.getElementById("brandTap01").src = "http://www.o-juice.co.kr/common/img/teb01.png";
        document.getElementById("brandTap02").src = "http://www.o-juice.co.kr/common/img/teb02_on.png";

        document.getElementById("brand01").style.display = "none";
        document.getElementById("brand02").style.display = "block";

    })

    $("#popClose" ).on('click', function () {

		if($('.famIn').css('display') == "block"){
			$(".famIn").toggle();
		}

        if(old == 0){
            goMain();
        }else{
            mnNum = old;
            corverTw.kill();
            document.getElementById("corver").style.display = "block";
            corverTw = new TweenMax.to($("#corver"), .4, {css: {alpha: '1'}, onComplete: corverOut})

            TweenMax.to($('#menu'), .5, {delay:.3, css: {left: '50%'}, ease: Sine.easeInOut})

            if(mnNum == 1){
				TweenMax.to($("#story"+0+"Btn"), .1, {css: {top: '180px'}, ease: Back.easeOut})
                $("#story" + 0 + "Btn").show();
                TweenMax.to($("#twoDep"),.1, {css:{display: "block"}})
            }else{
				getList('1','','','');
			}	
        }

    })

    var k;
    for(k=0; k<3; k++){
        $("#subTab"+ k).on('click', function () {

			if($('.famIn').css('display') == "block"){
				$(".famIn").toggle();
			}

            mainTwArr[num].reverse(0.4);
            TweenMax.to($("#story"+num+"Btn"), .1, {css: {top: '-250px'}, ease: Back.easeOut})

            num = Number(this.id.substr(6));

            document.getElementById("wrapper").className = bgArr[num];
            mainTwArr[num].restart();
            document.getElementById("story"+num).src = "http://www.o-juice.co.kr/common/img/btn_subDw"+num+"1.png";
			$("#story"+num+"Btn").show();
            TweenMax.to($("#story"+num+"Btn"), .1, {css: {top: '180px'}, ease: Back.easeOut})

            document.getElementById("m"+1).src = "http://www.o-juice.co.kr/common/img/menu_"+num+2+"_on.png";
            TweenMax.to($('#menu'), .5, {css: {left: '100%'}, ease: Sine.easeOut, onComplete:menuMove})
            document.getElementById("vs"+num+"txt").style.display = "none";

            var i;
            for(i=0; i<3; i++) {
                if(i == num){
                    document.getElementById("subTab" + i).className = "on";
                    document.getElementById("tabCont"+ i).style.display = "block";
                    document.getElementById("subMn"+ i).src = "http://www.o-juice.co.kr/common/img/menu_020"+(i+1)+"_on.png";
                }else{
                    document.getElementById("subTab" + i).className = "";
                    document.getElementById("tabCont"+ i).style.display = "none";
                    document.getElementById("subMn"+ i).src = "http://www.o-juice.co.kr/common/img/menu_020"+(i+1)+".png";
                }
            }

        })

        $("#subMn"+ k).on('click', function () {

			if($('.famIn').css('display') == "block"){
				$(".famIn").toggle();
			}

            mainTwArr[num].reverse(0.4);
            TweenMax.to($("#story"+num+"Btn"), .1, {css: {top: '-250px'}, ease: Back.easeOut})

            num = Number(this.id.substr(5));

            document.getElementById("wrapper").className = bgArr[num];
            mainTwArr[num].restart();
            document.getElementById("story"+num).src = "http://www.o-juice.co.kr/common/img/btn_subDw"+num+"1.png";
			$("#story"+num+"Btn").show();
            TweenMax.to($("#story"+num+"Btn"), .1, {css: {top: '180px'}, ease: Back.easeOut})

            document.getElementById("m"+1).src = "http://www.o-juice.co.kr/common/img/menu_"+num+2+"_on.png";
            TweenMax.to($('#menu'), .5, {css: {left: '100%'}, ease: Sine.easeOut, onComplete:menuMove})
            document.getElementById("vs"+num+"txt").style.display = "none";

            var i;
            for(i=0; i<3; i++) {
                if(i == num){
                    document.getElementById("subTab" + i).className = "on";
                    document.getElementById("tabCont"+ i).style.display = "block";
                    document.getElementById("subMn"+ i).src = "http://www.o-juice.co.kr/common/img/menu_020"+(i+1)+"_on.png";
                }else{
                    document.getElementById("subTab" + i).className = "";
                    document.getElementById("tabCont"+ i).style.display = "none";
                    document.getElementById("subMn"+ i).src = "http://www.o-juice.co.kr/common/img/menu_020"+(i+1)+".png";
                }
            }

        })
    }

    function setProduct(){

        var i;
        for(i=0; i<3; i++) {
            if(i == num){
                document.getElementById("subTab" + i).className = "on";
                document.getElementById("tabCont"+ i).style.display = "block";
                document.getElementById("subMn"+ i).src = "http://www.o-juice.co.kr/common/img/menu_020"+(i+1)+"_on.png";
            }else{
                document.getElementById("subTab" + i).className = "";
                document.getElementById("tabCont"+ i).style.display = "none";
                document.getElementById("subMn"+ i).src = "http://www.o-juice.co.kr/common/img/menu_020"+(i+1)+".png";
            }
        }

    }

}//mainStart

$(function(){
	$("#open").click(function(){
		$(".famIn").toggle();
	});
});