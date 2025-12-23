let container = document.getElementById("form-wrapper");


let userEmail = "ebukaexample@gmail.com";
let userPassword = "ebuka4shr24";

function login(e) {
  e.preventDefault();

//   let event1 = event.target;
  const formDetail = new FormData(container); // help to get all the input data from the user

  const email = formDetail.get("email"); // help to get the email of the user
  const password = formDetail.get("pwd"); // help to get the password of the user

  if (email === userEmail && password === userPassword) {
    alert("successful login!!!");
  } else {
    alert("wrong credentials");
  }

//   event1.reset()
} 
container.addEventListener("submit", login);