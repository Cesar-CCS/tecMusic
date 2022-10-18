let correo = document.getElementById("Usuario")
let contra = document.getElementById("Contra")
let btnIngresar = document.getElementById("Ingresar")

btnIngresar.addEventListener('click', () => {
    fetch('https://tec-sounnd.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
            email: correo.value,
            password: contra.value
          })
          
    })
    .then(res => {
        if(res.status == 200){
            console.log("Usuario Correcto");
            location.assign("Index.html");
        }else{
            alert("Credenciales Incorrectas");
            console.log("Usuario Incorrecto");
        }
        console.log(res)
        res.json()})
    .then(res=> {
        window.localStorage.setItem("token", res.token)
        console.log(res)
    })
    .catch(res => console.log(res))
})