// setTimeout(myFunction, 3000);

// function myFunction() {
//     console.log(myFunction,"I love you"); 
// }
// setTimeout(function(){myFunction("Mita Juliet Roy")},3000);
setInterval(myFunction, 1000);

let ilo = []; // Initialize ilo outside the setInterval to preserve its values across intervals
var na = ["Mita", "Edna", "Sopan"];

function myFunction() {
  let d = new Date();
  console.log(
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds()
  );

  // Store array values in ilo only once or each time depending on your needs
  ilo = []; // Clear the ilo array if you want to reset it every second
  for (let i = 0; i < na.length; i++) {
    ilo.push(na[i]); // Storing array values into ilo
  }

  console.log("Family members:", ilo); // Log ilo array with names
}


// setTimeout(myFunc(),2000);


// function myFunction(value) {
//     console.log(value);
// }

// setTimeout(function() {
//     myFunction("I love my family's Member: " + ilo.join(", ")); // Join array to display values in one string
// }, 3000);