class Greeter {
    generateGreeting(name, gender, age, language) {
        const currentHour = new Date().getHours();
        let timeOfDayGreeting = '';

        if (language === 'es') {
            if (currentHour < 12) {
                timeOfDayGreeting = 'Buenos días';
            } else if (currentHour < 18) {
                timeOfDayGreeting = 'Buenas tardes';
            } else {
                timeOfDayGreeting = 'Buenas noches';
            }
        } else if (language === 'en') {
            if (currentHour < 12) {
                timeOfDayGreeting = 'Good morning';
            } else if (currentHour < 18) {
                timeOfDayGreeting = 'Good afternoon';
            } else {
                timeOfDayGreeting = 'Good evening';
            }
        }

        let greeting = `${timeOfDayGreeting} ${name}`;
        if (language === 'es') {
            if (gender === 'M') {
                greeting += ' señor';
            } else if (gender === 'F') {
                greeting += ' señora';
            }
            greeting += `, tienes ${age} años.`;
        } else if (language === 'en') {
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