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
    console.log(`my words:${transcript}`);

    if (transcript.includes("hello ghost") || transcript.includes("hey ghost") || transcript.includes("hi ghost")) {
        readOut("hello sami sir")
    }

    if (transcript.includes("open youtube") || transcript.includes("open you tube")) {
        readOut("opening youtube sir");
        window.open("https://www.youtube.com/");
    }
    if (transcript.includes("open google") || transcript.includes("open Google")) {
        readOut("opening google sir");
        window.open("https://www.google.com/");
    }

    //google search
    if (transcript.includes("search for")) {
        readOut("here's the result");
    
        let input = transcript.slice(11);
        input = input.trim().split(" ").join("+");
    
        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
    }

    if (transcript.includes("open github") || transcript.includes("open git hub")) {
        readOut("opening github sir");
        window.open("https://github.com/");
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
    // speech.voice = allVoices[0];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}

// example

speakBtn.addEventListener("click", () => {
    readOut("hello,my dear enthusiatsic devs on the planett");
});

