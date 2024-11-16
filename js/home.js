// nombre del usuario desde localStorage//
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

if (usuarioGuardado) {
    document.getElementById("nombreUsuario").textContent = usuarioGuardado.nombre;
} else {
    window.location.href = "../index.html"; // si no tiene seccion//
}

// Función para cerrar sesión//
document.getElementById("cerrarSesion").addEventListener("click", function() {
    // Eliminar usuario del localStorage//
    localStorage.removeItem("usuario");

    // Redirigir a la página principal//
    window.location.href = "../index.html";
});