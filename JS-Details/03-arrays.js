let frutasVermelhas = new Array();
let frutasCitricas = ["Limao", "Laranja", "Abacaxi", "Tangerina", "Acerola"]


frutasVermelhas.push("Morango");
frutasVermelhas.push("Maça");
frutasVermelhas.push("Amora");
frutasVermelhas.push("Cereja");

console.log(frutasCitricas);
console.log(frutasVermelhas);
const frutaRemovida = frutasVermelhas.pop();
console.log(frutasVermelhas);

console.log(`${frutaRemovida} foi removida da cesta de frutas`);
