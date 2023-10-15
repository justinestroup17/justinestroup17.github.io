const quizData = [
    {
        question: "What does SQL stand for?",
        a: "Strong Question Language",
        b: "Structured Query Language",
        c: "Structured Question Language",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which SQL statement is used to extract data from a database?",
        a: "OPEN",
        b: "EXTRACT",
        c: "SELECT",
        d: "GET",
        correct: "c",
    },
    {
        question: "Which SQL statement is used to update data in a database?",
        a: "UPDATE",
        b: "SAVE AS",
        c: "SAVE",
        d: "MODIFY",
        correct: "a",
    },
    {
        question: "Which SQL statement is used to delete data from a database?",
        a: "REMOVE",
        b: "TRASH",
        c: "COLLAPSE",
        d: "DELETE",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})