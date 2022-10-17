let correo = document.getElementById("Correo")
let contra = document.getElementById("Contra")
let btnIngresar = document.getElementById("Registro")

btnIngresar.addEventListener('click',() =>{
    fetch('https://tec-sounnd.herokuapp.com/signup', {
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