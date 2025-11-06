async function myDisplay() {
    let myPromise=new Promise(function(resolve,reject){
        setTimeout(function(){resolve("Loving!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")},2000)
    });
    let re=await myPromise;
    console.log(re);
    
}

myDisplay();