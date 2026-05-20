const hobbies = [
    "Jogar Basquete", 
    "Conversar Muito", 
    "Ouvir Musica",
    "Jogar Video Game", 
    "Fazer Brownie"
];

//Array map e um metodo da classe array que 
// itera sobre o array retornando um novo array, 
// compondo um novo resultado para cada indice antigo, veja: 


const novosHobbies = hobbies.map((hobby) => {

   return `<p> ${hobby}</p>`;

});

console.log(novosHobbies);