const fs = require('fs');
fs.readFile('text.txt','utf-8',callbackfn);

let str = "";
function callbackfn(err,data){
  console.log("file is read");
  if(err){
    throw(err);
  }
  str = data.split(" ").filter(s => s).join(' ');
  fs.writeFile('text.txt',str,()=>{console.log("file is written")});
}
