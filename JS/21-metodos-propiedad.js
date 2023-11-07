//METODOS DE PROPIEDAD
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`);
    }
}


reproductor.borrarCancion = function(id){
    console.log(`Borrando cancion ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('El DON');
reproductor.reproducirPlaylist(`El DON`);





