let nombre = document.getElementById("Nombre")
let correo = document.getElementById("Correo")
let contra = document.getElementById("Contra")
let fecha = document.getElementById("fecha")
let registrar = document.getElementById("Registrar")
let consultar = document.getElementById("Consultar")
let tabla = document.getElementById("Tabla")
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
        crearTabla("Nombre","Correo","Contraseña","Cumpleaños")
        res.forEach(element => {
            crearTabla(element.Nombre,element.Correo,element.Contraseña,element.Cumpleaños)
        })
        //document.body.appendChild(tabla)
    })
    .catch( err => console.error(err));
})

function crearTabla(a,b,c,d){
    var fila = document.createElement("tr")
    var celda = document.createElement("tr")

    celda.appendChild(document.createTextNode(a));
    celda.appendChild(document.createTextNode(b));
    celda.appendChild(document.createTextNode(c));
    celda.appendChild(document.createTextNode(d));

    fila.appendChild(celda)
    tabla.appendChild(fila)
}
