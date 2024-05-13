function meterToFoot(meters) {
    const feetPerMeter = 3.28084;
    const feet = meters * feetPerMeter;
    return feet;
}

function convertMeterToFoot() {
    const meters = parseFloat(prompt("Enter the length in meters:"));

    
    if (isNaN(meters)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    const feet = meterToFoot(meters);
    console.log(meters + " meters is equal to " + feet + " feet.");
}

convertMeterToFoot();
