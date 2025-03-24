document.addEventListener("DOMContentLoaded", function () {
    const botonModoOscuro = document.querySelector("#darkModeToggle");
    const body = document.body;

    if (!botonModoOscuro) {
        console.error("❌ No se encontró el botón con id 'modo-oscuro'. Verifica tu HTML.");
        return;
    }

    botonModoOscuro.addEventListener("click", function () {
        body.classList.toggle("dark");
    });
});
