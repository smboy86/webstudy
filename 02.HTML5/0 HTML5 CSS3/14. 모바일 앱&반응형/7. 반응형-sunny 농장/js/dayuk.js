//------------------------------------------------------------------------------------------------------------ 탭메뉴

function initTabMenu(mytab) {
	var myList = document.getElementById(mytab);
	var mytab = myList.getElementsByTagName("dt");
	var myDD = myList.getElementsByTagName("dd");
   
	for(var i=0;i<mytab.length; i++) {
		mytab[i].children[0].onclick=function() {
			for(var k=0; k<mytab.length; k++) {
				myDD[k].style.display="none";
			}
			var theNext=this.parentNode.nextSibling;
			if(theNext.nodeType==3) theNext=theNext.nextSibling;
			theNext.style.display="block";
   
			for(var k=0; k<mytab.length; k++) {
				var theTab=mytab[k].children[0].children[0];
				theTab.src=theTab.src.replace("_over.gif",".gif");
			}
			this.children[0].src=this.children[0].src.replace(".gif","_over.gif");
		}
	}
}

