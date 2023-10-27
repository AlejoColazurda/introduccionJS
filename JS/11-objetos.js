//OBJETOS

// const NombreProducto = "Monitor 20 pulgadas";
// const precio = 300;
// const disponible = true;

const producto = {
    nombreProducto: "Monitor 20 pulgadas",
    precio: 300,
    disponibles: true,
}

// console.log(producto);
// console.log(producto.precio);
// console.log(producto['disponibles']);
// console.log(`el valor del ${producto.nombreProducto} es de ${producto.precio}`);

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//Eliminar propiedades
delete producto.disponibles;





console.log(producto);