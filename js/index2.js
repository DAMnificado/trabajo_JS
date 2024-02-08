// Defino la constante para la URL base de la API
const API_URL = "https://jsonplaceholder.typicode.com";

// Selecciono el elemento HTML con el id "app" y lo almaceno en la variable HTMLResponse
const HTMLResponse = document.querySelector("#comments");

// Selecciono el elemento HTML con el id "fotos" y lo almaceno en la variable HTMLResponsePhoto
const HTMLResponsePhoto = document.querySelector("#fotos");

// Función para obtener las fotos desde la API
async function fetchPhotos() {
    try {
        // Obtengo los datos de las fotos desde la API
        const response = await fetch(`${API_URL}/photos`);
        const photos = await response.json();

        // Corto el array para obtener las primeras tres fotos
        const firstThreePhotos = photos.slice(0, 3);

        // Creo un elemento img para cada foto y lo agrego a HTMLResponsePhoto
        firstThreePhotos.forEach((photo) => {
            let imgElem = document.createElement("img");
            imgElem.src = photo.thumbnailUrl;
            imgElem.classList.add("foto");
            HTMLResponsePhoto.appendChild(imgElem);
        });
    } catch (error) {
        console.error('Error al obtener mis fotos:', error);
    }
}

// Función para obtener los comentarios desde la API
async function fetchComments() {
    try {
        // Obtengo los datos de los comentarios desde la API
        const response = await fetch(`${API_URL}/comments`);
        const comments = await response.json();

        // Creo un nuevo elemento de lista no ordenada
        const ol = document.createElement("ol");
        const firstTenComments = comments.slice(0, 10); // Obtengo los primeros 10 comentarios

        // Itero sobre cada comentario y creo un elemento de lista con su contenido
        firstTenComments.forEach((comment) => {
            let elem = document.createElement("li");
            elem.appendChild(document.createTextNode(`${comment.body}`)); // Accedo al cuerpo del comentario
            ol.appendChild(elem);
        });

        // Agrego la lista al elemento HTMLResponse
        HTMLResponse.appendChild(ol);
    } catch (error) {
        console.error('Error al obtener mis comentarios:', error);
    }
}

// Llamo a las funciones para obtener las fotos y los usuarios
fetchPhotos();
fetchComments();
