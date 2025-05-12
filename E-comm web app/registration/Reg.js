document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".Registration-form");
    const registerBtn = document.querySelector(".register_button");
    registerBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const name = form.querySelector("input[placeholder='User Full Name']").value.trim();
        const email = form.querySelector("input[placeholder='Mail-id']").value.trim();
        const password = form.querySelector("input[placeholder='Password']").value.trim();
        const address = form.querySelector("input[placeholder='Adress']").value.trim();
        const dob = form.querySelector("input[type='date']").value;
        const gender = form.querySelector("input[name='gender']:checked");
        const state = form.querySelector("select[name='state']").value;
        if (!name || !email || !password || !address || !dob || !gender || !state) {
            console.log("Validation failed: Please fill all fields.");
            alert("Please fill in all the required fields.");
            return;
        }
        console.log("Form submitted successfully:", {
            name,
            email,
            password,
            address,
            dob,
            gender: gender.value,
            state
        });
        alert("Registration successful!");
        form.reset();
    });
});
