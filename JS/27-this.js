//this
const reservacion= {
    nombre: 'Alejo',
    apellido: 'Colazurda',
    total: '3000',
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad total a pagar es de ${this.total}`);
    }
}


console.log(reservacion.informacion());
