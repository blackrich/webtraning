  // 쿠키 생성 함수
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  // 로그인 폼 제출 이벤트 핸들러
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // 로그인 폼에서 입력한 정보 확인
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // 로그인 처리
    if (username === "user" && password === "password") {
      // 로그인 성공 시 쿠키 생성 및 메인 페이지로 이동
      setCookie("isLoggedIn", true, 1);
      window.location.href = "./main.html";
    } else {
      // 로그인 실패 시 오류 메시지 출력
      alert("로그인에 실패하였습니다.");
    }
  });

  