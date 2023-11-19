## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.












const fs= require("fs")


let ans = "it is working fine bjkwrt bie ib";


function updatedText(err){
  if(err){
    console.log("error occured");
    return;
  }else{
    console.log("working fine");
  }
}


fs.writeFile('b.txt',  ans , 'UTF8', updatedText )