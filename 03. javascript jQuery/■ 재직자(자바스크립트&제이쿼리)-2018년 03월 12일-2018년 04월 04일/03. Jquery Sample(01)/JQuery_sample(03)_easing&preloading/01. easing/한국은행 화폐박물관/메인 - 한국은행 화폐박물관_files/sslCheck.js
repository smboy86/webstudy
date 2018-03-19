var sslArr = new Array();
sslArr[0] = '/participation/scheduleList.do';
sslArr[1] = '/participation/scheduleCert.do';
sslArr[2] = '/participation/scheduleEnd.do';
sslArr[3] = '/participation/scheduleLogin.do';
sslArr[4] = '/participation/scheduleView.do';
sslArr[5] = '/participation/scheduleModify.do';
sslArr[6] = '/participation/scheduleCancel.do';
sslArr[7] = '/participation/childList.do';
sslArr[8] = '/participation/childLogin.do';
sslArr[9] = '/participation/childInfo.do';
sslArr[10] = '/participation/childModify.do';
sslArr[11] = '/participation/childCancel.do';
sslArr[12] = '/participation/childEnd.do';
sslArr[13] = '/news/visitorList.do';
sslArr[14] = '/news/visitorView.do';
sslArr[15] = '/news/freeList.do';
sslArr[16] = '/news/freeView.do';
sslArr[17] = '/news/visitorWrite.do';
sslArr[18] = '/news/freeWrite.do';
sslArr[19] = '/participation/scheduleEdit.do';
sslArr[20] = '/participation/visit_schedule/updateEnd.jsp';
sslArr[21] = '/participation/schedulePersist.do';
sslArr[22] = '/participation/childPersist.do';
sslArr[23] = '/participation/childView.do';
sslArr[24] = '/participation/childForm.do';


var url = location.href;
var sslChk = false;

for(var i=0;i<sslArr.length;i++){
	if(url.indexOf(sslArr[i])>=0){
		sslChk = true;
		break;
	}
}

if(sslChk){
	if(url.indexOf('https://')<0){
		location.href = location.href.replace('http','https');
	}
}else{
	if(url.indexOf('https://')>=0){
		location.href = location.href.replace('https','http');
	}
}