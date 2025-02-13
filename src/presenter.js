import { saludar } from "./greeter.js";

document.addEventListener("DOMContentLoaded", () => {
  const botonSaludar = document.getElementById("saludar-btn");
  const inputNombre = document.getElementById("preguntar-nombre");
  const saludoDiv = document.getElementById("saludo");

  botonSaludar.addEventListener("click", () => {
    saludoDiv.textContent = saludar(inputNombre.value);
  });
});
