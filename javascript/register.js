let form = document.getElementById("registerForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let passwordConfirm = document.getElementById("verifyPassword").value.trim();
  if (username.length < 6) {
    alert("Username phải có ít nhất 6 ký tự");
    return;
  } else if (password.length < 6) {
    alert("Password phải có ít nhất 6 ký tự");
    return;
  } else if (!email.includes("@")) {
    alert("Email không hợp lệ");
    return;
  } else if (!password.match(/[A-Z]/)) {
    alert("Password phải có ít nhất 1 ký tự viết hoa");
    return;
  } else if (!password.match(/[0-9]/)) {
    alert("Password phải có ít nhất 1 số");
    return;
  } else if (!password.match(/[@$!%*?&#]/)) {
    alert("Password phải có ít nhất 1 ký tự đặc biệt");
    return;
  } else if (password !== passwordConfirm) {
    alert("Mật khẩu xác nhận không khớp");
    return;
  } else if (localStorage.getItem("users") !== null) {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users.some((u) => u.username === username)) {
      alert("Username đã tồn tại");
      return;
    }
  } else {
    // alert('Đăng ký thành công');
    const newUser = { email, username, password };
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify([newUser]));
    } else {
      const users = JSON.parse(localStorage.getItem("users"));
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
    }
    alert("Đăng ký thành công");
    location.href = "../pages/login.html";
  }
});
