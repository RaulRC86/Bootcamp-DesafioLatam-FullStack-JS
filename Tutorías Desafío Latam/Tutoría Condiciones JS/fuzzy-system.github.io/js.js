var temp = prompt("ingrese temperatura actual en grados celsius")
var temp = Number(temp)
var categoria = document.querySelector(".temperatura")
var resultadoCategoria = ""
var fondo = document.querySelector("body")
color = "orange"

if(temp < 0){
 resultadoCategoria = "hace mucho frio"
 color = "blue"
}else if(temp <= 10){
    resultadoCategoria = "hace frio"
    color = "aqua"
}else if(temp <= 20){
    resultadoCategoria = "temperatura agradable"
    color = "green"
}else if(temp <= 30){
    resultadoCategoria = "hace calor"
    color = "yellow"
}else{
    resultadoCategoria = "hace mucho calor"
    color = "red"
}
categoria.innerHTML = resultadoCategoria
fondo.style.backgroundColor = color