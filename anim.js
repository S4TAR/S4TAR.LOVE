// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "DESDE QUE COMENZAMOS ESTE VIAJE JUNTOS", time: 5 },
  { text: "CADA MOMENTO HA SIDO UN TESORO PARA MÍ", time: 15 },
  { text: "RECUERDO CLARAMENTE NUESTRA SALIDA", time: 30 },
  { text: "LA FORMA EN QUE ME SONREÍSTE Y CÓMO SUPE QUE TODO ENCAJABA", time: 45 },
  { text: "TU RISA SE HA 💖😊CONVERTIDO EN MI MELODÍA FAVORITA", time: 60 },
  { text: "Y TU APOYO HA SIDO MI LUZ EN LOS DÍAS OSCUROS, INCLUSO A LA DISTANCIA", time: 75 },
  { text: "A VECES,", time: 90 },
  { text: "TENEMOS NUESTRAS DISCUSIONES", time: 105 },
  { text: "PERO LO QUE MÁS VALORO ES CÓMO SIEMPRE ENCONTRAMOS LA MANERA DE RESOLVERLAS", time: 120 },
  { text: "CADA DESACUERDO NOS HACE MÁS FUERTES Y NOS ACERCA AÚN MÁS", time: 135 },
  { text: "ERES UNA PERSONA EXTRAORDINARIA; TU AUTENTICIDAD Y TU BONDAD SON ADMIRABLES", time: 150 },
  { text: "NO HAY NADIE COMO TÚ EN EL MUNDO", time: 165 },
  { text: "Y ME SIENTO INCREÍBLEMENTE AFORTUNADO DE TENERTE A MI LADO", time: 180 },
  { text: "CADA DÍA QUE PASAMOS JUNTOS", time: 195 },
  { text: "ME ENAMORO MÁS DE TI", time: 210 },
  { text: "GRACIAS POR SER QUIÉN ERES Y POR HACER QUE MI VIDA SEA TAN HERMOSA", time: 225 },
  { text: "SIN IMPORTAR LA DISTANCIA", time: 240 },
  { text: "TE AMO MUCHO", time: 255 },
  { text: "MI AMOR💓", time: 270 },
  { text: "LOVE.............🥰😘😘😘", time: 285 },
  { text: "LOVE..............................❣💞", time: 300 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 12 // Duración de cada línea
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 1; // Duración del efecto de aparición en segundos
    var fadeOutDuration = 3; // Duración del efecto de desaparición en segundos
    var holdDuration = 8; // Tiempo que se mantiene visible antes de desaparecer

    // Aplica el efecto de aparición
    lyrics.style.opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.innerHTML = currentLine.text;

    // Efecto de desaparición
    if (time >= currentLine.time + holdDuration) { // Comienza a desaparecer después de holdDuration
      lyrics.style.opacity = Math.max(0, 1 - (time - (currentLine.time + holdDuration)) / fadeOutDuration);
    }
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 333 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; // Duración y función de temporización de la desaparición
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 333 segundos (333,000 milisegundos)
setTimeout(ocultarTitulo, 333000);
