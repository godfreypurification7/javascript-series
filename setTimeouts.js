// let myPromise=new Promise(function(myResolve,myReject) {
//     setTimeout(function(){
//         ("Missed Goal")
//     },3000)
// });

// myPromise.
// then(function(value){
//     console.log(value);
// });
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");  // Specify the file path
    req.onload = function() {
        if (req.status == 200) {
            myCallback(req.responseText);  // If successful, pass the response to the callback
        } else {
            myCallback("Error: " + req.status);  // If error, pass the error message to the callback
        }
    }
    req.send();
}

// Calling getFile and passing a callback to handle the response
getFile(function(response) {
    console.log(response);  // Log the content of the file or the error message
});
