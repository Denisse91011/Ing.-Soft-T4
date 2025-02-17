// Esperamos a que el DOM esté listo antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos referencias a los elementos HTML
  const btnSaludar = document.getElementById("btnSaludar");
  const mensaje = document.getElementById("mensaje");
  const inputNombre = document.getElementById("nombre");
  const selectGenero = document.getElementById("genero");

  // Función para obtener el saludo según la hora del día
  function obtenerSaludoSegunHora() {
      let fechaActual = new Date(); // Obtenemos la fecha y hora actual
      let horaActual = fechaActual.getHours(); // Extraemos solo la hora

      if (horaActual >= 5 && horaActual < 12) {
          return "Buenos días";
      } else if (horaActual >= 12 && horaActual < 18) {
          return "Buenas tardes";
      } else {
          return "Buenas noches";
      }
  }

  // Agregamos el evento al botón
  btnSaludar.addEventListener("click", function() {
      // Obtenemos los valores ingresados por el usuario
      const nombreUsuario = inputNombre.value.trim(); // Eliminamos espacios extra
      const genero = selectGenero.value;

      // Verificamos si el usuario ingresó un nombre
      if (nombreUsuario === "") {
          mensaje.textContent = "Por favor, ingresa tu nombre.";
          return;
      }

      if (genero === "") {
          mensaje.textContent = "Por favor, selecciona tu género.";
          return;
      }

      let saludo = obtenerSaludoSegunHora(); // Obtenemos el saludo adecuado

      // Personalizar el saludo según el género
      let saludoPersonalizado;
      if (genero === "M") {
          saludoPersonalizado = `${saludo}, Sr. ${nombreUsuario}!`;
      } else if (genero === "F") {
          saludoPersonalizado = `${saludo}, Sra. ${nombreUsuario}!`;
      } else {
          saludoPersonalizado = `${saludo}, ${nombreUsuario}!`;
      }

      mensaje.textContent = saludoPersonalizado;
  });
});
