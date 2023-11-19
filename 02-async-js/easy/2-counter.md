## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


var counter=1;

function counterfun(){
    console.clear()
    console.log(counter)
    counter=counter+1
    setTimeout(counterfun, 1*1000)
}




setTimeout(counterfun, 1 * 1000)


































































(Hint: setTimeout)