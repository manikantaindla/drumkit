// Mapping of button class to corresponding sound file
const sounds = {
    'w': 'tom-1.mp3',
    'a': 'tom-2.mp3',
    's': 'tom-3.mp3',
    'd': 'tom-4.mp3',
    'j': 'kick-bass.mp3',
    'k': 'crash.mp3',
    'l': 'snare.mp3'
};


function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}


function handleClick(buttonClass) {
    const soundFile = sounds[buttonClass];
    playSound(soundFile);
    document.querySelector(`.${buttonClass}`).classList.add('pressed');
    setTimeout(() => {
        document.querySelector(`.${buttonClass}`).classList.remove('pressed');
    }, 100);
}

// Adding click event listeners to buttons
document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', function() {
        const buttonClass = this.classList[0]; 
        handleClick(buttonClass);
    });
});


document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (sounds[key]) {
        handleClick(key);
    }
});
