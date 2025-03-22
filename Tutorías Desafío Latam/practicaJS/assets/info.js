// Seleccionamos los elementos del DOM
const formulario = document.getElementById("formulario");
const submitButton = document.querySelector(".submitButton");
const resultDiv = document.querySelector(".result");

submitButton.addEventListener("click", function () {


    /* ------------- CON TODOS LOS DEMAS ASI PUEDEN VER LOS VALORES ------------- */
    /* ---------- const nombre = document.querySelector("#name").value ---------- */

    const nombre = document.querySelector("#name")
    console.log(nombre.value)

    const email = document.querySelector("#email")
    console.log(email.value)

    const fechaNacimiento = document.querySelector("#fecha")
    console.log(fechaNacimiento.value)

    const colorFavorito = document.querySelector("#color")
    console.log(colorFavorito.value)

    const telefono = document.querySelector("#telefono")
    console.log(telefono.value)


    const nivelSatisfaccion = document.querySelector("#rango")
    console.log(nivelSatisfaccion.value)

    const archivo = document.querySelector("#archivo").files[0];
    console.log(archivo)

    const aceptarTerminos = document.querySelector("#checked").checked
    console.log(aceptarTerminos, "checked")

    if (!nombre || !email || !fechaNacimiento || !telefono || !aceptarTerminos) {
        resultDiv.innerHTML = "<p>Por favor completa todos los campos y acepta los términos.</p>";
        return;
    }

    resultDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Fecha de nacimiento:</strong> ${fechaNacimiento}</p>
        <p><strong>Color favorito:</strong> ${colorFavorito}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Nivel de satisfacción:</strong> ${nivelSatisfaccion}/10</p>
        <p><strong>Archivo subido:</strong> ${archivo ? archivo.name : 'No se subió archivo'}</p>
        <p><strong>Aceptó los términos:</strong> ${aceptarTerminos ? 'Sí' : 'No'}</p>
    `;


    nombre.value = ""
    email.value = ""
    fechaNacimiento = ""
    colorFavorito = ""
    telefono = ""
    nivelSatisfaccion = ""
    archivo = ""
    aceptarTerminos = ""

});
