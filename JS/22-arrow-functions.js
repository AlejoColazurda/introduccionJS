//ARROW FUNCTIONS
const sum = (n1, n2) => console.log(n1 + n2);



//Funcion sin utilizar arrow function
const sumar2 = function(a, b){
    console.log(a + b);
}
sumar2(5, 10);

sum(5, 5);

//En caso de que tengamos un solo parametro no es necesario que usemos los parentesis como en el caso de (tecnologia).
const aprendiendo= (tecnologia)=> {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript');

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
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;

// Includes es bueno para arrays planos.
// let resultado = meses.includes('Marzo');
// console.log(resultado);


//Some es buenos para arrays con objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'Iphone 15';
});
//Si la hicieramos con arrow function quedaria de la siguiente forma
resultado = carrito.some( producto => producto.nombre === `Iphone 15`);
console.log(resultado);

//Reduce
resultado = carrito.reduce((total, producto) =>
    total + producto.precio
, 0);//el 0 en esta seccion nos indica el valor inicial
console.log(resultado);

//Filter
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== `Iphone 15`);
console.log(resultado)




