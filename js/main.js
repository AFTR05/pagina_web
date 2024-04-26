// Lista de colores claros
var colores = [
    "#FFFFFF",
    "#FFFFCC",
    "#BDFCD0",
    "#FFFF66",
    "#ADD8E6",
    "#F9ADAF",
];

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
//----------------------------------------------------------------------------------------------------
//Lista de fuentes
const fontStyles = [
    "Helvetica Neue",
    "Verdana",
    "Times New Roman",
    "Courier New",
    "Comic Sans MS",
];
//gestor de fuente actual
let currentFontStyleIndex = 0;

function cambiarFuente() {
    // Obtiene la fuente actual
    const currentFontStyle = fontStyles[currentFontStyleIndex];

    //aplica la fuente a todos lados
    const informacionElements = document.querySelectorAll(".informacion");
    for (const element of informacionElements) {
        element.style.fontFamily = currentFontStyle;
    }

    //  aumenta la cuenta
    currentFontStyleIndex = (currentFontStyleIndex + 1) % fontStyles.length;
}


//----------------------------------------------------------------------------------------------------

var coloresOscuros = ["#3879A9", "#006B76", "#533956", "#474747", "#8B008B", "#29ABCA", "#663399", "#9E6E6E", "#A0522D", "#3F51B5", "#43A047"]
// Contador para el índice del color oscuro actual
var indiceColorOscuro = 0;


function colorSubtitulos() {
    // Cambiar el color fuente de los titulos
    const informacionElements = document.querySelectorAll("h3");

    informacionElements.forEach(element => element.style.color = coloresOscuros[indiceColorOscuro]);

    // Decrementar el índice y reiniciarlo si es necesario
    indiceColorOscuro--;
    if (indiceColorOscuro < 0) {
        indiceColorOscuro = coloresOscuros.length - 1;
    }
}
