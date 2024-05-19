function valid1(){
    var nombre=document.getElementById("nombre_paciente").value;
    var fecha=document.getElementById("fecha_consulta").value;
    var hora=document.getElementById("hora_consulta").value;
    var medico=document.getElementById("medico").value;
    var sintomas=document.getElementById("sintomas").value;
    var diagnostico=document.getElementById("diagnostico").value;
    var tratamiento=document.getElementById("tratamiento").value;

    if(nombre="" || fecha=="" || hora=="" || medico=="" || sintomas=="" ||diagnostico=="" || tratamiento==""){
        alert("Por favor ingrese todos los datos");
    }
}
function regreso(){
    window.location="inicio.html";
  }