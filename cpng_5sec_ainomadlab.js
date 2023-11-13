// 쿠키 설정 함수
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// 쿠키 가져오기 함수
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}
// 쿠키 set get 끝

// 2시간 이하면 안뜸 시작 ▼▼
	var lastVisitDate = getCookie("lastVisit");
	var currentDate = new Date().getTime();;
	var timeDifferenceInMilliseconds = currentDate - lastVisitDate;

	if(timeDifferenceInMilliseconds<=5000){
	// if(timeDifferenceInMilliseconds<=7200000){
		// alert("아직 2시간 이하 입니다");
		var cpngDiv = document.getElementById("cpngDiv");
		cpngDiv.style.display = "none"; // "none"으로 설정하여 숨김 처리
	}
//2시간 이하면 안뜸 끝

//쿠파스 5초 시작

	document.body.classList.add("cpng_cant_scroll");

	var timeDifferenceInSeconds;

  function countdown() {
    var countdownElement = document.getElementById("countdown");
    var currentNumber = parseInt(countdownElement.innerHTML);
    
    if (currentNumber > 1) {
      currentNumber--;
      countdownElement.innerHTML = currentNumber;
    } else {
      countdownElement.innerHTML = "X"; // "X"로 수정
      clearInterval(interval);
    }
  }
  // 1초마다 countdown 함수 호출
  var interval = setInterval(countdown, 1000);

  // div를 클릭할 때 실행할 함수
  document.getElementById("countdown").onclick = function() {
    var countdownValue = document.getElementById("countdown").innerHTML;
		
		if (countdownValue === "X") { // "X"로 수정
				document.body.classList.remove("cpng_cant_scroll");
				var currentDate = new Date().getTime(); // 현재 날짜를 밀리초로 변환하여 숫자로 저장
				var lastVisitDate = getCookie("lastVisit");
				setCookie("lastVisit", currentDate, 365); // 숫자로 저장                
		}

		var cpngDiv = document.getElementById("cpngDiv");
		cpngDiv.style.display = "none"; // "none"으로 설정하여 숨김 처리
	}
