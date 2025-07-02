let second = 0;
let minute = 0;
let hour = 0;
let displaytime = document.getElementById("displaytime");
let timer = null;

function stopwatch() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
  
  let h = (hour < 10 ? "0" : "") + hour;
  let m = (minute < 10 ? "0" : "") + minute;
  let s = (second < 10 ? "0" : "") + second;
  displaytime.textContent = h + ":" + m + ":" + s;
}

function watchstart() {
  if (timer === null) {
    timer = setInterval(stopwatch, 1000);
  }
}

function watchstop() {
  clearInterval(timer);
  timer = null;
}

function watchreset() {
  clearInterval(timer);
  timer = null;
  second = 0;
  minute = 0;
  hour = 0;
  displaytime.textContent = "00:00:00";
}
























// let [secound, minutes, hours] = [0,0,0];
// let displaytime = document.getElementById("displaytime");
// let timer = null;
// function stopwatch(){
//   secound++;
//   if(secound == 60){
//     secound = 0;
//     minutes++;
//     if(secound == 60){
//       secound = 0;
//       minutes++;
//       if(minutes == 60){
//         minutes = 0;
//         hours++;
//       }
//     }
//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = secound < 10 ? "0" + secound : secound;
//     displaytime.innerHTML = h+":"+m+":"+s;
//   }
//   function watchstart(){
//     if(timer!==null){
//       clearInterval(timer);
//     }
//     timer = setInterval(stopwatch,1000);
//   }
//   function watchstart(){
//     clearInterval(timer);
//   }
//   function watchreset(){
//     clearInterval(timer);
//     [secound, minutes, hours] = [0,0,0];
//     displaytime.innerHTML = "00:00:00";
//   }
// }