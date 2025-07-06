const currentUser = localStorage.getItem("currentUser");
const welcomeElement = document.getElementById("welcome-message");

if (currentUser && welcomeElement) {
    welcomeElement.innerHTML = `Welcome<br>${currentUser}!`;
} else if (welcomeElement) {
    welcomeElement.innerHTML = `Welcome<br>Guest!`;
}
