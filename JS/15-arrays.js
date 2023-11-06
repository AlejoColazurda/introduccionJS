//ARREGLOS O ARRAYS

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numeros);

// console.table nos muestra los valores en tablas.
// console.table(numeros);

// puede contener todo tipo de caracter.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

// Acceder a los valores del array
// console.log(numeros[4]);

// Conocer la extension de un arreglo
// console.log(numeros.length);

numeros[5] = 60;

// //Con el uso de la funcion .push() vamos a agregar un valor al final del arrary. Aunque hoy en dia no recomiendan modificar los arrays.
// numeros.push(9, 10, 11);


// // la funcion .unshift() nos agrega los valores al inicio del array.
// numeros.unshift(0, -1, -2, -3);

// console.table(numeros);

// numeros.forEach(function(numeros) {
//     console.log(numeros);
// })


console.table(meses);
