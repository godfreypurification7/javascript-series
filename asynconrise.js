// Define the callback function
function myDisplayer(sum) {
    console.log(sum);
}

// Define the main calculator function
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum); // Call the callback function with the sum
    console.log(myCalculator); // This will log the function itself, not its result
}

// Call the calculator function and pass myDisplayer as the callback
myCalculator(4, 4, myDisplayer);
