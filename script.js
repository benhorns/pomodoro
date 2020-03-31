let workTime = 1500;
let breakTime = 300;
let timeRemaining = 1500;

let timerIsRunning=false;
let x 


let timerMode = "work";


const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const switchButton = document.querySelector('#switch');
const resetButton = document.querySelector('#reset');

const moreWork = document.querySelector('#more-work');
const lessWork = document.querySelector('#less-work');
const moreBreak = document.querySelector('#more-break');
const lessBreak = document.querySelector('#less-break');



const handleMoreWork = (event) => {
  changeAmountOfTime ("moreWork")
}

const handleLessWork = (event) => {
  changeAmountOfTime ("lessWork")
}

const handleMoreBreak = (event) => {
  changeAmountOfTime ("moreBreak")
}

const handleLessBreak = (event) => {
  changeAmountOfTime ("lessBreak")
}
const handleStartClick = (event) => {
  clockControl("start")
}

const handlePauseClick = (event) => {
  clockControl("pause")
}

const handleSwitchClick = (event) => {
  clockControl("switch")
}

const handleResetClick = (event) => {
  clockControl("Reset")
}

startButton.addEventListener("click", handleStartClick)
pauseButton.addEventListener("click", handlePauseClick)
switchButton.addEventListener("click", handleSwitchClick)
resetButton.addEventListener("click", handleResetClick)

moreWork.addEventListener('click', handleMoreWork)
lessWork.addEventListener('click', handleLessWork)
moreBreak.addEventListener('click', handleMoreBreak)
lessBreak.addEventListener('click', handleLessBreak)

const clockControl = (action) => {

  if (action === "start" && !timerIsRunning) {
    console.log('clicked');
    timerIsRunning=true;
    x = setInterval(function() {
        timeRemaining = timeRemaining - 1;    
        if (timeRemaining < 1) {
          clearInterval(x);
          timeRemaining = 0;
          document.getElementById("demo").innerHTML = "EXPIRED";
        } else {document.getElementById("demo").innerHTML = formatTime(timeRemaining);}
      // Display the result in the element with id="demo"
    
      // If the count down is finished, write some text

    }, 1000);
    
  } else if (action === "pause" && timerIsRunning) {
    timerIsRunning=false;
    clearInterval(x)
    document.getElementById("demo").innerHTML = formatTime(timeRemaining);
  } else if (action === "switch") {
    if (timerMode === "break") {
      timerIsRunning=false
      clearInterval(x)
      timeRemaining = workTime;
      timerMode = "work"
      document.getElementById("demo").innerHTML = formatTime(timeRemaining);
    } else {
      timerIsRunning=false;
      clearInterval(x)
      timeRemaining = breakTime;
      timerMode = "break"
      document.getElementById("demo").innerHTML = formatTime(timeRemaining);
    }
  } else if (action === "Reset") {
    console.log("Yup")
    if (timerMode === "work") {
      timerIsRunning=false;
      clearInterval(x)
      timeRemaining = workTime;
      document.getElementById("demo").innerHTML = formatTime(timeRemaining);
    } else if (timerMode === "break") {
      timerIsRunning=false;
      clearInterval(x)
      timeRemaining = breakTime;
      document.getElementById("demo").innerHTML = formatTime(timeRemaining);
    } 
  } else if (action === "work") {
    console.log('here')
    document.getElementById("demo").innerHTML = formatTime(timeRemaining);
  } else if (action === "break"){
    document.getElementById("demo").innerHTML = formatTime(breakTime);
  } else { }
}

const changeAmountOfTime = (choice) => {
  if (choice === "moreWork" && workTime < 3540) {
    document.getElementById("work").innerHTML = formatTime(workTime+=60);
    if (timerMode === "work") {
      document.getElementById("demo").innerHTML = formatTime(timeRemaining+=60);
    }
  } else if (choice === "lessWork" && workTime > 0){
    document.getElementById("work").innerHTML = formatTime(workTime-=60);
    if (timerMode === "work") {
      document.getElementById("demo").innerHTML = formatTime(timeRemaining-=60);
    }
  } else if (choice === "moreBreak" && breakTime < 3540) {
    document.getElementById("break").innerHTML = formatTime(breakTime+=60);
    if (timerMode === "break") {
      document.getElementById("demo").innerHTML = formatTime(timeRemaining+s=60);
    }
  } else if (choice === "lessBreak" && breakTime > 0) {
    document.getElementById("break").innerHTML = formatTime((breakTime-=60));
    if (timerMode === "break") {
      document.getElementById("demo").innerHTML = formatTime(timeRemaining-=60);
    }
  } else {}
  }

const formatTime = (time) => {
  let seconds = time % 60;
  let minutes = parseInt((time/60)%60)
  if (seconds < 10 && minutes <10) {
      return `0${minutes}:0${seconds}`
  } else if (minutes < 10) {
      return `0${minutes}:${seconds}`
  } else if (seconds < 10) {
      return `${minutes}:0${seconds}`
  } else {
      return `${minutes}:${seconds}`
  }
}

document.getElementById("work").innerHTML = formatTime(workTime);

document.getElementById("break").innerHTML = formatTime(breakTime);

document.getElementById("demo").innerHTML = formatTime(timeRemaining);

