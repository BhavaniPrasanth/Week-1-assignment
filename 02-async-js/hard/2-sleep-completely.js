/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


async function test(){
    const result = await sleep(5000);
    console.log(result)
}


function sleep (seconds) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('result published !');
        },seconds);
     });
    
 }


test();