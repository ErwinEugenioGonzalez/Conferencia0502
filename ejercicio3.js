var year;
year = prompt("ingrese el año")

if(year % 4 == 0 && (year % 100 != 0 || year%400 == 0)){
  alert("es bisiesto")
}else{
  alert("no es bisiesto")
}
