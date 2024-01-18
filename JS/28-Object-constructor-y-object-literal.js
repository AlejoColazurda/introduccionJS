//POO

/*Object Literal*/
const porducto = {
    nombre:'Tablet',
    precio: 500
}

/*Object Constructor*/


function Producto(nombre, precio, color,){
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;

}

Producto.prototype.FormatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}


const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('LapTop', 750);
const producto4 = new Producto('IPhone 15', 1220, 'White');
const producto5 = new Producto('Smart Wacht', 590, 'Black');

const cliente = new Cliente('Alejo', 'Colazurda');


function FormatearProducto(producto){
    return `El porducto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}



console.log(producto2.FormatearProducto());
console.log(producto3);
console.log(producto4);
console.log(producto5);

console.log(FormatearProducto(producto2));

