class Greeter {
    generateGreeting(name, gender, age, language) {
        let greeting = '';

        if (language === 'es') {
            greeting = `Hola ${name}`;
            if (gender === 'M') {
                greeting += ' señor';
            } else if (gender === 'F') {
                greeting += ' señora';
            }
            greeting += `, tienes ${age} años.`;
        } else if (language === 'en') {
            greeting = `Hello ${name}`;
            if (gender === 'M') {
                greeting += ' Mr.';
            } else if (gender === 'F') {
                greeting += ' Ms.';
            }
            greeting += `, you are ${age} years old.`;
        }

        return greeting;
    }
}

export default Greeter;