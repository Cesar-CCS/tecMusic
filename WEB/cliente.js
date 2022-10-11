let nombre = document.getElementById("Nombre")
let correo = document.getElementById("Correo")
let contra = document.getElementById("Contra")
let fecha = document.getElementById("fecha")
let registrar = document.getElementById("Registrar")
let consultar = document.getElementById("Consultar")
let tabla = document.getElementById("Tabla")
let select = document.getElementById("idUsuarios")

//Metodo get para consultar ID de Usuarios y asignarlos al combobox
fetch('http://localhost:3000/cliente', {
    method: 'GET',
    headers: {"Content-Type": "application/json"}
})
.then(res => res.json())
.then(res =>{
    res.forEach(Usuario => {
        var opcion = document.createElement("option")
        opcion.innerText = Usuario.Id
        select.appendChild(opcion)
    })
})
.catch( err => console.error(err));


registrar.addEventListener('click', ()=>{
    crearUsuario()
})

//Peticion de los objetos Usuario en la Base de datos
consultar.addEventListener('click', ()=>{
    fetch('http://localhost:3000/cliente', {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(res =>{
        crearTabla("ID","Nombre","Correo","Contraseña","Cumpleaños")
        res.forEach(Usuario => {
            crearTabla(Usuario.Id,Usuario.Nombre,Usuario.Correo,Usuario.Contraseña,Usuario.Cumpleaños)
        })
    })
    .catch( err => console.error(err));
})

//Metodo que crea un usuario llamando al POST del fetch
function crearUsuario(){
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
        console.log(res.Id);
        var opcion = document.createElement("option")
        opcion.innerText = res.Id
        select.appendChild(opcion)
    })
    .catch(res => console.log(res))
}

//Metodo para crear tabla con base de datos, recibe 4 parametros
function crearTabla(a,b,c,d,auxCumple){
    var fila = document.createElement("tr")
    var celda = document.createElement("td")
     //WIDTH="50" HEIGHT="50"
    celda.style.width = "500px"
    celda.appendChild(document.createTextNode(a));
    celda.appendChild(document.createTextNode(b));
    celda.appendChild(document.createTextNode(c));
    celda.appendChild(document.createTextNode(d));
    celda.appendChild(document.createTextNode(auxCumple));

    fila.appendChild(celda)
    celda.style.border = "1px solid #000"
    fila.style.border = "1px solid #000"
    tabla.appendChild(fila)
}
