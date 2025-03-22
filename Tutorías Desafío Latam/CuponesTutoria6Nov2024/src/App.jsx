import { Card } from "./components/card/Card"
import { Footer } from "./components/footer/Footer"
import { Formulario } from "./components/formulario/Form"
import { Navbar } from "./components/navegacion/Navbar"



function App() {

  return (
    <>
      <Navbar />
      <Card />
      <Formulario />
      <Footer description={"© 2018 Cuppon Latam .Todos los derechos RESE."} />
    </>
  )
}

export default App
