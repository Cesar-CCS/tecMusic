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
    .then(res => res.json())
    .then(res=> {
        window.localStorage.setItem("token", res.token)
        if(res == 422){
            console.log("Tienes un error")
        }else{
            console.log("Usuario correcto")
        }
        console.log(res)
    })
    .catch(res => console.log(res))
})