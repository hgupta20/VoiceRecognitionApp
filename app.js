const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function() {
    console.log('I am listening');

};
recognition.onresult = function(event) {
    console.log(event);
    const current = event.resultIndex;

}

btn.addEventListener('click', () => {
    recognition.start();
});