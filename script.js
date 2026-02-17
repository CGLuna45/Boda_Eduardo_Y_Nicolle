document.addEventListener("DOMContentLoaded", function() {

    // 🎵 Reproducir audio al primer clic
    document.addEventListener("click", function(){
        const audio = document.getElementById("musica");
        if(audio) audio.play();
    }, { once: true });

    // 📅 Countdown
    const weddingDate = new Date("March 7, 2026 18:00:00").getTime();
    setInterval(function(){
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");

        if(days) days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
        if(hours) hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if(minutes) minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        if(seconds) seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);

    // 🌸 Pétalos
    function createPetal(){
        const container = document.querySelector(".petals-container");
        if(!container) return;

        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * 100 + "vw";

        const size = Math.random() * 15 + 15;
        petal.style.width = size + "px";
        petal.style.height = size + "px";

        const duration = Math.random() * 5 + 6;
        petal.style.animationDuration = duration + "s";

        container.appendChild(petal);

        setTimeout(() => { petal.remove(); }, duration * 1000);
    }

    setInterval(createPetal, 500);

    // ✅ WhatsApp Confirmación
    const confirmBtn = document.getElementById("confirmBtn");

    if(confirmBtn){
        confirmBtn.addEventListener("click", function(){
            const select = document.querySelector("select");
            const guest = select.value;

            if(guest === "Seleccionar invitado"){
                alert("Por favor, selecciona tu nombre.");
                return;
            }

            const myNumber = "50497644107"; // pon tu número completo con código país
            const message = `Hola, confirmo mi asistencia al matrimonio. Soy ${guest}.`;

            const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        });
    }
    const locationBtn = document.getElementById("locationBtn");

    if(locationBtn){
        locationBtn.addEventListener("click", function(){
    

            const url = `https://maps.app.goo.gl/FcQ1Hhu6Z8hmdCV69`;
            window.open(url, "_blank");
        });
    }
       const cerominabtn = document.getElementById("cerominabtn");

    if(cerominabtn){
        cerominabtn.addEventListener("click", function(){
    

            const url = `https://maps.app.goo.gl/mJjibyuN46ro3ZyL8`;
            window.open(url, "_blank");
        });
    }
      
 
    // 🌟 Animaciones scroll

// Animaciones de scroll para todas las secciones
const sections = document.querySelectorAll('section, .two-columns, .schedule-columns');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => sectionObserver.observe(section));



});


