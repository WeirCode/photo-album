//days
const startDate = new Date("2023-05-08");
const today = new Date();
function calculateDaysTogether(startDate, today) {
const timeDifference = today - startDate;
const daysTogether = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
document.getElementById("daysCount").textContent = daysTogether;
}
calculateDaysTogether(startDate, today);
window.onload = function() {
    // Playlist for music
    const playlist = [
        'playlist/track1.mp3',
        'playlist/track2.mp3',
        'playlist/track3.mp3',
        'playlist/track4.mp3',
        'playlist/track5.mp3',
        'playlist/track6.mp3',
        'playlist/track7.mp3',
        'playlist/track8.mp3',
        // Add more tracks as needed
    ];

    // Playlist for happy messages
    const happyMessages = [
        'playlist/happy1.mp3',
        'playlist/happy2.mp3',
        'playlist/happy3.mp3',
        'playlist/happy4.mp3',
        'playlist/happy5.mp3',
        'playlist/happy6.mp3',
        // Add more happy messages as needed
    ];
    // Image folder and array of image filenames
    const imageFolder = 'images/';
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg',
        'image11.jpg',
        'image12.jpg',
    ];
    let currentTrack = -1; // To track the current track in the playlist
    const audioPlayer = document.getElementById('audioPlayer');
    let isHappyMessagePlaying = false; // Track whether a happy message is playing
    let currentImageIndex = 0; // Start with the first image
    const sliderImage = document.getElementById('sliderImage');
    // Function to play the next music track
    function playNextTrack() {
        // Pick a random index from the playlist, ensuring it's not the same as the last played
        let nextTrack;
        do {
            nextTrack = Math.floor(Math.random() * playlist.length); // Pick a random track
        } while (nextTrack === currentTrack); // Ensure it's not the same as the last played track

        // Update the current track index
        currentTrack = nextTrack;

        // Set the audio player source to the selected track
        audioPlayer.src = playlist[currentTrack];
        audioPlayer.play(); // Play the selected track
    }
    nextButton.addEventListener('click', playNextTrack);
    audioPlayer.addEventListener('ended', function() {
        playNextTrack();
    });
    playNextTrack();
    createStars();

    // Function to play a random happy message when the "Make Me Happy" button is clicked
    document.getElementById('makeMeHappy').addEventListener('click', function() {
        const randomMessage = happyMessages[Math.floor(Math.random() * happyMessages.length)];
        audioPlayer.src = randomMessage;
        audioPlayer.play();
        isHappyMessagePlaying = true; // Set flag to true since a happy message is now playing
    });
    
    // Function to change the image to the next one
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back to the first image
        sliderImage.src = `${imageFolder}${images[currentImageIndex]}`;
    }
    
    // Add a click event to change the image when clicked
    sliderImage.addEventListener('click', changeImage);
};
function createStars() {
    const numStars = 100;  // More stars
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');
    document.body.appendChild(starsContainer);

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize size (big, medium, small)
        const size = Math.random();
        if (size < 0.2) {
            star.classList.add('big');
        } else if (size < 0.5) {
            star.classList.add('medium');
        } else {
            star.classList.add('small');
        }

        // Randomize position (X and Y)
        const topPos = Math.random() * 70 + '%';  // Limit stars to the top 70% of the screen
        const leftPos = Math.random() * 100 + '%';

        star.style.top = topPos;
        star.style.left = leftPos;

        // Randomize the movement (distance and direction)
        const moveX = Math.random() * 2 + 'px';  // Horizontal movement (random distance)
        const moveY = Math.random() * 2 + 'px';  // Vertical movement (random distance)

        // Randomize the movement duration (slower or faster movement)
        const duration = Math.random() * 8 + 1 + 's';  // Random duration between 10 and 20 seconds

        // Set custom CSS properties for the random movement values
        star.style.setProperty('--move-x', moveX);
        star.style.setProperty('--move-y', moveY);

        // Apply the random animation duration
        star.style.animationDuration = duration;

        // Add the star to the container
        starsContainer.appendChild(star);
    }
}

