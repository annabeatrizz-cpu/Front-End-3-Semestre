import "./filme.css"

function Filme({titulo, ano, genero, nota}){
    return(
       <p>
         titulo: {titulo} <br />
         ano:{ano} <br />
         genero: {genero} <br />
         nota: {nota} <br />

       </p>
  
    )
    
}

export default Filme