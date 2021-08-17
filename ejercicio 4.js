function calcular_resultado(){
    var calcula_nota = prompt ("ingrese su nota")
    
    if (calcula_nota >= 0 && calcula_nota <= 5){
      if (calcula_nota >= 3 && calcula_nota <= 5){
        alert("aprobaste felicitaciones")  
      }  
     else if (calcula_nota >= 0 && calcula_nota < 3){
         alert ("no aprobaste")
     }
    }
else {
    alert ("la nota que ingresaste, no es correcta")
}
}
