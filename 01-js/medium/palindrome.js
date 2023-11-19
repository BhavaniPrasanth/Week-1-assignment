/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function transform(str){
  var ans=""
  for(var i=0; i<str.length; i++){
    if(str[1]===" " || str[i]==="," || str[i]==="!" || str[i]==="?"){

    }else{
      ans+=str[i];
    }
    
  }
  return ans;
}

function isPalindrome(str) {
  str=str.toLowerCase();
  var one=str;
  var rev=str.split("").reverse().join("");
  if(rev == one){
  return true;
  }else{
      return false;
  }
}
var ans=isPalindrome("race car")
console.log(ans)
module.exports = isPalindrome;



// function reverse(str){
//   var ans=""
//   for(var i=str.length -1; i>=0; i--){
//     ans+=str[i];
//   }
//   return ans;
// }
