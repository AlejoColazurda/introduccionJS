
//forEach y map solo se pueden ejecutar en arreglos, como en el de carrito.
const carrito = [
    {nombre: 'Monitor 20"', precio: 500},
    {nombre: 'Television 80"', precio: 1000},
    {nombre: 'Tablet', precio: 400},
    {nombre: 'Auriculares', precio: 30},
    {nombre: 'Teclado', precio: 60},
    {nombre: 'Iphone 15', precio: 2500},
    {nombre: 'Parlante Xiaomi', precio: 300},
    {nombre: 'Notebook Asus', precio: 800},
];

//forEach utilizado para iterar o mostrar por consola
carrito.forEach(producto => console.log(producto.nombre));



//map para crear un nuevo arreglo y hay que asignarlo a una nueva variable porque esa se irá llenando con lo que está definido despues de producto.algo
carrito.map( producto=> console.log(producto.nombre));



