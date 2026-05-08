let form = document.getElementById("loginForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  if (username === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  if (localStorage.getItem("users") === null) {
    alert("Không có tài khoản nào được đăng ký");
    return;
  } else {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(
      (u) => u.username === username && u.password === password,
    );
    if (user) {
      alert("Đăng nhập thành công");
      location.href = "./index.html";
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  }
});
