const login = document.querySelector("form");

login.addEventListener("submit", (e) => {
  e.preventDefault();
  signin();
})
function signin() {
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let storedData = JSON.parse(localStorage.getItem("users"));

  if (email != "") {
    let res = 0;
    storedData.find((users) => {
      if (users["email"] == email && users["password"] == password) {
        localStorage.setItem("unique_id", JSON.stringify(email));
        res = 1;
      }
    });
    if (res == 1) {
      alert("you're succesfully login");
      window.location.href = "/saran's project/index.html";
    }
    else {
      alert("Invaild users")
    }
  }
  else{
    alert("please enter the details");
  }

}
// function signIn(e) {
//   e.preventDefault();
//   let userDetail = {
//     email: document.getElementById("email").value,
//     password: document.getElementById("password").value,
//   };

//   let check;

//   for (let i = 0; i < storedData.length; i++) {
//     if (
//       userDetail.email == storedData[i].email &&
//       userDetail.password == storedData[i].password
//     ) {
//       check = 1;
//     }
//     if (check == 1) {
//       alert("You are logged in..");
//       localStorage.setItem("unique_id", JSON.stringify(userDetail.email));
//       window.location.href = ;

//     }
//     else {
//       alert("Password doesn't match");
//     }

// }
