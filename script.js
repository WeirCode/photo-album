//get Date Range variable
function getDateRange(){
    today = new Date();
    const currentYear = today.getFullYear();
    christmasStart = new Date(currentYear, 11, 1);
    christmasEnd = new Date(currentYear, 11, 30);
    newyearStart = new Date(currentYear, 11, 30);
    newyearEnd = new Date(currentYear, 11, 31);
    newyearNextStart = new Date(currentYear, 0, 1);
    newyearNextEnd = new Date(currentYear, 0, 5);
    anniversaryStart = new Date(currentYear, 5, 5);
    anniversaryEnd = new Date(currentYear, 5, 10);
    valentinesStart = new Date(currentYear, 1, 12);
    valentinesEnd = new Date(currentYear, 1, 18);
    birthdayStart = new Date(currentYear, 10, 10);
    birthdayEnd = new Date(currentYear, 10, 20);
    if(today <= birthdayEnd && today >= birthdayStart){
        return 5;
    }else if(today <= christmasEnd && today >= christmasStart){
        return 4;
    } else if((today >= newyearStart && today <= newyearEnd) || (today <= newyearNextEnd && today >= newyearNextStart)){
        return 3;
    } else if(today >= valentinesStart && today <= valentinesEnd){
        return 2;
    } else if(today >= anniversaryStart && anniversaryEnd >= today){
        return 1;
    } else{
        return 0;
    }
}
//SETS VARIABLES BASED ON DATE RANGE
function setVariables(range){
    let happy = "happy";
    let happycount = 6;
    let image = "slides";
    let imageCount = 23;
    let mode;
    let playlistCount;
    let backgroundEffect;
    let colorScheme;
    if(range == 1){
        playlistCount = 0;
        backgroundEffect = "Stars";
        colorScheme = "Sunset";
        mode = "anniversary";
        document.getElementById("title").textContent = "💐 Happy Anniversary! I love you so much! 💕";
    } else if(range == 2){
        playlistCount = 0;
        backgroundEffect = "Hearts";
        colorScheme = "Sunset";
        mode = "valentine";
        document.getElementById("title").textContent = "Happy Valentines Day! ❤️❤️❤️";
    } else if(range == 3){
        playlistCount = 12;
        backgroundEffect = "Fireworks";
        colorScheme = "Night";
        mode = "newyear";
        document.getElementById("title").textContent = "Happy New Year! 🎇🎇🎇";
    } else if(range == 4){
        playlistCount = 10;
        backgroundEffect = "Snow";
        colorScheme = "Winter";
        mode = "christmas";
        document.getElementById("title").textContent = "Happy Christmas Baby! 🎁🎄🎁";
    } else if(range == 5){
        playlistCount = 0;
        playlist = "music/birthday/track";
        backgroundEffect = "Stars";
        colorScheme = "Night";
        mode = "birthday";
        document.getElementById("title").textContent = "Happy Birthday Baby! 🎂🎉🎈";
    } else{
        playlistCount = 12;
        backgroundEffect = "Stars";
        colorScheme = "Sunset";
        mode = "default";
        document.getElementById("title").textContent = "❤️ I Love You! ❤️";
    }
    return [mode, playlistCount, happy, happycount, imageCount, image, backgroundEffect, colorScheme];
}
//Set Days Together
function calculateDaysTogether() {
    const anniversaryDate = new Date("2023-04-08 00:00");
    const today = new Date();
    const timeDifference = today - anniversaryDate;
    const daysTogether = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
    document.getElementById("daysCount").textContent = daysTogether;
}
//background effects
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
function createSnow(){
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow-container');
    document.body.appendChild(snowContainer);

    let snowflakeCount = 0;
    const maxSnowflakes = 250;

    function createNewSnowflake(){
        if (snowflakeCount >= maxSnowflakes) return;
        const snow = document.createElement('div');
        snow.classList.add('snow');
        const size = Math.random();
        if (size < 0.5) {
            snow.classList.add('small');
        }else {
            snow.classList.add('medium');
        }
        const topPos = -1 + '%';
        const leftPos = Math.random() * 100 + '%';
        const speed = Math.random() * 5 + 2;
        const horizontalDrift = Math.random() * 50 - 10;
        snow.style.top = topPos;
        snow.style.left = leftPos;
        snow.style.setProperty('--random-x', `${horizontalDrift}%`);
        snow.style.animationDuration = `${speed + 5}s`;
        snowContainer.appendChild(snow);
        snowflakeCount++;
        setTimeout(() => {
            snow.remove();
            snowflakeCount--;
        }, (speed+5) * 1000);
    }
    if(window.innerWidth <= 800){
        setInterval(createNewSnowflake, 150);
    } else{
        setInterval(createNewSnowflake, 40);
    }
}
function createAurora(){

}
function createFireworks(){//create a container to hold the fireworks
    const fireworkContainer = document.createElement('div');
    fireworkContainer.classList.add('firework-container');
    document.body.appendChild(fireworkContainer);

    let fireworkCount = 0;
    const maxFireworks = 250;
    const fireworks = {};
    function createCluster(){
        const firework = document.createElement('div');//create a firework cluster
        fireworkContainer.appendChild(firework);//add to container
        randomNumber
        randomColor
        for(let i = 0; i < randomNumber; i++){//create random number of particles
            const particle = document.createElement('div');
            particle.style.backgroundColor(randomColor);//give random color
            fireworks[firework].append(particle);//add to dictionary for later
            firework.appendChild(particle);//add to firework div
        }
        launchCluster(firework);//launch from bottom

    }
    function launchCluster(firework){
        firework.classList.add('animate');//somehow move the whole dive of particles up in a curve
        explode(firework);//call explode to make particles scatter
    }
    function explode(firework){
        for(let i = 0; i < fireworks[firework].length(); i++){//for every particle make go a random direction give slight curve
            fireworks[firework][i].classList('explode');
        }
        //somehow delete the firework after and the particles and the entry in the dictionary
    }
    createCluster();

}
function createHearts(){

}
//color schemes
function Theme(theme){
    let elements = [document.getElementById('body'),document.getElementById('container'),document.getElementById('title'),document.getElementById('days-together'), document.getElementById('makeMeHappy'),document.getElementById('bucket-list-container'),document.getElementById('bucketList'),document.getElementById('bottom-image-container'),document.getElementById('bottom-image-container2'), document.getElementById('random-image'),document.getElementById('nextButton')];
    for(var i = 0; i < elements.length;i++){
        elements[i].classList.add(theme);
    }
}
window.onload = function() {
    let [mode,playlistCount,happy,happyCount,imageCount,image, backgroundEffect, colorScheme] = setVariables(getDateRange());
    document.getElementById("bottom-image-container").innerHTML = "<img id='bottomImage' src='images/" + mode + "/left.png' alt=''>";
    document.getElementById("bottom-image-container2").innerHTML = "<img id='bottomImage2' src='images/" + mode + "/right.png' alt=''>";
    document.getElementById("random-image").innerHTML = "<img id='random' src='images/" + mode + "/random.png' alt=''>";

    const activeplayer = [];
    for (let i = 1; i <= playlistCount; i++){
        activeplayer.push('music/'+mode+'/track'+i+'.mp3');
    }

    const happyMessages = [];
    for(let i = 1; i<happyCount; i++){
        happyMessages.push('music/'+happy+'/happy'+i+'.mp3');
    }
    document.getElementById('makeMeHappy').addEventListener('click', function() {
        const randomMessage = happyMessages[Math.floor(Math.random() * happyMessages.length)];
        audioPlayer.src = randomMessage;
        audioPlayer.play();
    });

    const images = [];
    for(let i = 1; i <=imageCount; i++){
        images.push('images/'+image+'/image'+i+'.jpg');
    }
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        sliderImage.src = images[currentImageIndex];
    }
    let currentImageIndex = 0;
    document.getElementById('sliderImage').addEventListener('click', changeImage);
    
    function placeRandomImage() {
        const imageDiv = document.getElementById("random-image");
        const maxTilt = 70; // Maximum tilt angle in degrees
    
        // Get the dimensions of the viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
    
        // Generate random top and left positions
        const randomLeft = Math.random() * (viewportWidth - 100);
        const randomTop = Math.random() * (viewportHeight - 100);
    
        // Generate a random tilt angle between -maxTilt and maxTilt
        const randomTilt = Math.random() * maxTilt * 2 - maxTilt;
    
        // Apply the new position and tilt
        imageDiv.style.left = `${randomLeft}px`;
        imageDiv.style.top = `${randomTop}px`;
        imageDiv.style.transform = `rotate(${randomTilt}deg)`;
    }
    placeRandomImage();
    window.addEventListener('resize', placeRandomImage);

    calculateDaysTogether();
    let currentTrack = -1;
    function playNextTrack() {
        let nextTrack;
        if(activeplayer.length > 1){
            do {
                nextTrack = Math.floor(Math.random() * activeplayer.length);
            } while (nextTrack === currentTrack);
        }
        else{
            nextTrack = 1;
        }
        currentTrack = nextTrack;
        audioPlayer.src = activeplayer[currentTrack];
        audioPlayer.play();
    }
    document.getElementById('nextButton').addEventListener('click', playNextTrack);
    document.getElementById('audioPlayer').addEventListener('ended', function() {playNextTrack();});
    playNextTrack();

    //backgroundeffect
    switch(backgroundEffect){
        case "Stars":
            createStars();
            break;
        case "Snow":
            createSnow();
            break;
        case "Fireworks":
            createFireworks();
            break;
        case "Hearts":
            createHearts();
            break;
        case "Aurora":
            createAurora();
            break;
        default:
            createStars();
    }
    switch(colorScheme){
        case "Sunset":
            Theme('sunset');
            break;
        case "Winter":
            Theme('winter');
            break;
        case "Night":
            Theme('night');
            break;
        case "Bright":
            Theme('bright');
            break;
        default:
            Theme('sunset');
    }
};
