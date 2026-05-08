import "./aluno.css"
import aluno from "../exercicio06/aluno.jpg"

function Aluno({nome, curso,}){
    return(
       <p className="">
         Nome: {nome} <br />
         Idade:{curso} <br />

       </p>
  
    )
    
}

export default Aluno