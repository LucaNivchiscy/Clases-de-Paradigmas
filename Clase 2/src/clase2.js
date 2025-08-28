//!Funciones ternarias explicacion

// function minimo(a,b){
//     if(a < b){
//         return a;
//     }else{
//         return b;
//     }
// }

//! Forma simplificada con operador ternario

const res = (a,b) => (a < b) ? a : b; 

console.log("El minimo es: " + res(5,10));

//!Composicion de Funciones

const and = (p,q) => (x) => p(x) && q(x);

const esPar = (n) => !(n%2);
const esMenorQue10 = (n) => n < 10;

const paryMenorque10 = and(esPar,esMenorQue10);
console.log(paryMenorque10(8));

//! Funciones de Orden Superior
//? reciben como parametro una funcion o devuelven como parametro una funcion

//! Funcion base

// const operar = (num, fun) => {
//     return (x) => fun(num) + x;
//}
const operar = (num, fun) => (x) => fun(num) + x;


const moverDerecha = (n) => n + 1;
const moverIzquierda = (n) => n - 1;

const mx = operar(5, moverDerecha);
const my = operar(5, moverIzquierda);

console.log(mx(10));
console.log(my(10));

console.log(
    operar(5, moverDerecha)(10)
);

//! otra uso mas simple
const f2 = (n) => n +1;

const f1 = ( x,y,f) => {
    let r = x+y + f(x);
    return r
}

console.log(f1(1,2,f2));

//! mas funciones

const suma = (x) => x + 1;

const duplicar = (f) => (x) => f(f(x));//? primera paso de la funcion 6 luego 7

console.log(duplicar(suma)(5));

//! Metodo reduce

const arr = [3,5,7,5,9];

const redu = arr.reduce((acc, curr, i, arr) => {
    console.log({acc, curr, i, arr});
    return acc + curr;
}, 0);

console.log(redu);

const initValue = 0;

const sumaArr = arr.reduce((acc, curr) => acc + curr, initValue);

console.log(sumaArr);

const value = ["hola", "mundo", "JavaScript"].reduce(
    (acc, w, i) => (i ? acc + "-" + w : w)
);

console.log(value);

const item = [1,2,3,4,1,4,1,1,3,2,4,5,2,1];

const noDuplicados = item.reduce(
    (acc, item)=>{
        if (!acc.includes(item)){
            acc.push(item);
        }
        return acc;
    }, []
);

console.log(noDuplicados);

//! Contar la cantidad de ocurrencias que hay en una lista de frutas

const frutas = ["manzana", "banana", "naranja", "manzana", "kiwi", "banana"];

const contar = frutas.reduce(
    (acc, currentFruta) => {
        acc[currentFruta] = (acc[currentFruta] || 0) + 1;
        return acc

    }, {}
)

console.log(contar);


//! objetos
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    profesion: "Desarrollador",
    genero: "Masculino",
    casado: true,
    antiguedad: 5
};


console.log(persona.nombre);
console.log(persona["edad"]);

//? La direccion de memoria es constante pero no los atributos internos del objeto (uso de const)


const ejemplo = {
    nombre: "saludar",
    fn: () => console.log("Hola")

}
console.log(ejemplo.nombre);
ejemplo.fn();


//!otro ejemplo

const fns = [
    {
        name: "doble",
        fn: (x) => x * 2

    },
    {
        name: "cuadrado",
        fn: (x) => x * x
    },
    {
        name: "suma5",
        fn: (x) => x + 5
    },
];

const result = fns.map( ({name,fn} ) =>{
    return {
        nombre: name,
        apellido: name +"Algo"
    }
});

console.log(result)