const email = document.getElementById("email");
const button = document.getElementById("btn");
const form = document.getElementById("form");
const message = document.querySelector(".error")

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let emailIsValid = true;
    if (email.value.trim() === "" || !isValidEmail(email.value.trim())) {
        email.style.border = "2px solid hsl(0, 93%, 68%)";
        message.innerHTML = `
        <p class="error-text">Please provide a valid email</p>`;
        email.style.background = 'url("images/icon-error.svg") no-repeat right 100px top 10px';
        emailIsValid = false;
    } else {
        email.style.border = "1px solid hsl(0, 36%, 70%)";
        message.innerHTML = "";
        email.style.background = "";
    }

    // Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
if (emailIsValid) {
    alert( 
        `Email: ${email.value}
        `);
        document.getElementById("form").reset()
}
})
