var temperatura= Number(prompt("¿Cuál es la temperatura?"))
var categoria= document.querySelector(".temperatura")

if(temperatura<0){alert("Hace mucho frío")}
else if(temperatura >=0 && temperatura <=10) {alert("Hace frío")}
else if(temperatura >= 11 && temperatura<= 20){alert("Temperatura agradable")}
else if(temperatura >=21 && temperatura <=30){alert("Hace calor")}
else if (temperatura >30){alert("Hace mucho calor")}