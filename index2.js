// Ejercicio 1.B
const totalCompra = parseFloat(prompt("Ingrese el valor total de su compra: "));
alert("El valor de su compra es de: " + totalCompra);

const descuento = totalCompra >= 100000;
console.log("¿Aplica el descuento?", descuento);