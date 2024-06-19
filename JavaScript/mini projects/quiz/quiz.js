let quizData = {'intrebari': [{
    "text":"Ce face atributul HTML 'alt' într-o imagine?",
    "raspunsuri":[
       {
          "text":"A. Specifică un text alternativ pentru imagine",
          "corect":true,
          "explicatie":"Atributul 'alt' oferă un text alternativ care este afișat atunci când imaginea nu poate fi încărcată sau pentru utilizatorii cu dispozitive de asistență."
       },
       {
          "text":"B. Stabilește un stil alternativ pentru imagine",
          "corect":false
       },
       {
          "text":"C. Activează animații pentru imagine",
          "corect":false
       }
    ]
 },
 {
    "text":"Cum se adaugă o margine externă în CSS?",
    "raspunsuri":[
       {
          "text":"A. margin: 10px;",
          "corect":true,
          "explicatie":"Proprietatea 'margin' în CSS adaugă o margine externă în jurul unui element."
       },
       {
          "text":"B. padding: 10px;",
          "corect":false
       },
       {
          "text":"C. border: 10px solid black;",
          "corect":false
       }
    ]
 },
 {
    "text":"Care este scopul selectorului de clasă în CSS?",
    "raspunsuri":[
       {
          "text":"A. Selectează elementele care au o clasă specifică",
          "corect":true,
          "explicatie":"Selectorul de clasă în CSS ('.nume-clasa') este utilizat pentru a selecta toate elementele care au acea clasă."
       },
       {
          "text":"B. Selectează elementul cu un anumit ID",
          "corect":false
       },
       {
          "text":"C. Selectează toate elementele din document",
          "corect":false
       }
    ]
 },
 {
    "text":"Ce face proprietatea CSS 'display: none;'?",
    "raspunsuri":[
       {
          "text":"A. Face elementul invizibil",
          "corect":true,
          "explicatie":"Proprietatea 'display: none;' în CSS face elementul să fie invizibil pe pagină."
       },
       {
          "text":"B. Schimbă fontul textului",
          "corect":false
       },
       {
          "text":"C. Creează o umbrire la marginea elementului",
          "corect":false
       }
    ]
 },
 {
    "text":"Cum se adaugă o culoare de fundal în CSS?",
    "raspunsuri":[
       {
          "text":"A. background-color: red;",
          "corect":true,
          "explicatie":"Proprietatea 'background-color' stabilește culoarea de fundal a unui element în CSS."
       },
       {
          "text":"B. color: #00ff00;",
          "corect":false
       },
       {
          "text":"C. border: 1px solid blue;",
          "corect":false
       }
    ]
 }]};

// Function to load questions JSON
// const loadQuestionsJSON = async () => {
//     const resp = await fetch('./questions.json');
//     quizData = await resp.json();
// }
  

const questionContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-btn");
const nextButton = document.getElementById("new-question-btn");
const resultContainer = document.getElementById("result-container");
const explanation = document.getElementById("explanation-container");

// Choose random question from loaded data
const getRandomQuestion = () => {
    return quizData.intrebari[Math.floor(Math.random() * quizData.intrebari.length)];
}

let randomQuestion = getRandomQuestion();

// Generate HTML for questions and answers
const generateQuestionHTML = () => {
    questionContainer.innerHTML = '';
    resultContainer.innerHTML = '';
    explanation.innerHTML = '';
    randomQuestion = getRandomQuestion();
    const questionHTML = `
    <h2>${randomQuestion.text}</h2>
    <ul>
        ${randomQuestion.raspunsuri.map((answer, index) => `
            <li>
                <input type="radio" name="answer" value="${index}" id="answer${index}">
                <label for="answer${index}">${answer.text}</label>
            </li>
        `).join('')}
    </ul>
    `;
    questionContainer.innerHTML = questionHTML;
};

// Add event to check correct answer
submitButton.addEventListener("click", () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    console.log(selectedAnswer);

    if (selectedAnswer) {
        const answerIndex = parseInt(selectedAnswer.value);
        const answerObj = randomQuestion.raspunsuri[answerIndex];

        if (answerObj.corect) {
            resultContainer.innerHTML = "<p class='right'>Răspuns corect!</p>";
            explanation.innerText = answerObj.explicatie
        } else {
            resultContainer.innerHTML = "<p class='wrong'>Răspuns incorect. Încearcă din nou!</p>";
        }
    } else {
        resultContainer.innerHTML = "<p class='wrong'>Te rugăm să selectezi un răspuns înainte de a verifica.</p>";
    }
});

// Add events for handling data load, question generation
document.addEventListener('DOMContentLoaded',  async () => {
    await loadQuestionsJSON();
    // generateQuestionHTML()
});
nextButton.addEventListener("click",  generateQuestionHTML);
