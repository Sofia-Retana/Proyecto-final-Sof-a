function toggleSection() {
    var operacionesContenedor = document.getElementById("operacionesContenedor");
    if (!operacionesContenedor.style.display || operacionesContenedor.style.display === "none") {
        operacionesContenedor.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar operaciones";
    } else {
        operacionesContenedor.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Mostrar operaciones";
    }
}