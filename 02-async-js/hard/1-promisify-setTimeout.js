/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function promisebody( n){
//     setTimeout(printthing, n * 1000)
// }


// function wait(n) {
    
//     var ans=new Promise(promisebody);
//     return ans;
// }
// function printthing(){
//     console.log("promise is done ");
// }
// wait(5).
function delay(seconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Promise resolved after ${seconds} seconds`);
      }, seconds * 1000);
    });
  }
  
  // Example usage:
  const delaySeconds = 5;
  
  delay(delaySeconds)
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error);
    });