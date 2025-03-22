import { useState } from "react"

function App() {
const [input, setInput]= useState('')

  return (
    <>
    <input
     type="text" 
     value={input}
     onChange={(e)=> setInput(e.target.value)}/>
     <br />
     <code>Valor: {input}</code>
    </>
  )
}

export default App
