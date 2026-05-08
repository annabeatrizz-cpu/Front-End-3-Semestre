import "./produto.css"

function Produto({nome, preco, descricao}){
    return(
       <p>
         Nome do produto: {nome} <br />
         Preco: R$ {preco} <br />
         descricao: {descricao} <br />

       </p>
  
    )
    
}

export default Produto