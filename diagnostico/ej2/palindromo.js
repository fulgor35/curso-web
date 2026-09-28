// Paso 1: Normalizar en NFD para descomponer letras acentuadas (ej: "á" -> "a" + acento).
// Paso 2: Eliminar los acentos/diacríticos flotantes usando el rango Unicode \u0300-\u036f.
// Paso 3: Convertir todo a minúsculas.
// Paso 4: Eliminar todo lo que NO sea letra o número (espacios, signos de puntuación, etc.).
// Paso 5: Invertir el texto limpio y comparar.

function esPalindromo(texto) {
  const textoLimpio = texto
    .normalize("NFD") // Separa letras de acentos
    .replace(/[\u0300-\u036f]/g, "") // Elimina marcas de acentos sueltos
    .toLowerCase() // Convierte a minúsculas
    .replace(/[^a-z0-9]/g, ""); // Mantiene solo a-z y 0-9

  const textoInvertido = textoLimpio.split("").reverse().join("");

  return textoLimpio === textoInvertido;
}

// --- Casos originales ---
console.log("--- Casos Originales ---");
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Reconocer")); // true
console.log(esPalindromo("Hola mundo")); // false

// --- Casos con tildes y caracteres especiales ---
console.log("\n--- Casos con Tildes y Puntuación ---");
console.log(esPalindromo("Ánita lava la tina")); // true
console.log(esPalindromo("¡Aricó, la tora rota lo cira!")); // true
console.log(esPalindromo("¿Son robos o son tartas?")); // true
console.log(esPalindromo("1001")); // true
