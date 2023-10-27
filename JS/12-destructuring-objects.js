//OBJETOS
const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponibles: true,
}

//Forma antigua
//  const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

//  console.log(precioProducto);
//  console.log(nombreProducto);


//Destructuring
const {precio, nombreProducto, disponibles} = producto;


console.log(precio);
console.log(nombreProducto);
console.log(disponibles);