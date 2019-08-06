const btn = document.querySelector('.button');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function() {
    console.log('I am listening');

};
const greetings = ['I am good, thank you for asking',
    'Doing great kiddo',
    'leave me alone',
    'I dont want to talk to you'
];
const weather = ['Weather is fine',
    'Its raining, take an umbrella',
];
const brian = ['Brian is gay',
    'Brian is cool',
    'I know that russian midget'

];
recognition.onresult = function(event) {
    console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readItOut(transcript);

};

btn.addEventListener('click', () => {
    recognition.start();
});

function readItOut(message) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = 'I dont know what you said, I am still learning';
    if (message.includes('how are you')) {

        var finaltext = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finaltext;
    }
    if (message.includes('hi')) {

        var finaltext = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finaltext;
    }
    if (message.includes('weather')) {
        var finaltext = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finaltext;
    }
    if (message.includes('Brian')) {
        var finaltext = brian[Math.floor(Math.random() * brian.length)];
        speech.text = finaltext;
    }
    if (message.includes('brian')) {
        var finaltext = brian[Math.floor(Math.random() * brian.length)];
        speech.text = finaltext;
    }


    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}