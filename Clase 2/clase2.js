//! Funciones ternarias explicacion

// function minimo(a,b){
//     if(a < b){
//         return a;
//     }else{
//         return b;
//     }
// }

//! Forma simplificada con operador ternario

const res = (a, b) => (a < b) ? a : b

console.log('El minimo es: ' + res(5, 10))

//! Composicion de Funciones

const and = (p, q) => (x) => p(x) && q(x)

const esPar = (n) => !(n % 2)
const esMenorQue10 = (n) => n < 10

const paryMenorque10 = and(esPar, esMenorQue10)
console.log(paryMenorque10(8))

//! Funciones de Orden Superior
// ? reciben como parametro una funcion o devuelven como parametro una funcion

//! Funcion base

// const operar = (num, fun) => {
//     return (x) => fun(num) + x;
// }
const operar = (num, fun) => (x) => fun(num) + x

const moverDerecha = (n) => n + 1
const moverIzquierda = (n) => n - 1

const mx = operar(5, moverDerecha)
const my = operar(5, moverIzquierda)

console.log(mx(10))
console.log(my(10))

console.log(
  operar(5, moverDerecha)(10)
)

//! otra uso mas simple
const f2 = (n) => n + 1

const f1 = (x, y, f) => {
  const r = x + y + f(x)
  return r
}

console.log(f1(1, 2, f2))

//! mas funciones

const suma = (x) => x + 1

const duplicar = (f) => (x) => f(f(x))// ? primera paso de la funcion 6 luego 7

console.log(duplicar(suma)(5))

//! Metodo reduce

const arr = [3, 5, 7, 5, 9]

const redu = arr.reduce((acc, curr, i, arr) => {
  console.log({ acc, curr, i, arr })
  return acc + curr
}, 0)

console.log(redu)

const initValue = 0

const sumaArr = arr.reduce((acc, curr) => acc + curr, initValue)

console.log(sumaArr)

const value = ['hola', 'mundo', 'JavaScript'].reduce(
  (acc, w, i) => (i ? acc + '-' + w : w)
)

console.log(value)

const item = [1, 2, 3, 4, 1, 4, 1, 1, 3, 2, 4, 5, 2, 1]

const noDuplicados = item.reduce(
  (acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item)
    }
    return acc
  }, []
)

console.log(noDuplicados)

//! Contar la cantidad de ocurrencias que hay en una lista de frutas

const frutas = ['manzana', 'banana', 'naranja', 'manzana', 'kiwi', 'banana']

const contar = frutas.reduce(
  (acc, currentFruta) => {
    acc[currentFruta] = (acc[currentFruta] || 0) + 1
    return acc
  }, {}
)

console.log(contar)

//! objetos
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid',
  profesion: 'Desarrollador',
  genero: 'Masculino',
  casado: true,
  antiguedad: 5
}

console.log(persona.nombre)
console.log(persona.edad)

// ? La direccion de memoria es constante pero no los atributos internos del objeto (uso de const)

const ejemplo = {
  nombre: 'saludar',
  fn: () => console.log('Hola')

}
console.log(ejemplo.nombre)
ejemplo.fn()

//! otro ejemplo

const fns = [
  {
    name: 'doble',
    fn: (x) => x * 2

  },
  {
    name: 'cuadrado',
    fn: (x) => x * x
  },
  {
    name: 'suma5',
    fn: (x) => x + 5
  }
]

const result = fns.map(({ name, fn }) => {
  return {
    nombre: name,
    apellido: name + 'Algo'
  }
})

console.log(result)

//! Actividad N2
//! Ejercicio 1
// ? Teniendo en cuenta la siguiente lista:
const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10]

const suma1 = nums.reduce((acc, curr) => acc + curr, 0)

console.log('Suma total: ' + suma1)

//! Ejercicio 2
// ? Calcular la suma de los cuadrados de los numeros impares

const sumaImpares = nums.filter(n => n % 2 === 1).map(n => n * n).reduce((acc, curr) => acc + curr, 0)
const sumaImparesV2 = nums.reduce((acc, curr) => (curr %2 ? acc + curr * curr : acc), 0)

console.log('Suma de cuadrados de impares: ' + sumaImpares)

console.log('Suma de cuadrados de impares: ' + sumaImparesV2)
//! Ejercicio 3
// ? Teniendo en cuenta la siguiente lista de frases, deberas encontrar la frase mas larga.

const frases = [
  'La tecnología cambia el mundo',
  'Programar es crear soluciones',
  'Aprender haciendo es aprender mejor',
  'JavaScript es flexible y poderoso'
]

const fraseMasLarga = frases.reduce((acc, curr) => acc.length >= curr.length ? acc : curr, '')

console.log('Frase más larga: ' + fraseMasLarga)

//! Ejercicio 4
// ?  Obtener del array “nums“, el mínimo y máximo de la lista en una sola pasada , retornando un objeto {min, max}

const minMax = nums.reduce((acc, curr) => {
  if (curr < acc.min) {
    acc.min = curr
  }
  if (curr > acc.max) {
    acc.max = curr
  }
  return acc
}, { min: Infinity, max: -Infinity })

console.log('Mínimo: ' + minMax.min)
console.log('Máximo: ' + minMax.max)

//! Ejercicio 5
// ? Dada una lista de notas {curso, nota}, devolvé {curso: promedio} sin recorrer dos veces (acumulá sumas y conteos en el mismo reduce).Entrada de ejemplo:

const Lista = [
  { c: 'A', n: 8 },
  { c: 'B', n: 6 },
  { c: 'A', n: 10 }
] //* Salida esperada: { A:9, B:6 }

const notas = Lista.reduce((acc, curr) => {
  curr.c === 'A' ? (acc.A.suma += curr.n, acc.A.count += 1) : (acc.B.suma += curr.n, acc.B.count += 1)
  return acc
}, { A: { suma: 0, count: 0 }, B: { suma: 0, count: 0 } })
console.log(notas)
const promedios = {
  A: notas.A.suma / notas.A.count,
  B: notas.B.suma / notas.B.count
}
console.log(promedios)

//! Ejercicio 6
// ? Dada el numero de DNI de una persona, se pide calcular la suma de sus numeros
const dni = '20385978'

const sumaDni = dni.split('').reduce((acc, cur) => acc + parseInt(cur), 0)
console.log('Suma de los números del DNI: ' + sumaDni)

//! Ejercicio 7
// ? dado el siguiente texto:
const texto = 'En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación'

const textArr = texto.split(' ')
console.log('cantidad de palabras:' + textArr.length)
console.log(textArr)
const espacios = [...texto].reduce((acc, curr) => curr === ' ' ? acc + 1 : acc, 0)
console.log('Cantidad de espacios: ' + espacios)
