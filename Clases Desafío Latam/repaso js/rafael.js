const nombre= prompt("¿Cuál es tu nombre?")

const link = (nombre) => {
  if (nombre === "Darwin") {
    console.log(
      `Excelente trabajo ${nombre}, por favor entra a w3schools.com/react`
    );
  } else {
    console.log(
      "Excelente trabajo Darwin, por favor entra a w3schools.com/react"
    );
  }
};
link(nombre)
