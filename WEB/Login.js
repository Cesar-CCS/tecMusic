let correo = document.getElementById("Usuario")
let contra = document.getElementById("Contra")
let btnIngresar = document.getElementById("Ingresar")

btnIngresar.addEventListener('click', () => {
    fetch('http://localhost:3000/users/login', {
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
    })
    .catch(res => console.log(res))
})