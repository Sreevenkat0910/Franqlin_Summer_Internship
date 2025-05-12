document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            console.log("Login button clicked");
            window.location.href = "Loginpage.html";
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            console.log("Register button clicked");
            window.location.href = "Regpage.html";
        });
    }
});
