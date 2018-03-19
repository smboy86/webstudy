<!--
// WebLight Collector, Copyright(C) 2002-2007 SeoKyoung IT Inc.
function _wlcStart() {
  if(document._wlcRun==1) return;
  else document._wlcRun=1;

_bi='&cv=ADV260-05080401';
_ul=_sl=_cc=_bs='';
_jv=0,_i=1;
do {
  if(_i==1) {_j='';_k='1.0';}
  else {_h=_i.toString();_j=_k=_h.substr(0,3);}
  document.write("<SCRIPT LANGUAGE=JavaScript"+_j+">_jv="+_k+"</SCRIPT>");_i+=0.1;
} while(_i<5)
_rf=document.referrer;
try {
  _pd=parent.document;
  if(_rf==_pd.URL) _rf=_pd.referrer;
}
catch(e) {
  //
}
if((_rf=='undefined')||(_rf=='unknown')) _rf='';
_tz=(new Date()).getTimezoneOffset();_an=navigator.appName;
if(_an=='Microsoft Internet Explorer') {
  _bl=navigator.browserLanguage;_ul=navigator.userLanguage;
  _sl=navigator.systemLanguage;_cc=navigator.cpuClass;
} else {_bs=window.innerWidth+'x'+window.innerHeight;_bl=navigator.language;}
if(typeof screen=='object') _wr=screen.width+'x'+screen.height;else _wr='';
_je=navigator.javaEnabled()?'T':'F';_bc=navigator.cookieEnabled?'T':'F';
_dc=document.cookie?'T':'F';_pt=location.protocol.toLowerCase();
_hn=location.host.toLowerCase();_pn=location.pathname;_sr=escape(location.search);
switch(_pt) {
  case 'file:':_hn='<Local File>';break;
  case 'mid:':_hn='<Mail Client>';_pn='<Mail Client>';break;
}
_bi+='&pt='+escape(_pt)+'&hn='+escape(_hn)+'&pn='+escape(_pn)+'&sr='+_sr;
_bi+='&ti='+escape(document.title)+'&rf='+escape(_rf)+'&cc='+_cc+'&pf='+escape(navigator.platform);
_bi+='&ul='+_ul+'&bl='+_bl+'&sl='+_sl+'&tz='+escape(_tz)+'&bs='+_bs+'&wr='+_wr;
_bi+='&cd='+screen.colorDepth+'&hl='+history.length+'&js='+'T'+'&jv='+_jv+'&je='+_je;
_bi+='&bc='+_bc+'&dc='+_dc;

function setCK(_n,_v,_d,_f) {
  _exp=new Date();
  _dms=24*60*60*1000;
  if(_d<=0) _expD='';
  if(_f==0) {
    _exp.setTime(_exp.getTime()+_d*_dms);
  	_exp.setHours(0);
    _exp.setMinutes(0);
    _exp.setSeconds(0);
  } else _exp.setTime(_exp.getTime()+_d*_dms);
  _expD=_exp.toGMTString();
  // document.cookie=_n+'='+_v+';expires='+_expD+';path=/;domain='+_hn+';';
  document.cookie=_n+'='+_v+';expires='+_expD+';path=/;';
}

function getCK(_n) {
  _cF=false, _b=_e=_i=0;
  _cS=document.cookie;

  while(_i<=_cS.length) {
    _b=_i;
    _e=_b+_n.length;
    if(_cS.substring(_b,_e)==_n) {
      _cF=true;
      break;
    }
    _i++;
  }
  if(_cF) {
    _b=_e+1;
    _e=document.cookie.indexOf(";",_b);
    if(_e<_b) _e=document.cookie.length;
    return document.cookie.substring(_b,_e);
  }
  return "";
}

_l=new Date().getTime();

_c=getCK("WLCK-UV");
if(_c=='') {
  _uv='T', _vi='';
  setCK("WLCK-UV",_l,365,1);
} else {
  _uv='F';
  _vi=parseInt((_l-_c)/1000);
  if(_vi<=0) _vi='';
  setCK("WLCK-UV",_l,365,1);
}
_bi+='&uv='+_uv+'&vi='+_vi;

_tv=getCK("WLCK-TV");
if(_tv=='') {
  _tv='T';
  setCK("WLCK-TV",_l,1,0);
} else _tv='F';
_bi+='&tv='+_tv;

if (getCK("WLCK-SS")!= '') setCK("WLCK-SS",_l,0,1);

_us=getCK("WLCK-US");
if(_us=='') {
  for(_us=0, _r=0;_r<10;_r++) {
  	_us += Math.random();
  }
  _us=(new Date().getMilliseconds()+_us.toString().substring(2,18)).substring(0,18);
  setCK("WLCK-US",_us,3650,1);
}
_bi+='&us='+_us;

_bi+=unescape(getCK("WLCK-UI"));
_bi+=unescape(getCK("WLCK-SI"));

document.write("<SCRIPT STYLE=behavior:url(#default#clientCaps) ID=oCC></SCRIPT>");
_ct='';
if((typeof oCC !='undefined') && (typeof oCC.connectionType !='undefined')) {
  _ct=oCC.connectionType;
}
_bi+='&ct='+_ct;

document.write("<SCRIPT STYLE=behavior:url(#default#homePage) ID=oHP></SCRIPT>");
_hp='F';
if((typeof oHP !='undefined') && (typeof oHP.isHomePage !='undefined')) {
  if(oHP.isHomePage(document.URL)==true) _hp='T';
}
_bi+='&hp='+_hp;

function KillError() { return true; }
window.onerror=KillError;

function KillGetImg(_wl) {
  if(_wl.complete) { delete(_wl); return true; }
  else { _wl.src='weblight://'; delete(_wl);}
}

_vc=1;
_i=_r=0;
while(1) {
   _r=_bi.indexOf("&",_i);
   if (_r == -1) break;
   else { _i=_r+1; _vc++; }
}

setTimeout("KillGetImg(_wlc)", 5000);
_wlc=new Image();
_wlc.src="http://210.104.132.56/wlcollector?vc="+_vc+_bi;
}
_wlcStart();
//-->
