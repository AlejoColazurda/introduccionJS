const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

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

//forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//Includes es bueno para arrays planos.
let resultado = meses.includes('Marzo');
console.log(resultado);

//Some es buenos para arrays con objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Iphone 15';
});


//Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);//el 0 en esta seccion nos indica el valor inicial


//Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400;
});


console.log(resultado);

