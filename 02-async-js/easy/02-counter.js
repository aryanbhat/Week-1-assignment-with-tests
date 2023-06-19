let num = 0;
function count(){
  console.log(num++);
  setTimeout(count,1000);
}
count();