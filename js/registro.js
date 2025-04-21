const mostrar = document.querySelector(".mostrar--registro");
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

document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // datos en el localStorage//
    localStorage.setItem("usuario", JSON.stringify({ nombre, correo, contrasena }));

    // Redirigir //
    window.location.href = "./login.html";
});