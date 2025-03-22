// Métodos de Arreglos


const array= ['😁', 'cat', 986, true]

// .map crea un array nuevo

const resultado= array.map(e => e*2)

console.log(resultado)

console.log(array)

// forEach NO crea un array nuevo, sino que modifica para estraer información

const arrayNumber= [2, 7, 67, 8, 90]

arrayNumber.forEach(numero => console.log(numero*2))

// Filter vs Find
// Filter crea un array con elementos que cumplen una condición

const numeros=[1,2,3,4,5,77,22]

const pares= numeros.filter(n=> n%2===0)

console.log(pares)

//find devuelve el primer elemento que cumple la condición

const primer= numeros.find(n=> n%2===0)
console.log(primer)

// flat une "sub-arreglos" al "arreglo principal"

const plano=numeros.flat()
console.log(plano)
