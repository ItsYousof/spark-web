let username = sessionStorage.getItem("username");
let password = sessionStorage.getItem("password");

document.getElementById("name").innerText = sessionStorage.getItem("username");
document.getElementById("username").innerHTML = username;
document.getElementById("password").innerHTML = password;