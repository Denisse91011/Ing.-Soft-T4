export function saludar(nombre) {
    const nombreLimpio = nombre.trim();
    return nombreLimpio !== "" 
      ? `Hola, ${nombreLimpio}! Bienvenido/a a la Universidad Católica Boliviana.`
      : "Por favor, ingresa tu nombre.";
  }
  