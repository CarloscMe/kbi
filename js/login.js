const mostrar = document.querySelector(".mostrar");
const input = document.querySelector('input[type="password"]')
let visible = false;

mostrar.addEventListener("click",()=>{
    visible = !visible;

    if(visible){
     mostrar.textContent = "ocultar"
     input.type = "text"
     
    }
    else{
        mostrar.textContent = "mostrar"
        input.type = "password"
    }
})

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const correoLogin = document.getElementById("correoLogin").value;
    const contrasenaLogin = document.getElementById("contrasenaLogin").value;

    // datos del usuario desde localStorage//
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioGuardado) {
        if (usuarioGuardado.correo === correoLogin && usuarioGuardado.contrasena === contrasenaLogin) {
            // Redirigir//
            window.location.href = "./home.html";
        } else {
            alert("usuario no encontrado.");
        }
    } else {
        alert("registrate primero.");
    }
});