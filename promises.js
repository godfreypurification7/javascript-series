function myDisplayer(value) {
    console.log(value);
}

let myPromise = new Promise(function(resolve, reject) {
    let x = 0;
    if (x == 1) {
        resolve("OK");
    } else {
        reject("value is not equal"); // Rejecting the promise with a message
    }
});

myPromise.then(
    function(value) { myDisplayer(value) },  // If resolved, log the value
    function(err) { 
        myDisplayer(err); // If rejected, log the error
        console.log("Delayed Message");
    }
);

// // Log a delayed message after 3 seconds
// setTimeout(() => myDisplayer("Hello"), 3000);
