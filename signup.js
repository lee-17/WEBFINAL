document.getElementById("SignupStatik").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password2 = document.getElementById("entpassword").value;
    const password1 = document.getElementById("conpassword").value;

    if (password1 === password2) {
        localStorage.setItem("storedUsername", username);
        localStorage.setItem("storedPassword", password1);
        document.getElementById("message").textContent = "Signup successful!";    
        window.location.href = "login.html";
    } else {
        document.getElementById("message").textContent = "Passwords do not match. Please try again.";
    }
});