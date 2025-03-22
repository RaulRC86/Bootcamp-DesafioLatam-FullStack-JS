import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { Form } from "./components/Form"
import { Navbar } from "./components/Navbar"



function App() {

  return (
    <>
      <Navbar />
      <Card />
      <Form />
      <Footer description={"© 2018 Cuppon Latam .Todos los derechos RESE."} />
    </>
  )
}

export default App
