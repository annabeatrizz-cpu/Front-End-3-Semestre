import "./perfil.css"

function Perfil({nome, idade, profissao}){
    return(
       <p className="">
         Nome: {nome} <br />
         Idade:{idade} <br />
         Profissao: {profissao} <br />

       </p>
  
    )
    
}

export default Perfil