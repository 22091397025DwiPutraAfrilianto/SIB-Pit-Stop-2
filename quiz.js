const questions = [
    { question: "Apa bahasa Jawa dari 'minum'?", answers: { A: "Turu", B: "Mangan", C: "Ngombe" }, correct: "C" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },
    { question: "Saiki wes kelas pira 'dua'?", answers: { A: "satu", B: "dua", C: "tiga" }, correct: "B" },

  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const answers = document.getElementsByClassName("answer");
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    answers[0].textContent = "A. " + currentQuestion.answers.A;
    answers[1].textContent = "B. " + currentQuestion.answers.B;
    answers[2].textContent = "C. " + currentQuestion.answers.C;
  }
  
  function selectAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (answer === correctAnswer) {
      score++;
    }
    document.getElementById("score-display").textContent = `Score: ${score}/20`;
  }
  
  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      alert(`Quiz selesai! Skor akhir: ${score}/20`);
      currentQuestionIndex = 0;
      score = 0;
      loadQuestion();
    }
    
    window.location.href = "quiz.html";


}

  
  document.addEventListener("DOMContentLoaded", loadQuestion);
  