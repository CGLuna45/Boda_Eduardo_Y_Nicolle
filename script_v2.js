const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})

document.getElementById("AbrirInvitacion").addEventListener("click", function(){
    window.location.href = "tarjeta.html";
});

setTimeout(() => {
    document.querySelector(".solapa-derecha").classList.add("animar-solapa");
    document.querySelector(".solapa-izquierda").classList.add("animar-solapa");     }, 500);