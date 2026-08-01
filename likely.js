const questions = [

{
question:"Who noticed the other first?",

options:["Babu ❤️","Dudu ❤️"],

answer:1,

message:"💜 You noticed me in my lavender kurti long before I even knew you existed."
},

{
question:"Who fell in love first?",

options:["Bubu ❤️","Dudu ❤️"],

answer:1,

message:"❤️ You definitely fell first... but I fell just as deeply."
},

{
question:"Who loves coffee more?",

options:["Chokti ☕","Dudu ☕"],

answer:0,

message:"☕ Coffee and Chokti are basically inseparable."
},

{
question:"Who is more dramatic?",

options:["Gunda Babu 😂","Dudu 😂"],

answer:0,

message:"🎭 Even the smallest things can become a full Bollywood scene. 😂"
},

{
question:"Who gives the best surprises?",

options:["Sona Babu 🎁","Dudu 🎁"],

answer:0,

message:"🎁 You always know how to make ordinary days feel special."
},

{
question:"Who steals food from the other's plate?",

options:["Motka Babu 🍟","Dudu 🍟"],

answer:0,

message:"🍟 'I'm not hungry'... then suddenly half your food disappears. 🤭"
},

{
question:"Who sends longer messages?",

options:["Chota Baby 📱","Dudu 📱"],

answer:0,

message:"📱 One Chota Baby message = one whole paragraph... and every word is worth reading."
},

{
question:"Who is more impatient while waiting for a reply?",

options:["Cutu Babu ⏳","Dudu ⏳"],

answer:0,

message:"⏳ 'Hello??' after just two minutes. 😂❤️"
},

{
question:"Who is more obsessed with taking pictures?",

options:["Pari Babu📸","Dudu 📸"],

answer:0,

message:"📸 Every little memory deserves to be captured forever."
},

{
question:"Who starts singing incorrect lyrics?",

options:["Bubu 🎤","Dudu 🎤"],

answer:1,

message:"🎤 Confidence: 100%. Correct lyrics: 0%. But somehow... I still love listening to you. 🤣❤️"
}

];
let currentQuestion = 0;

const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const current = document.getElementById("currentQuestion");
const quizCard = document.querySelector(".question-box");
const resultBox = document.getElementById("resultBox");

loadQuestion();

function loadQuestion(){

    const q = questions[currentQuestion];

    current.textContent = currentQuestion + 1;

    question.textContent = q.question;

    option1.textContent = q.options[0];
    option2.textContent = q.options[1];

    feedback.style.display = "none";
    nextBtn.style.display = "none";

    option1.disabled = false;
    option2.disabled = false;

    option1.classList.remove("correct","wrong");
    option2.classList.remove("correct","wrong");

}

option1.addEventListener("click",function(){

    checkAnswer(0);

});

option2.addEventListener("click",function(){

    checkAnswer(1);

});

function checkAnswer(choice){

    const q = questions[currentQuestion];

    option1.disabled = true;
    option2.disabled = true;

    if(choice === q.answer){

        if(choice===0){

            option1.classList.add("correct");

        }else{

            option2.classList.add("correct");

        }

    }else{

        if(choice===0){

            option1.classList.add("wrong");
            option2.classList.add("correct");

        }else{

            option2.classList.add("wrong");
            option1.classList.add("correct");

        }

    }

    if(choice === q.answer){

    feedback.innerHTML =
    "✨ Exactly! ❤️<br><br>" + q.message;

}else{

    feedback.innerHTML =
    "🥹 Oops! Not this time.<br><br>The correct answer was <b>" +
    q.options[q.answer] +
    "</b> ❤️<br><br>" +
    q.message;

}

feedback.style.display = "block";

nextBtn.style.display = "inline-block";

}

nextBtn.addEventListener("click",function(){

    currentQuestion++;


    if(currentQuestion < questions.length){

        loadQuestion();

    }

    else{

        quizCard.style.display = "none";

        document.querySelector(".progress").style.display = "none";

        resultBox.style.display = "block";

    }

});