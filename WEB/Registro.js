let correo = document.getElementById("Correo")
let contra = document.getElementById("Contra")
let btnIngresar = document.getElementById("Registro")

btnIngresar.addEventListener('click',() =>{
    fetch('http://localhost:3000/signup', {
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
        console.log(res.token);
    })
    .catch(res => console.log(res))
})