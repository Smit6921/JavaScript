function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function divi(x, y) {
    if (y === 0) {
        return "The Division is zero.";
    } else {
        return x / y;
    }
}

function calc() {
    console.log("Select operation:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    const choice = prompt("Enter choice (1/2/3/4): ");
    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));

    let result;

    switch (choice) {
        case '1':
            result = add(num1, num2);
            break;
        case '2':
            result = sub(num1, num2);
            break;
        case '3':
            result = mul(num1, num2);
            break;
        case '4':
            result = divi(num1, num2);
            break;
        default:
            result = "Invalid input";
            break;
    }

    console.log("Result:", result);
}

calc();

