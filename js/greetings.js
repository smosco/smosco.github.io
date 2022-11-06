const loginForm= document.querySelector("#login-form");
const loginInput= document.querySelector("#login-form input");
const greeting= document.querySelector("#greeting")

const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY= "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username= loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    console.log(localStorage.getItem(USERNAME_KEY));
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(name){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText= `WELCOME ${name.toUpperCase()}`;
}

const savedUsername=localStorage.getItem("username");

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreeting(savedUsername);
}



