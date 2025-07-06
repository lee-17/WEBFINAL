document.getElementById("LoginStatik").addEventListener("submit", function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const storedUsername = localStorage.getItem("storedUsername");
    const storedPassword = localStorage.getItem("storedPassword");

    if (usernameInput === storedUsername && passwordInput === storedPassword) {
        document.getElementById("message").textContent = "Login successful!";
        window.location.href = "Home.html";
    } else {
        document.getElementById("message").textContent = "Login failed. Please try again.";
    }
});
