function valid2(){
    var fecha=document.getElementById("fecha-ingreso").value;
    var salida=document.getElementById("fecha-salida").value;
    var cama=document.getElementById("cama").value;
    var hospi=document.getElementById("hospitalizacion").value;
    var diagnostico=document.getElementById("diagnostico").value;
    var tratamiento=document.getElementById("tratamiento").value;

    if(fecha=="" || salida=="" || cama=="" || hospi=="" || diagnostico=="" || tratamiento==""){
        alert("Por favor ingrese todos los datos");
    }
    if (new Date(salida) < new Date(fecha)) {
        alert("La fecha de salida debe ser posterior a la fecha de ingreso");
        
      }
    
      // Validar que el número de cama sea mayor que cero
      if (cama <= 0) {
        alert("El número de cama debe ser mayor que cero");
      }
  
      else{
        alert("Los datos se han guardados correctamente")
      }
    }
    function regreso(){
      window.location="inicio.html";
    }
