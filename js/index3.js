const urlParams = new URLSearchParams(window.location.search);
const correoUsuario = urlParams.get('correo');

// Mostrar el correo del usuario en el párrafo correspondiente
const correoUsuarioElement = document.getElementById('correoUsuario');
correoUsuarioElement.innerText = correoUsuario;