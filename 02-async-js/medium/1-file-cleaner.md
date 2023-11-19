## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```




function clean(data){
  var cll=data.split(" ")
  var cll2=[]
  for(var i=0;i<cll.length; i++){
    if(cll[i].length === 0){
      
    }else{
      cll2.push(cll[i])
    }
  }
  var ans= cll2.join(" ");
  console.log(ans)
  return ans;
}

function whatif(err){
 
    console.log("done")
  }
function filere(err,data){
  if(err){
    console.log("error occured")
    return
  }
    var cleaned = clean(data);
    fs.writeFile("b.txt", cleaned, "UTF8", whatif)
  
}


fs.readFile('b.txt', 'UTF8', filere)