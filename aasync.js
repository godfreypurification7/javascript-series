async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("I love You !!");
        }, 3000);
    });

    // Wait for the promise to resolve and log the result
    let result = await myPromise;
    console.log(result);  // This will log "I love You !!" after 3 seconds
}

myDisplay();
