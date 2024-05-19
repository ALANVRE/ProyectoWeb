function valid3(){
    var historial=document.getElementById("historial").value;
  
    if(historial==""){
      alert("Por favor ingrese el historial clínico para realizar la busqueda del paciente");
    }
  }
  function regreso(){
    window.location="inicio.html";
  }