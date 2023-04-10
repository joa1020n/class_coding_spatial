const generatedSentence = document.getElementById('generated-sentence');
const click = document.getElementById('click-button');

const people = ['Tom', 'Lily', 'Steven', 'Catherine', 'Kazuyo'];
const times = ['6pm', '6:30', '7pm', '7:30', '8pm'];
const foods = ['pho', 'pizza', 'sushi', 'noodle', 'poke bowl'];

function generateRandomSentence() {
    const person = people[Math.floor(Math.random() * people.length)];
    const time = times[Math.floor(Math.random() * times.length)];
    const food = foods[Math.floor(Math.random() * foods.length)];

    const sentence = " I want to have ${food} with ${person} at ${time}.";
    return sentence;
}

click.addEventListener('click', () => {
    generatedSentence.textContent = generateRandomSentence();
});

generatedSentence.textContent = generateRandomSentence();