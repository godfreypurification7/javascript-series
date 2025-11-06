// function myDisplayer(message) {
//     console.log(message);
//   }
  
//   function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   mySecond(myDisplayer); 
//   myFirst(myDisplayer);  
function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
  