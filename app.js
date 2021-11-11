
alert("A continuacion deberas ingresar tus datos");
function Persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
};
const newPerson = () => {
    return new Persona(prompt("Ingresa tu nombre por favor"), prompt("Ingresa tu apellido por favor"), parseInt(prompt("Ingresa tu edad por favor")));
};
let datosPersona = newPerson();
let datosJSon = JSON.stringify(datosPersona);
localStorage.setItem("datos", datosJSon);
 function saludarPersona () {
     alert("Bienvenido "+ datosPersona.nombre + " " + datosPersona.apellido);
 };
 if (datosPersona.edad > 18) {
     saludarPersona()
 }else {
     alert("Debes ser mayor de 18 años para poder ingresar");
 }

$(document).ready(function(){
    console.log("The DOM is ready");
}) 