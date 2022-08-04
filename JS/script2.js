
let Formulario = document.getElementById("formulario");

Formulario.addEventListener("submit", validateForm);

function validateForm(e){

e.preventDefault();

let form = e.target

console.log(form[0].value)
console.log(form[1].value)

console.log("Formulario Enviado"); 
}   