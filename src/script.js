// Esperamos a que el DOM esté listo antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos referencias a los elementos HTML
  const btnSaludar = document.getElementById("btnSaludar");
  const mensaje = document.getElementById("mensaje");
  const inputNombre = document.getElementById("nombre");
  const selectGenero = document.getElementById("genero");
  const inputEdad = document.getElementById("edad");

  // Función para obtener el saludo según la hora del día
  function obtenerSaludoSegunHora() {
      let fechaActual = new Date();
      let horaActual = fechaActual.getHours();

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
      const nombreUsuario = inputNombre.value.trim();
      const genero = selectGenero.value;
      const edad = parseInt(inputEdad.value, 10);

      // Verificamos si el usuario ingresó los datos
      if (nombreUsuario === "") {
          mensaje.textContent = "Por favor, ingresa tu nombre.";
          return;
      }

      if (genero === "") {
          mensaje.textContent = "Por favor, selecciona tu género.";
          return;
      }

      if (isNaN(edad) || edad < 1) {
          mensaje.textContent = "Por favor, ingresa una edad válida.";
          return;
      }

      let saludo = obtenerSaludoSegunHora();

      // Determinar el tratamiento según edad y género
      let tratamiento = "";
      if (edad >= 18 && edad <= 30) {
          tratamiento = genero === "M" ? "Joven" : genero === "F" ? "Señorita" : "";
      } else if (edad > 30) {
          tratamiento = genero === "M" ? "Señor" : genero === "F" ? "Señora" : "";
      }

      // Construir el mensaje final
      let saludoPersonalizado = tratamiento
          ? `${saludo}, ${tratamiento} ${nombreUsuario}! bienvenido a la Universidad Catolica Boliviana de San Pablo`
          : `${saludo}, ${nombreUsuario}! bienvenido a la Universidad Catolica Boliviana de San Pablo`;

      mensaje.textContent = saludoPersonalizado;
  });
});
