const numeros = [10, 20, 30, 40]
const indice = numeros.findIndex(n => n === 20)
if (indice !== -1) {
  numeros.splice(indice, 2) // elimina 1 elemento en esa posición
}
console.log(numeros) // [10, 20, 40]

const n2 = [1, 2, 3, 4]
const suma = n2.reduce((acumulador, n) => acumulador + n, 0)
console.log(suma) // 10
