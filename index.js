// TODO : bakacaz sonuca kimin scoru daha böyüğümüş görecez.
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

const scoreButton = document.getElementById('score-btn');
scoreButton.style.cursor = 'pointer';

const againButton = document.getElementById('again');
againButton.style.cursor = 'pointer';

quiz();

function quiz(){
    let i=0; // i = 0 tanımlıyoruz. dizi içinde dolaşmak için.
    let score=0; // score değişkeni.
    let selectedAnswer = ''; // seçilen cevap. 

    // butona tıklandığı zaman başlık gizleniyor sorular geliyor.
    startButton.addEventListener('click', () => {
        document.getElementById('main').style.display = 'none';
        document.getElementById('questions').style.display = 'block';   
        loadQ();    // soruları getiren fonk. aşağıda tanımlandı.
    });

    // buton renklerini sıfırlama fonksiyonu
    function resetColor() {
        aButton.style.backgroundColor = '';
        bButton.style.backgroundColor = '';
        cButton.style.backgroundColor = '';
        dButton.style.backgroundColor = '';
    }

    // şıklara tıklama olayları.
    aButton.addEventListener('click', () => {
        selectedAnswer = questions.questions[i].answers[0];
        resetColor();
        aButton.style.backgroundColor = 'green';
    })

    bButton.addEventListener('click', () => {
        selectedAnswer = questions.questions[i].answers[1];
        resetColor();
        bButton.style.backgroundColor = 'green';
    })

    cButton.addEventListener('click', () => {
        selectedAnswer = questions.questions[i].answers[2];
        resetColor();
        cButton.style.backgroundColor = 'green';

    })

    dButton.addEventListener('click', () => {
        selectedAnswer = questions.questions[i].answers[3];
        resetColor();
        dButton.style.backgroundColor = 'green';

    })  

    // kaydet butonu olayları.
    submitButton.addEventListener('click', () => { 

        if (selectedAnswer === '') {
            alert('please mark the answer.');
        }

        else {
    
        resetColor();
        // cevabın doğruluğunu kontrol eder.
        if (selectedAnswer === questions.questions[i].correct) { 
            score++;
        }
    
        // soru sayısı kadar yükleme yapar.
        if (i < 9) {
            i++;
            loadQ();
        }

        else {
            i++

            if (i === 10) {
                document.getElementById('main').style.display = 'none';
                document.getElementById('questions').style.display = 'none';
                document.getElementById('again-box').style.display = 'none';
                document.getElementById('score-box').style.display = 'block';
            }
        
        }

        }   
    });    

    scoreButton.addEventListener('click', () => {
        document.getElementById('main').style.display = 'none';
        document.getElementById('questions').style.display = 'none';
        document.getElementById('score-box').style.display = 'block';
        document.getElementById('score-title').innerHTML =  `Your score is ${score} out of 10.`;
        document.getElementById('score-btn').style.display = 'none';
        document.getElementById('again-box').style.display = 'block';
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

    againButton.addEventListener('click', () => {
        document.getElementById('score-box').style.display = 'none';
        document.getElementById('again-box').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.getElementById('score-title').innerHTML = 'Find out your score';
        document.getElementById('score-btn').style.display = 'block';
        quiz();
    });
    }
