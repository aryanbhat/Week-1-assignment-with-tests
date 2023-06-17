/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let newstr = str.split(" ").join("");
  newstr = newstr.toLowerCase();
  str = "";
  for(let char of newstr){
    if((char >= 'a' && char<= 'z')|| (char>= 'A' && char<='Z')){
      str += char;
    }
  }
  let s = 0;
  let e = str.length - 1;
  while(s<e){
    if(str[s] !== str[e]){
      return false;
    }
    s++;
    e--;
  }
  return true;
}

module.exports = isPalindrome;
