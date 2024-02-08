// Defino la constante para la URL base de la API
const API_URL = "https://jsonplaceholder.typicode.com";

// Selecciono el elemento HTML con el id "app" y lo almaceno en la variable HTMLResponse
const contenedorApp = document.getElementById("app");

const searchInput = document.getElementById("searchInput");

// Selecciono el elemento HTML con el id "fotos" y lo almaceno en la variable HTMLResponsePhoto
const contenedorFoto = document.getElementById("fotos");

// Obtengo los datos de las fotos desde la API y muestro las primeras tres fotos
fetch(`${API_URL}/photos`)
    .then((response) => response.json()) // Parseo la respuesta como JSON
    .then((photos) => {
        // Corto el array para obtener las primeras tres fotos
        const firstThreePhotos = photos.slice(0, 3);
        // Creo un elemento img para cada foto y lo agrego a HTMLResponsePhoto
        firstThreePhotos.forEach((photo) => {
            let imgElem = document.createElement("img");
            imgElem.src = photo.url; // Establece el atributo src de la imagen con la URL de la foto
            imgElem.className = "foto"; // agrega una clase CSS llamada "foto" al elemento img que se está creando dinámicamente
            contenedorFoto.appendChild(imgElem); // Agrega la imagen al contenedor de fotos en el HTML
        });
    })
    .catch(error => console.error('Error al obtener mis fotos:', error)); // Registro cualquier error que ocurra durante la operación fetch

// Obtengo los datos de los usuarios desde la API y muestro sus nombres y correos en una lista
fetch(`${API_URL}/users`)
    .then((response) => response.json()) // Parseo la respuesta como JSON
    .then((users) => {
        // Creo un nuevo elemento de lista no ordenada
        const ul = document.createElement("ul");
        // Itero sobre cada usuario y creo un elemento de lista con su nombre y correo
        users.forEach((user) => {
            let elem = document.createElement("li"); // Crea un nuevo elemento de lista
            elem.innerText = user.name; // Agrega un nodo de texto con el nombre y el correo del usuario al elemento de lista
            ul.appendChild(elem); // Agrega el elemento de lista al elemento de lista no ordenada (ul)
        });
        // Agrego la lista al elemento HTMLResponse
        contenedorApp.appendChild(ul);
    })
    .catch(error => console.error('Error al obtener mis usuarios:', error)); // Registro cualquier error que ocurra durante la operación fetch

    
function manejarBusqueda() {

    const searchTerm = searchInput.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas

    // Realizar la solicitud a la API para obtener los datos de los usuarios
    fetch(`${API_URL}/users`)
        .then((respuesta) => respuesta.json()) // Parsear la respuesta como JSON
        .then((usuarios) => {
            // Verificar si el nombre ingresado por el usuario está presente en los datos de los usuarios
            const usuarioEncontrado = usuarios.find(usuario => usuario.name.toLowerCase() === searchTerm);

            if (usuarioEncontrado) {
                // Si se encuentra el usuario, redirigir a la otra página
                // y pasar el correo del usuario como parámetro de la URL
                window.location.href = `index3.html?correo=${usuarioEncontrado.email}`;
            } else {
                // Si no se encuentra el usuario, mostrar un mensaje de error
                alert("El nombre ingresado no existe");
            }
        })
        .catch(error => console.error('Error al obtener los datos de los usuarios:', error)); // Manejar errores de la solicitud a la API
}

searchInput.addEventListener("keyup", (event) =>{

    if (event.key === "Enter") {
        manejarBusqueda();
    }
});
// Asignar la función manejarBusqueda al evento "click" del botón de búsqueda
const botonBusqueda = document.getElementById("botonBusqueda"); // Suponiendo que el ID del botón de búsqueda es "botonBusqueda"
botonBusqueda.addEventListener("click", manejarBusqueda);
