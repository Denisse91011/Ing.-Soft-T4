function saludarEnEspanol(nombre) {
    if (!nombre) {
        console.log("Hola, ¿cómo estás?");
    } else {
        console.log(`Hola, ${nombre}! ¿Cómo estás?`);
    }
}

function saludarEnIngles(nombre) {
    if (!nombre) {
        console.log("Hello, how are you?");
    } else {
        console.log(`Hello, ${nombre}! How are you?`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
   
    const btnSaludar = document.getElementById("btnSaludar");
    const mensaje = document.getElementById("mensaje");
    const inputNombre = document.getElementById("nombre");
    const selectGenero = document.getElementById("genero");
    const inputEdad = document.getElementById("edad");
    const selectIdioma = document.getElementById("idioma");

    
    function obtenerSaludoSegunHora(idioma) {
        let fechaActual = new Date();
        let horaActual = fechaActual.getHours();
        
        if (idioma === "es") {
            if (horaActual >= 5 && horaActual < 12) {
                return "Buenos días";
            } else if (horaActual >= 12 && horaActual < 18) {
                return "Buenas tardes";
            } else {
                return "Buenas noches";
            }
        } else {
            if (horaActual >= 5 && horaActual < 12) {
                return "Good morning";
            } else if (horaActual >= 12 && horaActual < 18) {
                return "Good afternoon";
            } else {
                return "Good evening";
            }
        }
    }

    
    btnSaludar.addEventListener("click", function() {
       
        const nombreUsuario = inputNombre.value.trim();
        const genero = selectGenero.value;
        const edad = parseInt(inputEdad.value, 10);
        const idioma = selectIdioma.value;

       
        if (nombreUsuario === "") {
            mensaje.textContent = idioma === "es" ? "Por favor, ingresa tu nombre." : "Please enter your name.";
            return;
        }

        if (genero === "") {
            mensaje.textContent = idioma === "es" ? "Por favor, selecciona tu género." : "Please select your gender.";
            return;
        }

        if (isNaN(edad) || edad < 1) {
            mensaje.textContent = idioma === "es" ? "Por favor, ingresa una edad válida." : "Please enter a valid age.";
            return;
        }

        let saludo = obtenerSaludoSegunHora(idioma);

       
        let tratamiento = "";
        if (edad >= 18 && edad <= 30) {
            tratamiento = genero === "M" ? (idioma === "es" ? "Joven" : "Young man") : genero === "F" ? (idioma === "es" ? "Señorita" : "Miss") : "";
        } else if (edad > 30) {
            tratamiento = genero === "M" ? (idioma === "es" ? "Señor" : "Mister") : genero === "F" ? (idioma === "es" ? "Señora" : "Madam") : "";
        }

        
        let mensajeFinal = idioma === "es" ? 
            `${saludo}, ${tratamiento} ${nombreUsuario}! Bienvenido a la Universidad Católica Boliviana de San Pablo.` :
            `${saludo}, ${tratamiento} ${nombreUsuario}! Welcome to the Bolivian Catholic University of San Pablo.`;

        mensaje.textContent = mensajeFinal;
    });
});
