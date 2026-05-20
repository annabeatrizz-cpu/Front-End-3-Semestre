const estoque = [
    {
        descricao : "Camisa Polo",
        cor: "verde",
        perfil: "M",
        quantidade: 10
    },
    {
        descricao : "Camisa Polo",
        cor: "Amarela",
        perfil: "F",
        quantidade: 15
    },
    {
        descricao : "Camisa Polo",
        cor: "azul",
        perfil: "M",
        quantidade: 30
    },
    {
        descricao : "Camisa Polo",
        cor: "Roxa",
        perfil: "F",
        quantidade: 8
    }


];

let totCamisetasEmEstoque = estoque.reduce((total, produto) => {

    return total + produto.quantidade;
}, 0);


console.log(`Total de camisetas em estoque: ${totCamisetasEmEstoque}`)
