let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answers": [
            { "answer_1": "Robie Williams" },
            { "answer_2": "Lady Gaga" },
            { "answer_3": "Tim Berners-Lee" },
            { "answer_4": "Justin Bieber" }
        ],
        "right_answer": 2

    },

    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answers": [
            { "answer_1": "Text Fett" },
            { "answer_2": "Container" },
            { "answer_3": "Ein Link" },
            { "answer_4": "Kursiv" }
        ],
        "right_answer": 2

    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answers": [
            { "answer_1": "&lt;iframe&gt;, &lt;frame&gt; and &lt;iframeset&gt;" },
            { "answer_2": "&lt;iframe&gt;" },
            { "answer_3": "&lt;frame&gt;" },
            { "answer_4": "&lt;iframeset&gt;" }
        ],
        "right_answer": 1

    },

    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answers": [
            { "answer_1": "let 100 = rate;" },
            { "answer_2": "100 = let rate;" },
            { "answer_3": "rate = 100;" },
            { "answer_4": "let rate = 100;" }
        ],
        "right_answer": 3

    }
];

currentQuestionIndex = 0;

function init() {
    displayQuestionNumbers();
    displayQuestion();
    displayAnswers();
}

function displayQuestionNumbers() {
    let questionNum = document.getElementById('question-footer');
    questionNum.innerHTML = ``;
    for (let i = 0; i < questions.length; i++) {
        const questionsElement = questions[i];

        questionNum.innerHTML = `
        <span id="questionNum"><b>${currentQuestionIndex + 1}</b> of <b>${questions.length}</b></span>
        <a onclick="nextQuestion()" class="btn btn-primary">Nächste Frage ></a>
        `;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestionNumbers();
    }

}

function displayQuestion() {
    let question = questions[currentQuestionIndex]
    document.getElementById('questionText').innerHTML = question['question'];

}

function displayAnswers() {
    let answerText = document.getElementById('answer${j}');
   // let answerElement = questions[j]
    for (let j = 0; j <= questions[j]['answers'].length; j++) {
        const answer = questions[j]['answers']
        answerText.innerHTML = `
${answer}

    `;

    }

}

function answer(selection) {

    let question = questions[0];
    let answer1Btn = document.getElementById('answerCard1');
    answer1Btn.addEventListener('click', function() {
    console.log('answer 1 has been clicked');
    }
    );
    
    console.log('selescted answer is', selection);
    //console.log('the index of this answer is', question.indexOf('answer_1'));
    
    console.log('the value of the right answer is', question['right_answer']);
    
    let answerIndex = questions.findIndex(function(answer1) {
    console.log(answer1.answer_1 == 'Robie Williams');
    
    });
    console.log(answerIndex); 
    }
    
    //var index = peoples.findIndex(function(person) {
        //return person.attr1 == "john"
      //});
    
     // With ES6 syntax you get to write this:
      
      //var index = peoples.findIndex(p => p.attr1 == "john");
    
    //}
    
    /*
    
    */ 


/*
z
for (let i = 0; i < questions.length; i++) {
    console.log(questions[i].question);

    for (let j = 0; j < questions[i].answers.length; j++) {

        let answerObj = questions[i].answers[j];

        for (let key in answerObj) {
            console.log(`${key}: ${answerObj[key]}`);
        }
    }
    console.log(''); 
}






*/ 