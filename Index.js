const Validando = () => {
    console.log(window.localStorage)
    if (window.localStorage.length > 0 ){
        setTimeout(() => {
            console.log("Entra verdadero");
            location.assign("cliente.html");
        },200000000000000);
    } else {
        console.log("falso")
        setTimeout(() => {
            console.log("Entra Falso")
            location.assign("Login.html");
        },2000000000000000);
    }
}

window.addEventListener('DOMContentLoaded',Validando());