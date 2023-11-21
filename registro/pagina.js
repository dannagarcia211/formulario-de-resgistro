function registrarUsuario() {
  console.log('Entrando...');
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById(
      "confirmar_contrasena"
    ).value;
    var genero = document.getElementById("genero").value;
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    var usuario = {
      nombre: nombre,
      correo: correo,
      contrasena: contrasena,
      genero: genero,
      fechaNacimiento: fechaNacimiento,
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    window.location.href = "login.html";
}
