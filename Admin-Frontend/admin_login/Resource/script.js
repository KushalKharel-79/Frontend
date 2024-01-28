const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
// var username = document.getElementById("Username").value;
// var password = document.getElementById("Password").value;

function validateLogin() {

    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    const encodedUsername = encodeURIComponent(username);
    const encodedPassword = encodeURIComponent(password);
    const url = `/api/user?username=${encodedUsername}&password=${encodedPassword}`;
    fetch(url, {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
     },
     body: JSON.stringify({ username, password}),
     })
  .then((r) => r.json())
  .then((data) => console.log(data));
}
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

