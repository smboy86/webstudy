function initialize() {

			/*
             구글검색 - "구글맵 좌표로 검색"
			 구글맵에서 위도 경도 찾기
             
              http://maps.google.com로 검색하기
			  
			  추출하는 방법 guide:https://guideple.wordpress.com/2013/09/10/%EA%B5%AC%EA%B8%80%EB%A7%B5%EC%97%90%EC%84%9C-%EC%9C%84%EB%8F%84-%EA%B2%BD%EB%8F%84-%EC%A2%8C%ED%91%9C-%EC%B6%94%EC%B6%9C%ED%95%98%EB%8A%94-%EB%B2%95/
 	

				위의 링크에서 뒤에 주소를 적으면 x,y 값을 구할수 있습니다.

				<x>127.0171130</x>
                <y>37.2787000</y>
				
				37.509478, 126.890950
			*/
			var Y_point			= 37.724657;		// Y 좌표
			var X_point			= 128.718761;		// X 좌표


           /*
               <x>126.9178571</x>
<y>37.3965313</y>
		   */

			var zoomLevel		= 13;						// 첫 로딩시 보일 지도의 확대 레벨

			var markerTitle		= "삼양목장";				// 현재 위치 마커에 마우스를 올렸을때 나타나는 이름
			var markerMaxWidth	= 300;						// 마커를 클릭했을때 나타나는 말풍선의 최대 크기

			// 말풍선 내용
			

			var myLatlng = new google.maps.LatLng(Y_point, X_point);
			var mapOptions = {
								zoom: zoomLevel,
								center: myLatlng,
								mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

			var marker = new google.maps.Marker({
													position: myLatlng,
													map: map,
													title: markerTitle
			});

			var infowindow = new google.maps.InfoWindow(
														{
															content: contentString,
															maxWidth: markerMaxWidth
														}
			);

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}