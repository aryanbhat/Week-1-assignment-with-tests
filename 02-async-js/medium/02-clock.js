
function calcTime(){
  const date = new Date();
  let hh = date.getHours();
  if(hh<10){
    hh = '0' + hh;
  }
  let mm = date.getMinutes();
  if(mm<10){
    mm = '0' + mm;
  }
  let ss = date.getSeconds();
  if(ss<10){
    ss = '0' + ss;
  }
  console.log(hh + "  : " + mm + " : " + ss);
}
setInterval(calcTime,1000);