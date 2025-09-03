const numeros = [10, 20, 30, 40];
const indice = numeros.findIndex(n => n === 30);
if (indice !== -1) {
  numeros.splice(indice, 2); // elimina 1 elemento en esa posición
}
console.log(numeros); // [10, 20, 40]