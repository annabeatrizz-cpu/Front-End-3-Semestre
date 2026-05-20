import { useState } from "react"

function Formulariostate(){
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState ("")

     
    function pegarSobrenome(evento) {
        setSobrenome(evento.target.value)
    }

    return(
        <div>
            <h2>Formulario com State </h2>
          <label htmlFor="nome">Nome</label>
           <input 
              type="text"
              placeholder="Digite seu nome"
              onChange={(batata)  => {
                setNome(evento.target.value )
              }}
           />
           <input 
              type="text"
              placeholder="Digite seu Sobrenome"
              onChange={pegarSobrenome}
           />

           <br />
           <label htmlFor="">Texto Digitado: <strong>{nome} {sobrenome}</strong></label>
           
        </div>
    )
}

export default Formulariostate