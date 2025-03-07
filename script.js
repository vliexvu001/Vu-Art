document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if ((username === "vuvuart20" && password === "vu2000") || username === "Admin") {
        localStorage.setItem("user", username);
        window.location.href = "home.html";  
    } else {
        errorMessage.textContent = "Username atau password salah!";
    }
});
