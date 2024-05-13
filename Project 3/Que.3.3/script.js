function dollarToRupee(dollars) {
    const exchangeRate = 75.23; 
    const rupees = dollars * exchangeRate;
    return rupees;
}

function convertDollarToRupee() {
    const dollars = parseFloat(prompt("Enter the amount in Dollars:"));

    
    if (isNaN(dollars)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    const rupees = dollarToRupee(dollars);
    console.log("$" + dollars + " is equal to ₹" + rupees.toFixed(2) + " rupees.");
}


convertDollarToRupee();
