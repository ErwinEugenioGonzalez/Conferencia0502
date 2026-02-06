var numero;
numero = prompt("Ingrese el numero al cual quiere calcular el factorial")

var resultado = 1;
//var++ significa suma 1 al valor que ya tiene 
for(var contador = 1 ; contador <= numero ; contador++){
  
   resultado = resultado * contador
}
alert("el resultado del factorial es "+resultado)