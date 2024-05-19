const $btnSignIn = document.querySelector('.sign-in-btn'),
  $btnSignUp = document.querySelector('.sign-up-btn'),
  $signUp = document.querySelector('.sign-up'),
  $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
  if (e.target === $btnSignIn || e.target === $btnSignUp) {
    $signIn.classList.toggle('active');
    $signUp.classList.toggle('active');
  }
});

function registro() {
  var nombres = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var cedula = document.getElementById("cedula").value;
  var profesion = document.getElementById("profesion").value;
  var email = document.getElementById("email").value;
  var contraseña = document.getElementById("contra").value;

  if (
    nombres === "" ||
    apellidos === "" ||
    cedula === "" ||
    profesion === "" ||
    email === "" ||
    contraseña === ""
  ) {
    alert("Por favor ingrese todos los datos requeridos");
    return; // Detener la ejecución si faltan datos
  }

  // Validar nombre
  if (!validarNombreApellido(nombres)) {
    alert("El nombre no debe contener números.");
    return;
  }

  // Validar apellidos
  if (!validarNombreApellido(apellidos)) {
    alert("Los apellidos no deben contener números.");
    return;
  }

  // Validar correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Ingrese un correo electrónico válido");
    return;
  }

  // Validar cédula (asumiendo 10 dígitos)
  if (!/^\d{10}$/.test(cedula)) {
    alert("La cédula de identidad debe tener exactamente 10 dígitos.");
    return;
  }

  // Si todas las validaciones son correctas, registrar al usuario
  alert("Usuario registrado correctamente");
  // ... (código para registrar al usuario en la base de datos o sistema)
}

function validarNombreApellido(valor) {
  const expresionNumeros = /[0-9]/;
  return !expresionNumeros.test(valor);
}

function inicio() {
  var usuario = document.getElementById("usuario").value;
  var contra = document.getElementById("clave").value;

  if (usuario === "" && contra === "") {
    alert("Por favor ingrese su correo y contraseña");
  } else {
    window.location = "inicio.html";
  }
}
