let numeros = [100, 10, 29, -9, 20, 50];

let contadorEntre0e25 = 0;
let contadorEntre26e50 = 0;
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];
  if (numero < 0) {
    break;
  }
  if (numero >= 0 && numero <= 25) {
    contadorEntre0e25++;
  }
  if (numero >= 26 && numero <= 50) {
    contadorEntre26e50++;
  }
}
console.log("contadorEntre0e25", contadorEntre0e25);
console.log("contadorEntre26e50", contadorEntre26e50);
