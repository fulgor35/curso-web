// Paso 1: Convertir todo el texto a minúsculas para ignorar diferencias entre mayúsculas y minúsculas.
// Paso 2: Eliminar todos los espacios en blanco del texto.
// Paso 3: Invertir el texto limpio (separar en caracteres, invertir el arreglo y volver a unir).
// Paso 4: Comparar si el texto limpio es estrictamente igual al texto invertido y devolver el resultado.

function esPalindromo(texto) {
  // Convertimos a minúsculas y eliminamos los espacios
  const textoLimpio = texto.toLowerCase().replaceAll(" ", "");

  // Invertimos la cadena de texto
  const textoInvertido = textoLimpio.split("").reverse().join("");

  // Comparamos el texto original limpio con su versión invertida
  return textoLimpio === textoInvertido;
}

// Pruebas en consola
console.log(esPalindromo("Anita lava la tina")); // Debería devolver: true
console.log(esPalindromo("Reconocer")); // Debería devolver: true
console.log(esPalindromo("Hola mundo")); // Debería devolver: false
