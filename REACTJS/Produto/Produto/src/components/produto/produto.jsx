import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'
import axios from "axios"
import api from "../../services/services"

export default function Produto() {

    const [id, setId] = useState(0)
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [editar, setEditar] = useState(false)
    // const [produto, setProduto] = useState({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })

    const [arrProdutos, setArrProdutos] = useState([])

    async function cadastrarProduto(e) {
        e.preventDefault()//nao deixa o formulario ser postado
        // validar o formulario


        // alert("Funcao Cadastrar Chamada")
        // return false

        if (nome.trim().length == 0 || descricao.trim().length == 0 ||
            isNaN(preco) || isNaN(quantidade)
        ) {
            alert("Preencha os campos corretamente!")
            return false;
        }

        //gerar o objeto que vai na api

        const objCadastro = {
            nome: nome,
            descricao: descricao,
            quantidade: quantidade,
            preco: preco,
            imagem: "Imagem.jpg"
        }


        console.log(objCadastro);

        try {
            const retornoAPI = await axios.post("/produtos",objCadastro)
            console.log(retornoAPI);
            if (retornoAPI.status == 201) {
                const dados = await retornoAPI.data
                // console.log(dadosCadastrados);
                setArrProdutos([...arrProdutos, dados])
                alert("Produto cadastrado com sucesso")
                limparFormulario()

            } else {
                alert("Problema inesperado")
            }
        } catch (error) {
            alert("Nao foi possivel salvar os dados");
            console.log(error);
        }
        //cadastrar n api


    }

    function limparFormulario() {
        setId(0)
        setNome("")
        setDescricao("")
        setQuantidade(0)
        setPreco(0)
    }




    useEffect(() => {
        //faz requisicao na api

        getProdutos()
        //jogar os dados no state 

    }, [])

    async function getProdutos() {
        try {
            const retornoAPI = await axios.get("/produtos")

            //transforma o retorno que e json em objetos javaescript
            const dados = await retornoAPI.data;

            // console.log(dados);
            //inserir os dados no state
            setArrProdutos(dados)

        } catch (error) {
            console.log("Erro ao buscar os produtos");
            console.log(error)
        }
    }
    async function deletar(id) {
      if (!confirm("Voce quer realmente apagar o produto?")) {
        return false;
      }


        try {
            const retornoAPI = await api.delete(`/produtos/${id}`,);
            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto apagado com sucesso")

                const novaLista = arrProdutos.filter((prod) => {
                    return prod.id != id
                });


                setArrProdutos(novaLista)

            } else {
                alert("Algum erro ocorreu ao apagar")

            }

        } catch (error) {
            alert("Erro ao apagar o produto")
            console.log(error);
        }
    }

    async function editarProduto(e) {
        e.preventDefault()


        if (nome.trim().length == 0 ||
            descricao.trim().length == 0 ||
            isNaN(preco) || preco <= 0 ||
            isNaN(quantidade) || quantidade <= 0

        ) {
            alert("Preencha os campos corretamente!")
            return false;
        }

        //gerar o objeto que vai na api

        const objCadastro = {
            nome: nome,
            descricao: descricao,
            quantidade: quantidade,
            preco: preco,
            imagem: "Imagem.jpg"
        };



        try {
            const retornoAPI = await axios.put(`/produtos/${id}`,);

            if (retornoAPI.status == 200) {
                alert("Produto alterado com sucesso");
                getProdutos();
                limparFormulario();
                setEditar(false);


            } else {
                alert("Erro ao editar")
            }

           


        } catch (error) {
            alert("Erro ao editar o produto")
            console.log(error);


        }




    }

    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza" >SENAI</h1>
                <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={editar ? editarProduto : cadastrarProduto}>
                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                    <input className="input--metade" type="text" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input className="input--metade" type="number" id="preco" placeholder="Preço" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
                    <input className="input--metade" type="number" id="quantidade" placeholder="Quantidade" value={quantidade} onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                    <input className="input--metade" type="text" id="descricao" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>

                {editar && <button
                    type="submit"
                    className="btn--cadastro"
                    onClick={() => {
                        setEditar(false);
                        setId(0)
                        limparFormulario()


                    }}
                >Cancelar
                </button>}{" "}

                <button type="submit" className="btn--cadastro">Adicionar Produto</button>
            </form>


            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <p>Quantidade: {prod.quantidade}</p>

                        <img src={img} alt={prod.name} />
                        <a href=""
                            onClick={(e) => {
                                e.preventDefault()
                                deletar(prod.id)
                            }}>Apagar

                        </a>
                        <button className="produtod__btn-comprar">Comprar</button>

                        <a href=""
                            onClick={(e) => {
                                e.preventDefault()

                                setEditar(true)
                                setId(prod.id)
                                setNome(prod.nome)
                                setDescricao(prod.descricao)
                                setPreco(prod.preco)
                                setQuantidade(prod.quantidade)
                            }}>
                            Editar

                        </a>
                    </div>
                ))}
            </section>
        </>
    )
}