const questions = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language"],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "CSS", "Python"],
    correct: 1
  },
  {
    question: "Which is a JavaScript framework?",
    answers: ["React", "Django", "Laravel"],
    correct: 0
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: ["//", "##", "<!-- -->"],
    correct: 0
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Microsoft", "Netscape", "Google"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  document.getElementById("result").innerText = "";
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === questions[currentQuestion].correct) {
    score++;
  }
  document.getElementById("result").innerText = `Score: ${score}`;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").innerText = `Final Score: ${score} / ${questions.length}`;
  }
}

window.onload = loadQuestion;
