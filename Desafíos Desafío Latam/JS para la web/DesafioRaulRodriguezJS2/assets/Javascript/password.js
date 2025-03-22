export const password = () => {
  const first = document.querySelector("#first").value;
  const second = document.querySelector("#second").value;
  const third = document.querySelector("#third").value;
  const total = String(first) + String(second) + String(third);
  const clave = document.querySelector(".password");
  if (total == "911") {
    clave.innerHTML = "password 1 correcto";
  } else if (total == "714") {
    clave.innerHTML = "password 2 correcto";
  } else {
    clave.innerHTML = "password incorrecto";
  }
};

export const botonClave= document.querySelector(".botonClave")
