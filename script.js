let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },

    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt; and &lt;iframeset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;iframeset&gt;",
        "right_answer": 2
    },

    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },

    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    }
];

currentQuestionIndex = 0;

function init() {
    displayQuestionNumbers();
    displayQuestion();

}


function displayQuestionNumbers() {
    let questionNum = document.getElementById('question-footer');
    questionNum.innerHTML = ``;
    for (let i = 0; i < questions.length; i++) {
        const questionsElement = questions[i];
        questionNum.innerHTML = `
        <span id="questionNum"><b>${currentQuestionIndex + 1}</b> of <b>${questions.length}</b></span>
        <button onclick="nextQuestion()" class="btn btn-primary" id="nextBtn" disabled >Nächste Frage ></button>
        `;
    }
}

function displayQuestion() {
    let question = questions[currentQuestionIndex];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestionIndex];
    console.log('selescted answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selescted question number is', selectedQuestionNumber);
    console.log('current question is', question['right_answer'])

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('nextBtn').disabled = false;

}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestionNumbers();
    } else {
        document.getElementById('quizCardBody').classList.add('d-none');
        document.getElementById('endScreen').classList.remove('d-none');
        document.getElementById('quiz-top-img').src = "./assets/img/quiz_winner_cup.png";
       // alert('Du hast alle Fragen beantwortet!');
    }
    displayQuestion();
    clearClasses();

}
function clearClasses() {
    let childNodes = document.getElementById('quizCardBody').childNodes;

    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType == Node.ELEMENT_NODE) {
            childNodes[i].classList.remove('bg-success');
            childNodes[i].classList.remove('bg-danger');
        }
    }

}
/*

*/ 