
import { useState } from 'react'
import './App.css'
import Contador from '../components/contador/contador'
import Formulariostate from '../components/formulariostate/formularo'
import CardFruta from '../components/cardfruta/cardfruta'

function App() {
const[titulo, setTitulo] = useState("Google")
function MudarTexto() {
  setTitulo ("Rafa Chata")
}
function MudarTexto2() {
  setTitulo ("Adenicon")
}
  return (
    <>
    {/* <h1>Minha pagina de {titulo} </h1>
    <button onClick={MudarTexto}>Mudar Texto</button> 
    <br />

    <button onClick={MudarTexto2}>Adenicon</button>
    <Contador />
    <Formulariostate/> */}
    <CardFruta/>
    </>
  )
}

export default App
