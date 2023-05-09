let timerStart
let timerLength = 10
let timerValue = 0
let timerBool = false
let timerComplete = false
let timerPaused = false
let timerPausedValue = 0
let timerText, wellDoneText


function setup() {
    //create canvas of 800 x 800
    //createCanvas(800, 800);

        //window.start_timer = start_timer;
        timerText = document.getElementById("timerText");

        wellDoneText = document.getElementById("wellDoneText");



    //window.start_timer = start_timer;
    start_button = document.getElementsByClassName("start-timer-button");
    //console.log(start_button);
    start_button[0].addEventListener("click", start_timer, false);
    //.addEventListener("click", modifyText, false);
   // start_button.onclick = function(){()};

       //window.start_timer = start_timer;
       pause_button = document.getElementsByClassName("pause-timer-button");
       //console.log(start_button);
       pause_button[0].addEventListener("click", pause_timer, false);
       //.addEventListener("click", modifyText, false);
      // start_button.onclick = function(){()};

//window.start_timer = start_timer;
             reset_button = document.getElementsByClassName("reset-timer-button");
             //console.log(start_button);
             reset_button[0].addEventListener("click", reset_timer, false);
             //.addEventListener("click", modifyText, false);
            // start_button.onclick = function(){()};
}


function start_timer() {
    timerPaused = false;
    timerBool = true;
    timerStart = millis();
    console.log ("startbuttonpressed")
    wellDoneText.style.display='none';
}

function pause_timer() {
    timerPausedValue += timerValue;
    timerValue = 0;
    timerPaused = true;
    timerBool = false;
    console.log ("pausedbuttonpressed")
}

function reset_timer() {
    timerPaused = false;
    timerPausedValue = 0;
    timerComplete = false;
    timerValue = 0;
    console.log ("resetbuttonpressed")
    wellDoneText.style.display='none';

}

function draw() {

    //background colour 
    //background(220);

let newTimerLength=parseInt(document.getElementById('timerInput').value)
console.log(newTimerLength)
if(newTimerLength>0){
    timerLength=newTimerLength
}
    //timer logic
    if (timerPaused && timerBool){
        
    }
    else if (timerBool) {
    timerValue = millis() -timerStart;
    timerValue *=0.001;
    timerValue = round(timerValue);
    }



    let totalTime=timerValue+timerPausedValue
    if (totalTime==timerLength){
        timerBool = false
        timerComplete = true
    }

    let countingDown=timerLength-totalTime;

    //displaying timer
    //fill(0,102,153);
    //textSize(50);
    //text(countingDown.toString(), 400,400);
    timerText.innerHTML = countingDown.toString()

    //timer complete text
    if (timerComplete){
        wellDoneText.style.display='block'
    }


}

