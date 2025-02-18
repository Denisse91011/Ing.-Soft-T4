function saludarEnEspanol(nombre) {
    if (!nombre) {
        console.log("Hola, ¿cómo estás?");
    } else {
        console.log(`Hola, ${nombre}! ¿Cómo estás?`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
   
    const btnSaludar = document.getElementById("btnSaludar");
    const mensaje = document.getElementById("mensaje");
    const inputNombre = document.getElementById("nombre");
    const selectGenero = document.getElementById("genero");
    const inputEdad = document.getElementById("edad");

   
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

   
    btnSaludar.addEventListener("click", function() {
        
        const nombreUsuario = inputNombre.value.trim();
        const genero = selectGenero.value;
        const edad = parseInt(inputEdad.value, 10);

       
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

        
        if (genero === "N") {
            tratamiento = "Estimado/a";
        }        

        
        let saludoPersonalizado = tratamiento
            ? `${saludo}, ${tratamiento} ${nombreUsuario}! bienvenido a la Universidad Catolica Boliviana de San Pablo`
            : `${saludo}, ${nombreUsuario}! bienvenido a la Universidad Catolica Boliviana de San Pablo`;

        mensaje.textContent = saludoPersonalizado;
    });
});
