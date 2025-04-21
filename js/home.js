// nombre del usuario desde localStorage//
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

if (usuarioGuardado) {
    document.getElementById("nombreUsuario").innerText = usuarioGuardado.nombre;
}

// Función para cerrar sesión//
document.getElementById("cerrarSesion").addEventListener("click", function() {
    // Eliminar usuario del localStorage//
    localStorage.removeItem("usuario");

    // Redirigir a la página principal//
    window.location.href = "../index.html";
});