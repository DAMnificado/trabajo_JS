// URL de la API
const API_URL = "https://jsonplaceholder.typicode.com";

// Obtengo elementos HTML
const contenedorApp = document.getElementById("app");
const barraBusqueda = document.getElementById("searchInput");
const contenedorFoto = document.getElementById("fotos");

// Realizo una solicitud a la API para obtener fotos
fetch(`${API_URL}/photos`)
    .then((response) => response.json()) 
    .then((photos) => {
        // Selecciono las primeras tres fotos
        const firstThreePhotos = photos.slice(0, 3);
        // Creo un elemento img para cada foto y las agrego al contenedor de fotos en el HTML
        firstThreePhotos.forEach((photo) => {
            let imgElem = document.createElement("img");
            imgElem.src = photo.url; 
            imgElem.className = "foto"; 
            contenedorFoto.appendChild(imgElem); 
        });
    })
    .catch(error => console.error('Error al obtener mis fotos:', error)); 

// Realizo una solicitud a la API para obtener datos de usuarios
fetch(`${API_URL}/users`)
    .then((response) => response.json()) 
    .then((users) => {
        // Creo una lista para mostrar los nombres de los usuarios
        const ul = document.createElement("ul");
        // Itero sobre cada usuario y creo un elemento de lista con su nombre
        users.forEach((user) => {
            let elem = document.createElement("li");
            elem.innerText = user.name; 
            ul.appendChild(elem); 
        });
        // Agrego la lista al contenedor de la aplicación en el HTML
        contenedorApp.appendChild(ul);
    })
    .catch(error => console.error('Error al obtener mis usuarios:', error)); 

// Función para manejar la búsqueda de usuarios
function manejarBusqueda() {
    const searchTerm = barraBusqueda.value.toLowerCase(); 
    // Realizo una solicitud a la API para obtener datos de usuarios
    fetch(`${API_URL}/users`)
        .then((respuesta) => respuesta.json()) 
        .then((usuarios) => {
            // Busco si el nombre ingresado está presente en los datos de los usuarios
            const usuarioEncontrado = usuarios.find(usuario => usuario.name.toLowerCase() === searchTerm);
            if (usuarioEncontrado) {
                // Si encuentro el usuario, redirijo a otra página y paso el correo del usuario como parámetro de la URL
                window.location.href = `index3.html?correo=${usuarioEncontrado.email}`;
            } else {
                // Si no encuentro el usuario, muestro un mensaje de error
                alert("El nombre ingresado no existe");
            }
        })
        .catch(error => console.error('Error al obtener los datos de los usuarios:', error)); 
}

// Agrego un evento para manejar la búsqueda cuando se presiona "Enter" en el campo de búsqueda
barraBusqueda.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        manejarBusqueda();
    }
});

// Agrego un evento para manejar la búsqueda cuando se hace clic en el botón de búsqueda
const botonBusqueda = document.getElementById("botonBusqueda"); 
botonBusqueda.addEventListener("click", manejarBusqueda);
