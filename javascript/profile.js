const users = JSON.parse(localStorage.getItem("users")) || [];
const username = localStorage.getItem("currentUser") || "";
const user = users.find((u) => u.username == username);
const usernameLabel = document.getElementById("username");
const emailLabel = document.getElementById("email");
const form = document.getElementById("profile-form");
const editUsernameInput = document.getElementById("username-input");
const editEmailInput = document.getElementById("email-input");
const editPasswordInput = document.getElementById("password-input");
if (user) {
  usernameLabel.textContent = username;
  emailLabel.textContent = user.email;
  editUsernameInput.value = username;
  editEmailInput.value = user.email;
  editPasswordInput.value = user.password;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user.username = editUsernameInput.value;
  user.email = editEmailInput.value;
  user.password = editPasswordInput.value;
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", user.username);
  usernameLabel.textContent = editUsernameInput.value;
  emailLabel.textContent = "Email: " + editEmailInput.value;
  alert("Profile updated successfully!");
});
