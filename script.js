const question = [
    {
        question: "Who is My fav Hero?",
        answers:[
            {text:"Salman Khan", correct:false},
            {text:"Akshay Kumar", correct:false},
            {text:"Sha rukh khan", correct:true},
            {text:"Prabhas", correct:false},
        ]
    },
    {
        question: "Which Place i prefer to visit first after getting a job?",
        answers:[
            {text:"Munnar", correct:true},
            {text:"Rajasthan", correct:false},
            {text:"Kashmir", correct:false},
            {text:"Ladakh", correct:false},
        ]
    },
    {
        question: "Which Color i find attractive?",
        answers:[
            {text:"Pink", correct:false},
            {text:"White", correct:true},
            {text:"Blue", correct:false},
            {text:"Red", correct:false},
        ]
    },
    {
        question: "Which Date I prefer?",
        answers:[
            {text:"Long Drive", correct:false},
            {text:"Gangar Par", correct:true},
            {text:"Lunch Date", correct:false},
            {text:"Suprise Date", correct:false},
        ]
    },
    {
        question: "Which is my Dream Foreign place?",
        answers:[
            {text:"Switzerland", correct:true},
            {text:"Dubai", correct:false},
            {text:"USA", correct:false},
            {text:"Australia", correct:false},
        ]
    },
    {
        question: "Which one is my fav cuisine?",
        answers:[
            {text:"Chinese", correct:false},
            {text:"Indian", correct:true},
            {text:"Italian", correct:false},
            {text:"Thai", correct:false},
        ]
    },
    {
        question: "Which sports I like to watch?",
        answers:[
            {text:"Busket Ball", correct:false},
            {text:"Football", correct:false},
            {text:"Tennis", correct:false},
            {text:"Cricket", correct:true},
        ]
    },
    {
        question: "Who is my fav cricketer?",
        answers:[
            {text:"Dhoni", correct:false},
            {text:"KL Rahul", correct:false},
            {text:"Virat Kohli", correct:true},
            {text:"Gautam Gambhir", correct:false},
        ]
    },
    {
        question: "Which movie i always ready to watch?",
        answers:[
            {text:"Chak de India", correct:true},
            {text:"Dilwale", correct:false},
            {text:"Jawan", correct:false},
            {text:"Darr", correct:false},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nxtButton = document.getElementById("nxt");

let currentQuestionIndex=0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score =0;
    nxtButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nxtButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nxtButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}`;
    nxtButton.innerHTML ='Play Again'
    nxtButton.style.display='block'
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();
    }else{
        showScore();
    }
}
nxtButton.addEventListener("click",() => {
    if(currentQuestionIndex< question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();

