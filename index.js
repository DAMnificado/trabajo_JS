// Defino la constante para la URL base de la API
const API_URL = "https://jsonplaceholder.typicode.com";

// Selecciono el elemento HTML con el id "app" y lo almaceno en la variable HTMLResponse
const HTMLResponse = document.querySelector("#app");

// Selecciono el elemento HTML con el id "fotos" y lo almaceno en la variable HTMLResponsePhoto
const HTMLResponsePhoto = document.querySelector("#fotos");

// Obtengo los datos de las fotos desde la API y muestro las primeras tres fotos
fetch(`${API_URL}/photos`)
    .then((response) => response.json()) // Parseo la respuesta como JSON
    .then((photos) => {
        // Corto el array para obtener las primeras tres fotos
        const firstThreePhotos = photos.slice(0, 3);
        // Creo un elemento img para cada foto y lo agrego a HTMLResponsePhoto
        firstThreePhotos.forEach((photo) => {
            let imgElem = document.createElement("img");
            imgElem.src = photo.url;
            imgElem.classList.add("foto");
            HTMLResponsePhoto.appendChild(imgElem);
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
            let elem = document.createElement("li");
            elem.appendChild(document.createTextNode(`${user.name} ${user.email}`));
            ul.appendChild(elem);
        });
        // Agrego la lista al elemento HTMLResponse
        HTMLResponse.appendChild(ul);
    })
    .catch(error => console.error('Error al obtener mis usuarios:', error)); // Registro cualquier error que ocurra durante la operación fetch

