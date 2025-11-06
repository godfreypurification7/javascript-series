async function myDisplay() {
    let myPromise=new Promise(function(resolve,reject){
        setTimeout(function(){resolve("Wait to finish")},3000);
    });
let result=await myPromise;
    console.log(result);
}
myDisplay();