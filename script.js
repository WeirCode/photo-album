const startDate = new Date("2023-05-08"); // Change this to your anniversary date
const today = new Date();
function calculateDaysTogether(startDate, today) {
const timeDifference = today - startDate;
const daysTogether = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
document.getElementById("daysCount").textContent = daysTogether;
}
calculateDaysTogether(startDate, today);
let currentIndex = 0;
const images = document.querySelectorAll(".photo-item img");
const mainImage = document.getElementById("mainImage");
function cycleImages() {
// Remove the glow effect from the current image
images[currentIndex].parentElement.classList.remove("glowing");

// Move to the next image
currentIndex = (currentIndex + 1) % images.length;

// Add the glow effect to the new main image
mainImage.innerHTML = `<img src="${images[currentIndex].src}" alt="Memory ${currentIndex + 1}" class="image-item">`;
mainImage.classList.add("glowing");
}
setInterval(cycleImages, 5000); // Change images every 5 seconds
const bucketListSelect = document.getElementById('bucketList');

bucketListSelect.addEventListener('change', (event) => {
const selectedItem = event.target.value;
console.log(`You selected: ${selectedItem}`);
// You can also display this choice somewhere on the page
alert(`Your Bucket List item: ${selectedItem}`);
});
// List of audio clip file names (make sure the files are in the correct folder or path)
const audioFiles = [
'audio/clip1.mp3',
'audio/clip2.mp3',
'audio/clip3.mp3',
'audio/clip4.mp3',
'audio/clip5.mp3'
];
// Get the Make Me Happy button
const makeMeHappyButton = document.getElementById('makeMeHappy');
// Function to play a random audio clip
function playRandomAudio() {
// Get a random index from the audioFiles array
const randomIndex = Math.floor(Math.random() * audioFiles.length);
const audio = new Audio(audioFiles[randomIndex]);
// Play the audio clip
audio.play();
}
// Event listener for the button click
makeMeHappyButton.addEventListener('click', playRandomAudio);