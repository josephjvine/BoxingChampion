let timerStart
let timerLength = 10
let timerValue = 0
let timerBool = false
let timerComplete = false
let timerPaused = false
let timerPausedValue = 0
let timerLengthInput;
let numRoundsInput;
let numRounds = 1;
let roundCount = 0;
let breaksCompleted = 0;
let isBreak = false;
let breakStart;
let breakEnd;
let currentBreak;
let breakStarted;
let breakLength =0;
let numBreaks =0;


function setup() {
    //create canvas of 800 x 800
    createCanvas(800, 800);

    timerLengthInput = createInput();
    timerLengthInput.position(20, 100);

    numRoundsInput = createInput();
    numRoundsInput.position(20, 150);

    breakDurationInput = createInput();
    breakDurationInput.position(20, 160);

    numBreaksInput = createInput();
    numBreaksInput.position(20, 190);
}


function start_timer() {
    timerPaused = false;
    timerBool = true;
    timerStart = millis();
    timerLength = timerLengthInput.value(); // read timer length from input field
    console.log ("startbuttonpressed")
    numRounds = numRoundsInput.value(); // read number of rounds from input field
    roundCount = 0; // reset round count
    timerLength = timerLengthInput.value();
    let numRounds = numRoundsInput.value();
    let breakDuration = breakDurationInput.value();
    let numBreaks = numBreaksInput.value();
    breaksCompleted = 0;
    roundsCompleted = 0;
    breakLength = breakLengthInput.value(); // read break length from input field
    numBreaks = numBreaksInput.value(); // read number of breaks from input field
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
    roundsCompleted = 0;
    breaksCompleted = 0;
    console.log ("resetbuttonpressed")

}

function draw() {

    //background colour 
    background(220);

    // start button
    start_button = createButton("Start");

    start_button.position(150,200);

    start_button.mousePressed(start_timer);


    //pause button
    pause_button = createButton("Pause");

    pause_button.position(100,200);

    pause_button.mousePressed(pause_timer);


    //reset timer
    reset_button = createButton("Reset");

    reset_button.position(20,200);

    reset_button.mousePressed(reset_timer);



 //timer logic

 //timer logic
 if (timerPaused && timerBool){
    
 }
 else if (timerBool) {
   timerValue = (millis() - timerStart) * 0.001;
   let timeRemaining = round(timerLength - timerValue);

   if (timeRemaining <= 0) {
     timerBool = false;
     timerComplete = true;
     currentRound++;
   }
 }

 let totalTime = timerValue + timerPausedValue;

 // check if it's time for a break
 if (currentRound > 0 && currentRound % roundsPerBreak == 0) {
   if (!breakStarted) {
     breakStart = millis();
     breakStarted = true;
   }
   let breakTimeElapsed = round((millis() - breakStart) * 0.001);
   let breakTimeRemaining = breakLength - breakTimeElapsed;

   if (breakTimeRemaining <= 0) {
     breakStarted = false;
     currentBreak++;
   } else {
     fill(0, 102, 153);
     textSize(50);
     text("Break: " + breakTimeRemaining + " seconds", 20, 80);
   }
 } else {
   fill(0, 102, 153);
   textSize(50);
   text("Round: " + currentRound + "/" + numRounds, 20, 80);
   text("Timer length: " + timerLength + " seconds", 20, 150);
   text("Breaks: " + currentBreak + "/" + numBreaks, 20, 220);
   text(totalTime.toString(), 400, 400);
 }

 // check if it's time for a new round
 if (currentRound <= numRounds) {
   if (!timerBool && !timerComplete && !breakStarted) {
     timerLength = round(timerLengthInput.value());
     timerValue = 0;
     timerPausedValue = 0;
     timerBool = true;
     timerComplete = false;
     timerStart = millis();
   }
 } else {
   fill(0, 102, 153);
   textSize(50);
   text("All rounds complete!", 20, 80);
 }

 // displaying timer
fill(0, 102, 153);
textSize(50);
text(
  "Round" + (roundCount + 1) + "/" + numRounds + ", Time Left: " + (timerLength - totalTime),
  20,
  80
);

// timer complete text
if (timerComplete) {
    fill(0, 102, 153);
    textSize(50);
    if (roundCount < numRounds - 1) {
      text("Round " + (roundCount + 1) + " complete! Get ready for next round.", 150, 450);
    } else {
      text("Well Done!", 450, 450);
    }
  }


}



