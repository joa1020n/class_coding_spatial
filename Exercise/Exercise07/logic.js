let generatedSentence = document.getElementById('generated-sentence');
let clickbutton = document.getElementById('click-button');

const people = ['Yuli', 'Weiwei', 'Steven', 'Nicolas', 'Kazuyo'];
const times = ['6pm', '6:30pm', '7pm', '7:30pm', '8pm'];
const foods = ['pho', 'pizza', 'sushi', 'noodle', 'poke bowl'];

function generateRandomSentence() {
    let person = people[Math.floor(Math.random()* people.length )];
    let time = times[Math.floor(Math.random() * times.length )];
    let food = foods[Math.floor(Math.random() * foods.length )];

    const sentence = " I want to have " + food +" with "+ person + " at " + time +".";
    return sentence;
}

clickbutton.addEventListener('click', () => {
    generatedSentence.textContent = generateRandomSentence();
});

// generatedSentence.textContent = generateRandomSentence();