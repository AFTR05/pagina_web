// Lista de colores oscuros
var colores = ["#FFFFFF", "#FFFFCC", "#BDFCD0", "#FFFF66","#ADD8E6", "#F9ADAF"];

// Contador para el índice del color actual
var indiceColor = 0;

// Función para cambiar el color de fondo del cuerpo
function cambiarColor() {
    // Cambiar el color de fondo del cuerpo
    document.body.style.backgroundColor = colores[indiceColor];

    // Incrementar el índice del color actual
    indiceColor++;

    // Si alcanzamos el final de la lista, volver al inicio
    if (indiceColor >= colores.length) {
        indiceColor = 0;
    }
}
