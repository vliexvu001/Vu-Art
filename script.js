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
                const reader = new FileReader();
                reader.onload = function(e) {
                    const storedImages = JSON.parse(localStorage.getItem("images")) || [];
                    storedImages.push(e.target.result);
                    localStorage.setItem("images", JSON.stringify(storedImages));
                    displayImages();
                };
                reader.readAsDataURL(file);
            }
        });

        displayImages();
    }
});

function displayImages() {
    const gallery = document.getElementById("gallery");
    if (gallery) {
        gallery.innerHTML = "";
        const storedImages = JSON.parse(localStorage.getItem("images")) || [];
        storedImages.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.style.width = "100px";
            img.style.margin = "10px";
            gallery.appendChild(img);
        });
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
