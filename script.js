// Toggle between forms
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

document.getElementById("toSignup").addEventListener("click", () => {
  signupTab.click();
});

document.getElementById("toLogin").addEventListener("click", () => {
  loginTab.click();
});

// Show/hide password
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// LocalStorage logic
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("signupIdentifier").value.trim();
  const pass = document.getElementById("signupPassword").value.trim();

  if (id && pass) {
    localStorage.setItem("auth_user", JSON.stringify({ id, pass }));
    alert("Signup successful! You can now log in.");
    loginTab.click();
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("loginIdentifier").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();
  const stored = JSON.parse(localStorage.getItem("auth_user"));

  if (stored && id === stored.id && pass === stored.pass) {
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials.");
  }
});
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Replace alert with this in login/signup
showToast('✅ Login successful!');
