# webstudy
그린컴퓨터 웹스터디 2018.01.15


Doctype 선언 잘 정리된 사이트
http://webdir.tistory.com/40
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1-transitional.dtd">

-- 인터넷 교보문고 웹퍼블리싱가이드
-- 정말 친절하게 가이드가 제시되어 있다.
http://image.kyobobook.co.kr/ink/html/guide/index.html
1) id, class 명명 규칙 '형태_의미_순서_상태'을 기본 순서로 사용한다. ex) .btn_confirm_02_on
2) 속성은 형태 - 흐름 - 위치 - 크기 - 박스모델 - 배경 - 글자 - 기타 순으로 지정한다.

형태 : display visibility
흐름 : float clear
위치 : position left right top bottom z-index
크기 : width height overflow
박스 : margin padding border
배경 : background
글자 : text font color
기타 : cursor

/*
1) 속성은 형태 - 흐름 - 위치 - 크기 - 박스모델 - 배경 - 글자 - 기타 순으로 지정한다.
a {
    display: inline-block; float: left; clear: both; 
    position: left; left:10px; right:10px; top:10px; bottom: 10px; z-index:10px;
    width:10px;height:10px;overflow: hidden;
    margin:0 auto; padding: 0 0 0 0; border: 1px solid red;
    background: url('./test.gif');
    text-align:center; font-size:10px;
    /// 기타 ///
}
*/


-- 디비컷 - 웹디자인 평가 및 우수 웹사이트 모음
https://www.dbcut.com/bbs/index.php

-- 교육용 웹서버 정보
http://webstory.ivyro.net/
webstory
green3

-- HTML 
https://www.w3schools.com/


-- daum webstandard 

http://darum.daum.net/



-- 포토샵 Tip

[1] 단축키
  1) ctrl + 0   : 화면에 비율 맞추기 (화면 전체 보기)
  2) ctrl + h   : 레이아웃 구조 켜고 끄기
  3) ctrl + r   : 전체 눈금자 켜고 끄기
  4) ctrl + -,+ : 축소 확대
  5) space      : 손잡이
  6) ctrl + space : 돋보기 기능
  7) ctrl + ;   : 레이아웃 가이드 (view-clear guide 로 초기화 후 생성 - view-clearSlice)

[2] 웹 퍼블리싱 작업
  1) 레이아웃 작업을 위한 가이드 설정

[3] 웹 퍼블리싱 작업 순서
  1) PSD 파일 열기
  2) 전체 레이아웃 가이드 설정
    - ctrl + a  >  F8  - info 창 W, H 확인 (전체 크기 확인)
    - view > clearGuide
    - view > clearSlice
    - view > snap 체크
    - 가장 큰 형태의 레이아웃 가이드 선 그리기 (확대 후 > shift 누르고 선택 (1px 씩 이동))
  3) 가이드별 레이아웃 크기 조회 (Rectangle Marquee tool)
  4) 이미지 슬라이스
    - 슬라이스 툴로 이미지 가이드 라인 잡기 (슬라이스 툴 )
    - ctrl + alt + shift + s   :: 슬라이스 화면
    - 이미지 명 정하기
    - 슬라이스할 이미지 선택
    - 저장하기 >> 옵션 선택
      > setting > Put a Image 해제
  5) 이미지 1개씩 따기
    - 마퀴툴로 이미지 영역 설정
    - edit > copy Merged  (레이어 통째로 카피)
    - ctrl + n  (새파일)  >> 자동으로 크기 조절 >> ctrl + v (붙여넣기)
    - file > save for web 
    - gif냐 설정해서 이미지 저장
  5) 메뉴 작업
    - 메뉴 속 글씨체 획득
    - Preference > Units & Rulers > Units Type : Pixels (단위 맞추기)
  6) 레이아웃 안에 a 태그 작업을 할때 참고
    - a태그 padding 을 먹일일이 있으면 display:inline-block 을 먹이도록 한다.




#########################################################################33
[1] 자주 사용하는 포토샵 단축키 및 환경설정 팁

  - 환경
  Views > Snap 기능 활성화   : 1px 씩 이동
  ctrl + r                  : 눈금자 보기
  View > Clear Guide        : 가이드라인 모두 지우기
  Ctrl + h                  : 가이드 & 슬라이스 라인 감추기
  Ctrl + ;                  : 가이드 라인만 감추기
  Views > Show > Slice      : 슬라이스 라인만 감추기 (단축키가 없음)

  - 기능 & 편집
  space                     : 손잡이 이동
  ctrl + space              : 돋보기툴 
  ctrl + shift + c          : Copy Merged
  ctrl + n                  : 새파일
  ctrl + ;                  : 가이드 라인 감추기/보이기
  ctrl + shift + alt + s    : Save for Web
  ctrl + 0                  : 전체 화면으로 비율 맞추기 (Ctrl + 1 : 비율 100%)

  - 자주 사용하는 도구 단축키


[2] 포토샵 각종 팁
  1. 포토샵 이미지 따기
    1) 슬라이스 툴 사용
      - 슬라이스 툴 선택 > 대략적인 크기로 자르기
      - fit 하게 맞추기 (선택상자에 가로세로 눈금자 이용)
      - 이름 설정 (ctrl + 왼클릭 한 상태에서 왼쪽 위 모서리 숫자 더블클릭)
      - 전체 저장 (File > Save for web)
    2) 한 건씩 저장
      - 마퀴툴로 해당 이미지 영역지정
      - Edit > 카피 머지
      - Ctrl + n 새창 띄우가 (자동으로 크기 조절되어있음)
      - Ctrl + v (붙여넣기)
      - File > Save for Web
      - Git, Jpg 등 선택 후 저장
# 180212 css3 
http://css3generator.com/


# 180326 웹 psd 읽기 사이트
뭐 이런 미친 사이트가.. ㄷㄷ
https://studio.psdetch.com/