const playAudio = function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drum = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    drum.classList.add('playing');
    audio.currentTime = 0;
    audio.play()
}

const removeTransition = (e) => {
    if(e.propertyName !== 'transform') return 
    e.target.classList.remove('playing');
}


const allDrums = document.querySelectorAll('.key');
allDrums.forEach(drum => {
    drum.addEventListener('transitionend', removeTransition)
})
window.addEventListener('keydown', playAudio)
