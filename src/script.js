// Esperamos a que el DOM esté listo antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos referencias a los elementos HTML
  const btnSaludar = document.getElementById("btnSaludar");
  const mensaje = document.getElementById("mensaje");
  const inputNombre = document.getElementById("nombre");

  // Agregamos el evento al botón
  btnSaludar.addEventListener("click", function() {
      // Obtenemos el nombre ingresado por el usuario
      const nombreUsuario = inputNombre.value.trim(); // Eliminamos espacios extra
      
      // Verificamos si el usuario ingresó un nombre
      if (nombreUsuario === "") {
          mensaje.textContent = "Por favor, ingresa tu nombre.";
      } else {
          mensaje.textContent = `Hola, ${nombreUsuario}! bienvenido a la Universidad Catolica Boliviana de San Pablo`;
      }
  });
});
