
var intervalId;

function setup() {
  const startButton = select("#start-button");
  startButton.mouseClicked(setRandomImage);
}

var intervalId;

function setRandomImage(){
  var count = 0;
  const images = [
    "Images/jab.png",
    "Images/cross.png",
    "Images/lefthook.png",
    "Images/righthook.png",
    "Images/leftuppercut.png",
    "Images/rightuppercut.png"
  ];

  const imgElement = document.querySelector("#random-image");
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const img = document.createElement("img");
  imgElement.src = randomImage;
  imgElement.classList.add("centered-image"); // Apply centered-image class
  imgElement.style.animation = "anim2 2s 2s forward";
 

  clearInterval(intervalId)
  count++;
  if (count < 12){
    intervalId = setInterval( setRandomImage, 4000);
  console.log("run")
  }
  

}
