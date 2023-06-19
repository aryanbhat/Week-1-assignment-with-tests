const fs = require('fs');

function fileHandler(err,str){
  console.log(str);
}


fs.readFile('text.txt','utf-8',fileHandler);
console.log(sum(10000));



function sum(num){
  let sum = 0;
  for(let i=0;i<=num;i++){
    sum+=i;
  }
 return sum;
}
