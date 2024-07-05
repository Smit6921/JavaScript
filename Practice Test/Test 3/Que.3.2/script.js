function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(prompt("Enter the temperature in Celsius:"));

    
    if (isNaN(celsius)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    const fahrenheit = celsiusToFahrenheit(celsius);
    console.log(celsius + "C is equal to " + fahrenheit + "F.");
}

convertCelsiusToFahrenheit();
