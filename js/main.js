let timerStart
let timerLength = 10
let timerValue = 0
let timerBool = false
let timerComplete = false
let timerPaused = false
let timerPausedValue = 0


function setup() {
    //create canvas of 800 x 800
    createCanvas(800, 800);

    
}


function start_timer() {
    timerPaused = false;
    timerBool = true;
    timerStart = millis();
    console.log ("startbuttonpressed")
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



    //displaying timer
    fill(0,102,153);
    textSize(50);
    text(totalTime.toString(), 400,400);

    //timer complete text
    if (timerComplete){
        fill(0,102,153);
        textSize(50);
        text("Well Done!", 450,450);

    }


}
