function validar() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    var generoMasculino = document.getElementById("masculino").checked;
    var generoFemenino = document.getElementById("femenino").checked;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var cedula=document.getElementById("cedula").value;
    var edad=document.getElementById("edad").value;
    var enfermedad=document.getElementById("enfermedades").value;
    var alergia=document.getElementById("alergia").value;
    var tipo=document.getElementById("tiposangre").value;
    var historial=document.getElementById("historial").value;
    
    // Validar que los campos no estén vacíos
    if (nombre == "" || apellido == "" || fechaNacimiento == "" || direccion == "" || telefono == "" || email == "" ||(!generoMasculino && !generoFemenino) || cedula=="" || edad=="" || enfermedad=="" || alergia=="" || tipo=="" || historial=="") {
      alert("Todos los campos son obligatorios");
      
    }
  
    // Validar que la fecha de nacimiento sea anterior a la fecha actual
    var fechaNacimientoDate = new Date(fechaNacimiento);
    var fechaActualDate = new Date();
    if (fechaNacimientoDate >= fechaActualDate) {
    alert("POR FAVOR INGRESE UNA FECHA DE NACIMIENTO CORRECTA");
      //return false;
    } 
  //}
    // Validar que se haya seleccionado un género
    if (!generoMasculino && !generoFemenino) {
      alert("Seleccione un género");
      //return false;
    }
    
    //Validar que el correo electrónico tenga un formato válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Ingrese un correo electrónico válido");
      //return false;
    }
    
    // Si todos los campos son válidos, enviar el formulario
    else{
      alert("El paciente se a registrado correctamente")
    };
  
  }
  function regreso(){
    window.location="inicio.html";
  }