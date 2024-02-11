// Creo un objeto URLSearchParams a partir de los parámetros de la URL actual
const urlParams = new URLSearchParams(window.location.search);

// Extraigo el valor del parámetro 'correo' de la URL
const correoUsuario = urlParams.get('correo');

// Selecciono el elemento HTML donde se mostrará el correo del usuario
const correoUsuarioElement = document.getElementById('correoUsuario');

// Establezco el contenido de texto del elemento con el correo del usuario
correoUsuarioElement.innerText = correoUsuario; 
