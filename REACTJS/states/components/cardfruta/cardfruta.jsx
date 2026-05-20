import { useState } from "react"
import "./cardfruta.css"

function CardFruta() {

const[fruta, setFruta] = useState("")
const[quantidade, setQuantidade] = useState (0)

 const [arrFrutas, setArrFrutas] = useState([
  {id: 1, nome: "Abacaxi", quantidade : 10},
  {id: 2, nome: "Melao", quantidade : 12}
 ])

 function cadastrar(e){
  e.preventDefault()
     setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade}

     ]);
     setFruta("")
     setQuantidade(0)

 }
  
    return(
        <section className="sessao-cadastro">
         <h2>Cadastro</h2>

         <form action="" onSubmit={cadastrar}>
         <fieldset className="cadastro">
            <label htmlFor="fruta" className="cadastro__rotulo">
                Digite o nome da fruta

            </label>
         </fieldset>
         <input 
         type="text"
         id="fruta"
         placeholder="ex: limao"
         className="cadastro__entrada"
         onChange={(e) => {
            setFruta(e.target.value)
         }}
         />

         <input 
         type="text"
         id="quantidade"
         placeholder="Ex: 2"
         className="cadastro__entrada"
         onChange={(e) => {
          setQuantidade(e.target.value)
         }}
         />
         <button type= "submit" className="cadastro__btncadastrar">Cadastro</button>

         </form>
        <div className="resultados">
          <ul>

            {
              arrFrutas.map((f) => {
                  return(
                  <li key={f.id}>
                    Fruta: <strong>{f.nome}</strong>
                    Quantidade: <strong>{f.quantidade}</strong>
                    </li>
                  )
              })
            }
           
          </ul>

        </div>
        
        </section>
    )
}

export default CardFruta