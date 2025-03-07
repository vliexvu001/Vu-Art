document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "vuvuart20" && password === "vu2000") {
                localStorage.setItem("role", "owner");
                window.location.href = "home.html";
            } else if (username === "Admin") {
                localStorage.setItem("role", "visitor");
                window.location.href = "home.html";
            } else {
                document.getElementById("errorMessage").textContent = "Username atau password salah!";
            }
        });
    }

    if (document.getElementById("uploadBtn")) {
        const role = localStorage.getItem("role");
        if (role !== "owner") {
            document.getElementById("uploadBtn").style.display = "none";
        }

        document.getElementById("uploadBtn").addEventListener("click", function() {
            document.getElementById("uploadInput").click();
        });

        document.getElementById("uploadInput").addEventListener("change", function(event) {
            const file = event.target.files[0];
            if (file) {
                const img = document.createElement("img");
                img.src = URL.createObjectURL(file);
                img.style.width = "100px";
                img.style.margin = "10px";
                document.getElementById("gallery").appendChild(img);
            }
        });
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
