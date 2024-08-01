import { questions } from "./questions.js";

const [startButton, aButton, bButton, cButton, dButton, submitButton, againButton] = document.querySelectorAll("#start, #a, #b, #c, #d, #submit, #again");

let i = 0; // Soru indeksini tutar
let score = 0; // Kullanıcının skorunu tutar
let selectedAnswer = ""; // Kullanıcının seçtiği cevabı tutar

// Main fonksiyonunu başlat
function main() {
  setupEventListeners();
}

// Buton renklerini sıfırlama fonksiyonu
function resetColor() {
  aButton.style.backgroundColor = "";
  bButton.style.backgroundColor = "";
  cButton.style.backgroundColor = "";
  dButton.style.backgroundColor = "";
}

// Soruyu yükleme fonksiyonu
function loadQ(i) {
  selectedAnswer = ""; // 1.sorudan sonraki sorular için.
  document.getElementById("que").innerHTML = questions[i].question;
  document.getElementById("q").innerHTML = `Question ${i + 1} of 10`;
  aButton.innerHTML = questions[i].answers[0];
  bButton.innerHTML = questions[i].answers[1];
  cButton.innerHTML = questions[i].answers[2];
  dButton.innerHTML = questions[i].answers[3];
}

// quizi sıfırlama fonksiyonu
function resetQuiz() {
  i = 0;
  score = 0;
  selectedAnswer = "";
  resetColor();
  document.getElementById("score-box").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementById("questions").style.display = "none";
  loadQ(i);
}

// Event listener'ları tanımla
function setupEventListeners() {
  // Başlangıç butonuna tıklama olayları
  startButton.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("questions").style.display = "block";
    loadQ(i);
  });

  // Şıklara tıklama olayları
  [aButton, bButton, cButton, dButton].forEach((button, index) => button.addEventListener("click", () => {
    selectedAnswer = questions[i].answers[index];
    resetColor();
    button.style.backgroundColor = "green";
  }));

  // Submit butonuna tıklama olayları
  submitButton.addEventListener("click", () => {
    if (selectedAnswer === "") {
      alert("Please mark the answer.");
    } else {
      resetColor();
      // Cevabın doğruluğunu kontrol et
      if (selectedAnswer === questions[i].correct) {
        score++;
      }

      // Soruların bitip bitmediğini kontrol et
      if (i < 9) {
        i++;
        loadQ(i); // Sonraki soruyu yükle
      } else {
        document.getElementById("main").style.display = "none";
        document.getElementById("questions").style.display = "none";
        document.getElementById("score-box").style.display = "block";
        document.getElementById("score-title").innerHTML = `Your score is ${score} out of 10.`;
      }
    }
  });

  // Tekrar butonuna tıklama olayları
  againButton.addEventListener("click", resetQuiz);
}

// İlk yüklemede main fonksiyonunu çağır
main();
