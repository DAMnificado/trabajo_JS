// Definición de la URL de la API
const API_URL = "https://jsonplaceholder.typicode.com";

// Seleccionar elementos HTML donde se mostrarán las fotos y los comentarios
const contenedorComentarios = document.querySelector("#comments");
const contenedorFotos = document.querySelector("#fotos");

// Función asincrónica para obtener fotos de la API
async function fetchPhotos() {
    try {
        // Obtener la respuesta de la API para las fotos
        const response = await fetch(`${API_URL}/photos`);
        
        // Convertir la respuesta a formato JSON
        const photos = await response.json();
        
        // Obtener las primeras tres fotos
        const firstThreePhotos = photos.slice(0, 3);
        
        // Para cada foto, crear un elemento <img> y agregarlo al DOM
        firstThreePhotos.forEach((photo) => {
            let imgElem = document.createElement("img");
            imgElem.src = photo.thumbnailUrl;
            imgElem.classList.add("foto");
            contenedorFotos.appendChild(imgElem);
        });
    } catch (error) {
        // Manejar errores en caso de fallo en la obtención de fotos
        console.error('Error al obtener mis fotos:', error);
    }
}

// Función asincrónica para obtener comentarios de la API
async function fetchComments() {
    try {
        // Obtener la respuesta de la API para los comentarios
        const response = await fetch(`${API_URL}/comments`);
        
        // Convertir la respuesta a formato JSON
        const comments = await response.json();
        
        // Crear una lista ordenada para almacenar los comentarios
        const ol = document.createElement("ol");
        
        // Obtener los primeros diez comentarios
        const firstTenComments = comments.slice(0, 10);
        
        // Para cada comentario, crear un elemento <li> y agregarlo a la lista
        firstTenComments.forEach((comment) => {
            let elem = document.createElement("li");
            elem.appendChild(document.createTextNode(`${comment.body}`));
            ol.appendChild(elem);
        });
        
        // Agregar la lista de comentarios al DOM
        contenedorComentarios.appendChild(ol);
    } catch (error) {
        // Manejar errores en caso de fallo en la obtención de comentarios
        console.error('Error al obtener mis comentarios:', error);
    }
}

// Llamar a las funciones para obtener fotos y comentarios cuando se carga la página
fetchPhotos();
fetchComments();
