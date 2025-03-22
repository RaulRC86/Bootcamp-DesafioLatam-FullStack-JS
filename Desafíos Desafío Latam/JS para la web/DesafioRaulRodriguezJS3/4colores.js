var div1= document.querySelector("#div1")
var div2= document.querySelector("#div2")
var div3= document.querySelector("#div3")
var div4= document.querySelector("#div4")

div1.style.width="200px"
div1.style.height="200px"
div1.style.backgroundColor="blue"

div2.style.width="200px"
div2.style.height="200px"
div2.style.backgroundColor="red"

div3.style.width="200px"
div3.style.height="200px"
div3.style.backgroundColor="green"

div4.style.width="200px"
div4.style.height="200px"
div4.style.backgroundColor="yellow"

function aNegro(event) {
    event.target.style.backgroundColor = "black";
}
div1.addEventListener('click', aNegro);
div2.addEventListener('click', aNegro);
div3.addEventListener('click', aNegro);
div4.addEventListener('click', aNegro);