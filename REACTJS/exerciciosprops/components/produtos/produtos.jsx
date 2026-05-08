import "./produtos.css"
import Produto from "../exercicio02/produto"

function Produtos() {
    const produtos= [
       
        {
            nome: "Tenis de marca",
            preco: 550,
            descricao: "Tenis Chique!!"
        },
       
        {
            nome: "Camiseta de marca",
            preco: 150,
            descricao: "Camisa Chique!!"
        },
    ]

    return(
        produtos.map((produtinho) => {
            return(
                <Produto
                nome={produtinho.nome}
                preco={produtinho.preco}
                descricao={produtinho.descricao}                
                />
            )
        })
    )
}

export default  Produtos