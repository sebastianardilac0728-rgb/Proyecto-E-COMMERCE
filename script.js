function calcularCuotas() {
  let cantidadCuotas = prompt("Ingresa la cantidad de cuotas.");
  let precioProductoDestacado = 500;
  let costoDeCuota = precioProductoDestacado / cantidadCuotas;

  alert("Ha elegido " + cantidadCuotas + " cuotas. El valor de cada una es de: $" + costoDeCuota);
}
