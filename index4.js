//Ejercicio 1.D
const nombreEmpleado = prompt("Ingrese su nombre: ");
const salarioHora = parseFloat(prompt("Ingrese el salario por hora: "));
const horasMes = parseFloat(prompt("Ingrese el número de horas trabajadas: "));
const salarioMes = salarioHora * horasMes;
const subsidioTransporte = salarioMes <= 700000;
console.log("El nombre del empleado es: "+ nombreEmpleado + ", El salario básico es: " + salarioMes + ", Tiene subsidio de transporte: " + subsidioTransporte);
