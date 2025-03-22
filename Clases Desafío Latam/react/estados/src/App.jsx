import { useState } from "react"

const App = ()=>{
  const [Contador, setContador]= useState(0)
  return(
    <>
    <p>El número es: {Contador}</p>
    <button onClick={()=>setContador(Contador+1)}>Sumar</button>
    <button onClick={()=> Contador <= 0 ? alert("el número no puede bajar de cero")
      : setContador(Contador -1)
    }>Restar</button>

   </>

    

  )
}
export default App