var fotoPerfil = document.querySelector("img")
var parrafo = document.querySelector("p")
let nombre = prompt(
   "Ingresa tu nombre):"
);
let profesion = prompt(
   "Ingresa tu profesion):"
);

var bordeImagen = prompt("Ingresa un número para darle borde a tu foto")
// bordeImagen = bordeImagen.innerHTML 
fotoPerfil.style.borderRadius = bordeImagen



   parrafo.textContent = `
      Mi nombre es "${nombre}",con la profesion, "${profesion}"<span> apasionado por la creación de soluciones de cualquier cosa sea innovadoras y eficientes.
      </span> Amante del café y de la programación por cierto la imagen tiene unos bordes de  ${bordeImagen}.
      `

  