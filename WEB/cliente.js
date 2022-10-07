let nombre = document.getElementById("Nombre")
let correo = document.getElementById("Correo")
let contra = document.getElementById("Contra")
let fecha = document.getElementById("fecha")
let registrar = document.getElementById("Registrar")
let consultar = document.getElementById("Consultar")
var arr = []
registrar.addEventListener('click', ()=>{
    console.log(fecha.value+":35.000Z");
    fetch('http://localhost:3000/cliente', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
            Nombre: nombre.value,
            Correo: correo.value,
            Contraseña: contra.value,
            Cumpleaños: fecha.value+":35.000Z",
          })
          
    })
    .then(res => res.json())
    .then(res=> {
          console.log(res);
    })
    .catch(res => console.log(res))
})

consultar.addEventListener('click', ()=>{
    fetch('http://localhost:3000/cliente', {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(res =>{
        let coulmna = document.createElement('td')
        let fila = document.createElement('tr')
        for (let i = 0; index < array.res; i++) {
            
        }})
    .catch( err => console.error(err));
})
