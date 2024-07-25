import questions from './questions.json' assert { type: 'json' }; // json dosyasındaki soruları çekiyoruz.

// mouse butoların üzerine geldiği zaman el imleci çıkar.
const startButton = document.getElementById('start')  
startButton.style.cursor = 'pointer';

const aButton = document.getElementById('a');
aButton.style.cursor = 'pointer';

const bButton = document.getElementById('b');
bButton.style.cursor = 'pointer';

const cButton = document.getElementById('c');
cButton.style.cursor = 'pointer';

const dButton = document.getElementById('d');
dButton.style.cursor = 'pointer';

const submitButton = document.getElementById('submit');
submitButton.style.cursor = 'pointer';

let i=0; // i = 0 tanımlıyoruz. dizi içinde dolaşmak için.
let score=0; // score değişkeni.
let selectedAnswer = ''; // seçilen cevap. 

// butona tıklandığı zaman başlık gizleniyor sorular geliyor.
startButton.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('questions').style.display = 'block';   
    loadQ();    // soruları getiren fonk. aşağıda tanımlandı.
}
)

// şıklara tıklama olayları.
aButton.addEventListener('click', () => {
    selectedAnswer = questions.questions[i].answers[0];
})

bButton.addEventListener('click', () => {
    selectedAnswer = questions.questions[i].answers[1];
})

cButton.addEventListener('click', () => {
    selectedAnswer = questions.questions[i].answers[2];
})

dButton.addEventListener('click', () => {
    selectedAnswer = questions.questions[i].answers[3];
})

// kaydet butonu olayları.
submitButton.addEventListener('click', () => { 

    // cevabın doğruluğunu kontrol eder.
    if (selectedAnswer === questions.questions[i].correct) { 
        score++;
    }
    
    // soru sayısı kadar yükleme yapar.
   if (i < 9) {
        i++;
        loadQ();
    }

    // sorular bittiğinde scoru gösterir.
    else {
        document.getElementById('questions').innerHTML =  `Your score is ${score} out of 10.`;
        submitButton.innerHTML = 'Score';
    }
});    


// soru yükleme fonsiyonu
function loadQ () {
    document.getElementById('que').innerHTML = questions.questions[i].question;
    document.getElementById('q').innerHTML = `Question ${i + 1} of 10`;
    aButton.innerHTML = questions.questions[i].answers[0];
    bButton.innerHTML = questions.questions[i].answers[1];
    cButton.innerHTML = questions.questions[i].answers[2];
    dButton.innerHTML = questions.questions[i].answers[3];
    selectedAnswer = '';

}
