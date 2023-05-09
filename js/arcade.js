var images = ['Images/Jab.png', 'Images/Cross.png', 'Images/LeftHook.png', 'Images/RightHook.png', 'Images/LeftUppercut.png', 'Images/RightUppercut.png'];

var imageCount = 0;
var maxImageCount = 15; // 1 minute / 4 seconds per image
var intervalId;

function showRandomImage() {
  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];
  var img = document.getElementById('random-image');
  img.src = randomImage;
  img.style.display = 'block';
  setTimeout(hideImage, 4000);
}

function hideImage() {
  var img = document.getElementById('random-image');
  img.style.display = 'none';
  imageCount++;
  if (imageCount < maxImageCount) {
    intervalId = setInterval(showRandomImage, 4000);
  } else {
    clearInterval(intervalId);
    alert('Game over!');
  }
}

var startButton = document.getElementById('start-button');
startButton.addEventListener('click', function() {
  imageCount = 0;
  showRandomImage();
  intervalId = setInterval(showRandomImage, 4000);
});