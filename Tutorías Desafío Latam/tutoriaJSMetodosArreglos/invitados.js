const listaDeInvitados = document.querySelector("#invitados") //ul
const invitadoInput = document.querySelector("#nuevoInvitado") 
const btnAgregar = document.querySelector("#agregarInvitado")

const invitados = []
btnAgregar.addEventListener("click", () => {
const nuevoInvitado = invitadoInput.value
invitados.push(nuevoInvitado)
invitadoInput.value = "" /* Vaciamos el input */


let html = ""
for (let invitado of invitados) {
html += `<li>${invitado}</li>`;
}
listaDeInvitados.innerHTML = html;
})