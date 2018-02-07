// 페이지가 로드되면 iniMobile()을 실행
window.onload=function(){iniMobile()};

function iniMobile(){
	var viewPortWidth=getViewPortWidth();
	if(viewPortWidth<769){	
		activeMobileType(viewPortWidth);
	}
}//End of iniMobile()
	
function activeMobileType(){
	var menuBtn=document.createElement("BUTTON");
	var menuBtnSpan=document.createElement("SPAN");
		menuBtnSpan.appendChild(document.createTextNode("열기"));
		menuBtn.className='menuBtn_off';
		menuBtn.appendChild(menuBtnSpan);	
	
	var mainNavi=document.getElementById("navMain");				
		mainNavi.className="mobilemenu_off";
	
		menuBtn.onclick=function(){toggleMobileMenu(this,mainNavi)}

	var header=document.getElementsByTagName("HEADER")[0];
	var twitterContent=document.getElementsByTagName("ARTICLE")[0];
	header.insertBefore(menuBtn,twitterContent);
}//End of activeMobileType()

function toggleMobileMenu(menuBtn,mainNavi){
	if(menuBtn.className=='menuBtn_off'){
		menuBtn.className='menuBtn_on';
		mainNavi.className="mobilemenu_on";
		menuBtn.getElementsByTagName('span')[0].firstChild.nodeValue="메뉴닫기";
	}else{
		menuBtn.className='menuBtn_off';
		mainNavi.className="mobilemenu_off";
		menuBtn.getElementsByTagName('span')[0].firstChild.nodeValue="메뉴열기";
	}
}//End of toggleMobileMenu(menuBtn,mainNavi)

function getViewPortWidth(){
	if(window.innerWidth){
		//표준 브라우져의 뷰포트 크기
		return window.innerWidth;
	}else if(document.documentElement && document.documentElement.clientWidth){
		//doctype이 존재하는 IE6;
		return document.documentElement.clientWidth;	
	}else if(document.body.clientWidth){
		//adoctype이 없는  IE6과 그이하;
		return document.body.clientWidth;
	}
}//End of getViewPortWidth()