// Esperamos a que el DOM esté listo antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos referencias a los elementos HTML
  const btnSaludar = document.getElementById("btnSaludar");
  const mensaje = document.getElementById("mensaje");
  const inputNombre = document.getElementById("nombre");

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
      // Obtenemos el nombre ingresado por el usuario
      const nombreUsuario = inputNombre.value.trim(); // Eliminamos espacios extra
      
      // Verificamos si el usuario ingresó un nombre
      if (nombreUsuario === "") {
          mensaje.textContent = "Por favor, ingresa tu nombre.";
      } else {
          let saludo = obtenerSaludoSegunHora(); // Obtenemos el saludo adecuado
          mensaje.textContent = `${saludo}, ${nombreUsuario}!`;
      }
  });
});
