// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`${titulo}`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros que has leído:");
    librosLeidos.forEach((libro, index) => {
        console.log(`${index + 1}. ${libro}`);
    });
}


agregarLibro("Cien Años de Soledad");
agregarLibro("El Principito");
agregarLibro("La Vuelta al Mundo en ochenta dias ")
mostrarLibrosLeidos();
