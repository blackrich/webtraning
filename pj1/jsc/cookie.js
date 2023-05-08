// 쿠키 확인 함수
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  // 로그인 버튼 클릭 이벤트 핸들러
  document.getElementById("login-button").addEventListener("click", function() {
    // 로그인 버튼 클릭 시 로그인 페이지로 이동
    window.location.href = "./login.html";
  });

  var isLoggedIn = getCookie("isLoggedIn");
  if (isLoggedIn) {
    var loginButton = document.getElementById("login-button");
    // 아이콘과 텍스트 변경
    loginButton.innerHTML = '<i class="material-symbols-outlined">logout</i>';
    // 이전 아이콘 클래스 제거
    loginButton.classList.remove("material-icons-outlined");
    // 로그인 아이콘 클래스 추가
    loginButton.classList.add("material-symbols-outlined");
  }
