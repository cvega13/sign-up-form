


const myForm = document.querySelector("form");
myForm.noValidate = true;
const submitButton =  document.querySelector("button");

submitButton.addEventListener("click", (event) => {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password != confirmPassword) {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('confirmPassword').style.borderColor = "red";
        const validCheck = document.querySelector(".validCheck");
        validCheck.textContent = "*Passwords must match";
    } else {
        document.getElementById('password').style.borderColor = "#E5E7EB";
        document.getElementById('confirmPassword').style.borderColor = "#E5E7EB";
        const validCheck = document.querySelector(".validCheck");
        validCheck.textContent = "";
    }
});



