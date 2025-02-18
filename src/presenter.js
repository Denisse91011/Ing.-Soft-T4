import Greeter from './greeter.js';

document.addEventListener('DOMContentLoaded', () => {
    const greeter = new Greeter();

    const btnSaludar = document.getElementById('btnSaludar');
    const nombreInput = document.getElementById('nombre');
    const generoSelect = document.getElementById('genero');
    const edadInput = document.getElementById('edad');
    const idiomaSelect = document.getElementById('idioma');
    const mensajeP = document.getElementById('mensaje');

    btnSaludar.addEventListener('click', () => {
        const name = nombreInput.value;
        const gender = generoSelect.value;
        const age = edadInput.value;
        const language = idiomaSelect.value;

        const greeting = greeter.generateGreeting(name, gender, age, language);
        mensajeP.textContent = greeting;
    });
});