//"use strict"; //Correr JS en modo estricto.
//OBJETOS
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponibles: true,
}
Object.freeze(producto);

// producto.imagen = 'imagen.jpg';
// console.log(producto);

//como saber si un objeto esta frizado
console.log(Object.isFrozen(producto));

