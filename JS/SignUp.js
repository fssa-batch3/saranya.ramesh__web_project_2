// const signUp= document.querySelector("#submit")
// signUp.addEventListener("click", register)

function register(e) {
    e.preventDefault();

    const inputName = document.getElementById("username").value.trim();
    const inputEmail = document.getElementById("email").value.trim();
    const inputMobileNumber = document.getElementById("mobileNumber").value.trim();
    const inputPsw = document.getElementById("password").value.trim();
    const inputCpsw = document.getElementById("conformPassword").value.trim();
    const inputuniqueId = crypto.randomUUID();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exist =
        users.length &&
        JSON.parse(localStorage.getItem("users")).some(
            (data) =>
                data.email.toLowerCase() === inputEmail.toLowerCase() ||
                data.password.toLowerCase() === inputPsw.toLowerCase()
        );

    if (!exist) {
        if (inputPsw === inputCpsw) {
            users.push({
                "name": inputName,
                "email": inputEmail,
                "mobilenumber": inputMobileNumber,
                "password": inputPsw,
                "confirmpassword": inputCpsw,
                "uniqueid": inputuniqueId,
                "address": "",
                "City" : "",
                "state" : "",
                "pincode": ""
            });
            localStorage.setItem("users", JSON.stringify(users));
            document.querySelector("form").reset();
            alert("Account created Successfully");
            window.location.href= "/Saran's project/pages/sign_in.html";

        }
        else {
            alert("Invalid")
        }
    }
    else {
        alert("Sorry the User already Exist!! \n Try with different email");
        // document.querySelector("form").reset();
    }

}

