let nombre = document.getElementById("Nombre")
let correo = document.getElementById("Correo")
let contra = document.getElementById("Contra")
let fecha = document.getElementById("fecha")
let registrar = document.getElementById("Registrar")
let consultar = document.getElementById("Consultar")
let tabla = document.getElementById("Tabla")
let select = document.getElementById("idUsuarios")
let consulta = document.getElementById("Consulta")
let eleccion = document.getElementsByClassName("Eleccion")
let realiza = document.getElementById("Realiza")
let eliminar = document.getElementById("Eliminar")
let modificar = document.getElementById("Modificar")

//Metodo get para consultar ID de Usuarios y asignarlos al combobox
fetch('https://tec-sounnd.herokuapp.com/cliente', {
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

eliminar.addEventListener('click', () =>{
    fetch('https://tec-sounnd.herokuapp.com/cliente/'+select.value, {
      method: 'DELETE',
})
.then(res=> {
    console.log(res);
    nombre.value = ""
    correo.value = ""
    contra.value = ""
    window.alert("Usuario Eliminado");
    location.assign("cliente.html");
})
.catch(err => console.error(err));
})

modificar.addEventListener('click', () =>{
    fetch('https://tec-sounnd.herokuapp.com/cliente/'+select.value, {
        method: 'PUT',
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
.then(res => {
    nombre.value = ""
    correo.value = ""
    contra.value = ""
    alert("Usuario Modificado");
    location.assign("cliente.html");
})
.catch( err => console.error(err));
})

registrar.addEventListener('click',crearUsuario)

consulta.addEventListener('click',obtenerID)
//Peticion de los objetos Usuario en la Base de datos
consultar.addEventListener('click', ()=>{
    fetch('https://tec-sounnd.herokuapp.com/cliente', {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(res =>{
        /*if(fila =! null){
            tabla.removeChild(fila)
            console.log("Hola")
        }*/
        crearTabla("ID","Nombre","Correo","Contraseña","Cumpleaños")
        res.forEach(Usuario => {
            crearTabla(Usuario.Id,Usuario.Nombre,Usuario.Correo,Usuario.Contraseña,Usuario.Cumpleaños)
        })
    })
    .catch( err => console.error(err));
})

function formato(formaFecha){
    formaFecha = formaFecha.split(':');
    var auxFecha = formaFecha[0]+":"+formaFecha[1]
    return auxFecha
}

function obtenerID(){
    fetch('https://tec-sounnd.herokuapp.com/cliente/'+select.value, {
    method: 'GET',
    headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then(res =>{
        nombre.value = res.Nombre
        correo.value = res.Correo
        contra.value = res.Contraseña
        fecha.value = formato(res.Cumpleaños)
    })
    .catch( err => console.error(err));
}

//Metodo que crea un usuario llamando al POST del fetch
function crearUsuario(){
    fetch('https://tec-sounnd.herokuapp.com/cliente', {
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
        nombre.value = ""
        correo.value = ""
        contra.value = ""
        opcion.innerText = res.Id
        select.appendChild(opcion)
        alert("Registro Exitoso")
        crearTabla(res.Id,res.Nombre,res.Correo,res.Contraseña,res.Cumpleaños)
    })
    .catch(res => {
        alert("Algo ocurrio mal")
        console.log(res)})
}

//Metodo para crear tabla con base de datos, recibe 4 parametros
function crearTabla(a,b,c,d,auxCumple){
    var fila = document.createElement("tr")

    var celda = document.createElement("td")
    celda.innerText = a
    fila.appendChild(celda)
    celda.style.border = "1px solid #000"
    fila.style.border = "1px solid #000"

    var celda = document.createElement("td")
    celda.innerText = b
    fila.appendChild(celda)
    celda.style.border = "1px solid #000"
    fila.style.border = "1px solid #000"

    var celda = document.createElement("td")
    celda.innerText = c
    fila.appendChild(celda)
    celda.style.border = "1px solid #000"
    fila.style.border = "1px solid #000"

    var celda = document.createElement("td")
    celda.innerText = d
    fila.appendChild(celda)
    celda.style.border = "1px solid #000"
    fila.style.border = "1px solid #000"

    var celda = document.createElement("td")
    celda.innerText = auxCumple
    fila.appendChild(celda)

    celda.style.border = "1px solid #000"
    fila.style.border = "1px solid #000"
    tabla.appendChild(fila)
    tabla.style.border = "1px solid #000";
    tabla.style.height = "100px"
    tabla.style.width = "500px"
}