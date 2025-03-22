

ID= Number(prompt("Introduce la prioridad"))

function getPrioridad(ID){
    if(ID > 7) {
        alert("Alta Prioridad")
    } else if (ID === 7) {
        alert("Importancia Exacta")
    } else if (ID < 7) {
        alert("Baja Prioridad")
    }
} getPrioridad(ID)



