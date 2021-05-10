var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var startDiv = document.querySelector('.start-div');
var questionDiv = document.querySelector('.question-div');
var initialDiv = document.querySelector('.initial-div');
var scoreboardDiv = document.querySelector('.scoreboard-div');

var choices = document.querySelector('.choices')
var question = document.querySelector('#question')

//*Questions and answers*//

var Questions = [
    {
        question: "What does HTML stand for?",

        answers: {
            a: 'Hyper Text Markup Language',
            b: 'How To Markup Language',
            c: 'Hyper To Much Language',
            d: 'Have To Many Leaves'
        },
        correctAnswer: 'a'
    },
    {
        question: "What does CSS stand for?",

        answers: {
            a: 'Customer Service and Support',
            b: 'Colors Sun Sea',
            c: 'Cascading Style Sheet',
            d: 'Cost So Sweet',
        },
        correctAnswer: 'c'
    },

    {
        question: "What is Javascript?",

        answers: {
            a: 'A type of kling-on language',
            b: 'A cake',
            c: 'A new type of sport',
            d: 'A text-based programming language',

        },
        correctAnswer: 'd'
    },

    {
        question: "What does API stand for?",

        answers: {
            a: 'American Petroleum Insttitute',
            b: 'Application Programming Interface',
            c: 'Apple Pie Icing',
            d: 'Apple Pecan Icicle',
        },
        correctAnswer: 'b',
    },

    {
        question: "What does DOM stand for?",

        answers: {
            a: 'Document Object Model',
            b: 'Days on Market',
            c: 'Director of Music',
            d: 'Direction of Motion',
        },
        correctAnswer: 'a',
    },
];
var index = 0

//*Evemt Listeners*//
startBtn.addEventListener("click", start)

var stop = ""
var timeLeft = Questions.length * 15

function start() {
    startDiv.classList.add("hide")
    questionDiv.classList.remove("hide")
    makeQuestion()
    stop = setInterval(countdown, 1000);
}

function makeQuestion() {
    question.innerHTML = Questions[index].question
    choices.innerHTML = `
    <li><button class="choice">${Questions[index].answers.a}</button></li>
    <li><button class="choice">${Questions[index].answers.b}</button></li>
    <li><button class="choice">${Questions[index].answers.c}</button></li>
    <li><button class="choice">${Questions[index].answers.d}</button></li>
    
    `
}

questionDiv.addEventListener('click', function () {
    count++;
    setCounterText();

});

function choices(event) {
    event.preventDefault();

}
// Timer that counts down from 75 seconds
function countdown() {
    timeLeft = timeLeft - 1

    if (timeLeft === 0) {
        clearInterval(stop)
    }
    timerEl.textContent = timeLeft

}