/* let valor = 4;

function Suma(a,b){
    return a + b + valor;

};

const s = Suma(2,5);

console.log("Valor de la suma: " + s);

*/

// Funcion anonima/lambda/flecha

// const resultado = (a,b) => {return a + b};
// const resultado = (a,b) => a + b;
// console.log(resultado(4,4));
// const m = 1
// const b = 3

// const lineal = (x) => m*x + b;
// console.log(lineal(1))

// const doble = (n)=>n*n;
// console.log(doble(2))

// DOS FORMAS DE HACER UNA FUNCION DOBLE O MAYOR

// const calcular = (n) =>{
//     return (x) => {
//         return n*x;
//     };
// };
// const resultado = calcular(2);
// console.log(resultado(3));

// const calcular= (n) => (x) => n*x;
// const resultado = calcular(2)(3);
// console.log(resultado);

// ejercicio en clases

// const funcionlineal = (fn,x)=> fn(x); //funcion de orden superior..

// const t1 = funcionlineal((n) => n*5,2);

// console.log("funcion testing f(2) = " +t1);

// ESTRUCTURAS - ARRAYS
// - SOME
// - EVERY
// - MAP
// - FILTER
// - REDUCE

const arr = [3, 5, 7, 5, 9]
console.log('array normal ' + arr)

const res1 = arr.some(e => e % 2 === 0) // Necesita una funcion anonima
console.log('array con some ' + res1)

const res2 = arr.every(e => e % 2 === !0) // TRUE/FALSE si todos los elementos cumplen con la condicion
console.log('array con every ' + res2)

const res3 = arr.map(e => e * 2) // devuelve una copia del array aplicando la funcion y modificando la original
console.log('array con map ' + res3)

const arr2 = [3, 5, 7, 5, 9, 10, 3, 6, 8, 2]
const res4 = arr2.filter(e => e % 2 === 0) // devuelve los datos coincidentes
console.log('array con filter ' + res4)

const res5 = arr.reduce((acc, e) => acc + e, 0) // devuelve el resultado de la funcion aplicada a todos los elementos del array
console.log('array con reduce ' + res5)

//* Practica 1
const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99]
//! Ejercicio 1
const respuesta1 = lista.some(e => e > 8)
console.log('Respuesta 1: ' + respuesta1)

//! Ejercicio 2
const respuesta2 = lista.every(e => e > 0)
console.log('Respuesta 2: ' + respuesta2)

//! Ejercicio 3
const respuesta3 = lista.filter(e => e % 2 === 0)
console.log('Respuesta 3: ' + respuesta3)

//! Ejercicio 4
const respuesta4 = lista.map(e => e * e)
console.log('Respuesta 4: ' + respuesta4)

//! Ejercicio 5
const arrMayores3 = lista.filter(e => e > 3)
console.log('Array mayores a 3: ' + arrMayores3)
const respuesta5 = arrMayores3.every(e => e % 2 === 0)
console.log('Respuesta 5: ' + respuesta5)

//! Ejercicio 6
const arrMenores6 = lista.filter(e => e < 6)
console.log('Array menores a 6: ' + arrMenores6)
const respuesta6 = arrMenores6.map(e => e % 2 === 0 ? 'par' : 'impar') // ? operador ternario "? valorSiVerdadero : valorSiFalso"
console.log('Respuesta 6: ' + respuesta6)

//! Ejercicio 7
const arr7 = [3, 6, 6, 7, 12, 10, 4, 13, 1]
const mayoresIguales10 = arr7.filter(e => e >= 10)
console.log('Respuesta 7: ' + mayoresIguales10)
const respuesta7 = mayoresIguales10.filter(e => e % 2 === 0)
console.log('Respuesta 7: ' + respuesta7)

//! Ejercicio 8
const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1]

const copia = Numbers.map(e => e <= 10 ? e : 'X')
console.log(copia)
