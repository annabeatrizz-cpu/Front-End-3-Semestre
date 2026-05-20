//utilizado para filtrar um elemento dentro de um array. Retorna apenas o encontrado 
const numeros = [5,10, 14];

const encontrado = numeros.filter((n) =>{
    return n == 10;
});

const produtos = [
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

const camisetasFemininas = produtos.filter((camiseta) => {
    return camiseta.perfil == "F";
});


console.log(camisetasFemininas);

console.log("Camisetas polos em estoque: ");
console.log();
  
camisetasFemininas.forEach((item) => {
    console.log(`${item.cor}: ${item.quantidade} unidade(s)`);
});