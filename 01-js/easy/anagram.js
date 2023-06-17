/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    let arr1 = [];
    let arr2 = [];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for(let char of str1){
      arr1.push(char);
    }
    for(let char of str2 ){
      arr2.push(char);
    }
    let check = false;
    if(arr1.length === arr2.length && arr1.length === 0){
      return true;
    }
    if(arr1.length != arr2.length){
      return false;
    }
    arr1.sort();
    arr2.sort();
    for(let i=0 ; i< Math.min(arr1.length,arr2.length) ; i++){
      if(arr1[i] === arr2[i]){
        check = true;
      }
      else{
        check = false;
        break;
      }
    }
    return check;
}

module.exports = isAnagram;
