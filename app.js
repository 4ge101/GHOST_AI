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

//sr result
recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    console.log(transcript)

    if(transcript.includes("hello ghost")){
     readOut("hello sir")
     console.log("hello sir")
    }
};

// SPEECH RECONGNTION STOP

recognition.onend = function () {
    console.log("vr deactive");
};

// SPEECH RECONGNTION CONTINOUS
// recognition.continuous = true;

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
    // const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    // speech.voice = allVoices[36];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}

// example

speakBtn.addEventListener("click", () => {
    readOut("hello,my dear enthusiatsic devs on the planett");
});

