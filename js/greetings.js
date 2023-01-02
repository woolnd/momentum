const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
function onLoginSubmit(event){
    event.preventDefault(); ///기본 실행 즉 form의 기본 기능인 submit 기능을 막아준다
    loginForm.classList.add(HIDDEN_CLASSNAME);  //loginForm을 숨긴다.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //첫인자는 키 두번째 인자는 값
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; // == "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);//show the greeting
}
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);//show the form
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}