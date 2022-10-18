const Validando = () => {
    console.log(window.localStorage)
    if (window.localStorage.length > 0 ){
        setTimeout(() => {
            location.assign("cliente.html");
        },2000);
    } else {
        console.log("falso")
        setTimeout(() => {
            location.assign("Login.html");
        },2000);
    }
}

window.addEventListener('DOMContentLoaded',Validando());