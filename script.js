const quizData = [
    {
        question: 'How old is Conor Mcgregor?',
        a: '40',
        b: '28',
        c: '33',
        d: '90',
        correct:'c'
    }, 
    {
        question: 'What is his Nationality?',
        a: 'British',
        b: 'Irish',
        c: 'Scotland',
        d: 'United States',
        correct: 'b'
    }, 
    {
        question: 'Which company is 2x former Champion?',
        a: 'Cage Warrior' ,
        b: 'StrikeForce',
        c: 'Ufc' ,
        d: 'a&c are correct',
        correct: 'd'
    }, 
    {
        question: 'What is his Most Famous NickName?',
        a: 'Magic Mac' ,
        b: 'Irish Nightmare',
        c: 'Irish Hummer' ,
        d: 'The Notorious',
        correct: 'd'
    }, 
    {
        question: 'How many divisions he fought/compete?',
        a: '1' ,
        b: '2',
        c: '3' ,
        d: '4',
        correct: '3'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit"); /*aca nos traemos el boton desde el html también q casi se nos olvida jeje*/


let currentQuiz = 0;
let score = 0; /*puntaje*/ 

loadQuiz(); /*el cuestionario dde arrancamos abajo la funcion de todo para ejecutar la carga de cada preg*/

function loadQuiz () {
    deselectAnswers(); //acordate de poner esto aqui para llamarla cada vez q se cargue el change de quiz

    const currentQuizData = quizData[currentQuiz];
        
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
        return answer;
}

function deselectAnswers() { /*esta funcion nos sirve para cuando pasemos de pregunta se deseleccione el punto q seleccionamos anteriormente asi queda en blanco y puedes volver a elegir libremente*/

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // aca cliqueas la respuesta
    const answer = getSelected();


    if(answer) {
        if (answer === quizData[currentQuiz].correct){
            score++; /*si es correcta suma punto*/
        } 
    
        currentQuiz++; /*zq pasa de preg a preg,a medida q respondo se suma la siguiente ++*/    
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else {
            // muestra los resultados
            quiz.innerHTML = ` <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                                <button onclick="location.reload()">Reload</button>`;
    }
}
});
