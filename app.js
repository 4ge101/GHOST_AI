// ELEMENTS
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");

// SPEECH RECONGNTION SETUP

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// SPEECH RECONGNTION START

recognition.onstart = function () {
    console.log("vr active");
};

// SPEECH RECONGNTION STOP

recognition.onend = function () {
    console.log("vr deactive");
};

// SPEECH RECONGNTION CONTINOUS
recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start();
});

stopBtn.addEventListener("click", () => {
    recognition.stop();
});


// GHOST SPEECH
function readOut(message) {
    const speech = new SpeechSynthesisUtterance();
    // different voices
    const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}

// example

speakBtn.addEventListener("click", () => {
    readOut("hi, my friend my name is md sami ali what is your name?");
});
