const songs = [

{
question:"You are the one who makes my nights brighter and my heart feel complete. 🌙❤️",

options:[
"Perfect 💍",
"Tu Hi Meri Shab Hai 🌙",
"Ajab Si ✨"
],

answer:1,

message:"🌙 Yayy Dudu got it! This song feels like those quiet little moments and late-night talks. ❤️"

},


{
question:"You came into my life and suddenly everything started feeling magical and different. ✨",

options:[
"Ajab Si ✨",
"Hey Shona 💕",
"Tere Sang Yaara 🤍"
],

answer:0,

message:"✨ Correct! Some people make ordinary moments feel extraordinary. ❤️"

},


{
question:"I don't need anything else because you are my everything. ❤️",

options:[
"Tum Hi Ho ❤️",
"Perfect 💍",
"Humko Humise Chura Lo 💕"
],

answer:0,

message:"❤️ Dudu knows this one! A song that feels like a forever kind of love."

},


{
question:"I found someone who feels like my perfect person and I want forever with them. 💍",

options:[
"Tere Sang Yaara 🤍",
"Perfect 💍",
"Khuda Bhi ✨"
],

answer:1,

message:"💍 Forever vibes! Just like our little love story."

},


{
question:"Life feels happier when I have you beside me. 🌸",

options:[
"Hey Shona 💕",
"Tu Hi Meri Shab Hai 🌙",
"Tum Hi Ho ❤️"
],

answer:0,

message:"🌸 Yayy! This one feels like smiles, fun and all our cute memories."

},


{
question:"I want to spend every moment with you, no matter what happens. 🤍",

options:[
"Tere Sang Yaara 🤍",
"Perfect 💍",
"Ajab Si ✨"
],

answer:0,

message:"🤍 A song about choosing your person again and again."

},


{
question:"Will you become my forever person? 🤭💍",

options:[
"Mujhse Shaadi Karogi 💍",
"Hey Shona 💕",
"Khuda Bhi ✨"
],

answer:0,

message:"🤭 Looks like someone is asking the important question!"

},


{
question:"I want to keep you safe in my heart and never let you go. ❤️",

options:[
"Humko Humise Chura Lo 💕",
"Perfect 💍",
"Tere Sang Yaara 🤍"
],

answer:0,

message:"❤️ A beautiful classic love song for our little love story."

},


{
question:"The person who feels like home, my favourite place and my forever. 🤍",

options:[
"Tum Hi Ho ❤️",
"Perfect 💍",
"Tere Sang Yaara 🤍"
],

answer:1,

message:"🏆 Music Master unlocked! Dudu knows our little playlist too well."

}

];



let currentSong = 0;


const question = document.getElementById("question");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const feedback = document.getElementById("feedback");

const nextBtn = document.getElementById("nextBtn");

const current = document.getElementById("currentSong");

const songCard = document.querySelector(".song-card");

const resultBox = document.getElementById("resultBox");



loadSong();



function loadSong(){


const song = songs[currentSong];


current.textContent = currentSong + 1;


question.textContent = song.question;


option1.textContent = song.options[0];

option2.textContent = song.options[1];

option3.textContent = song.options[2];


feedback.style.display="none";

nextBtn.style.display="none";


option1.disabled=false;
option2.disabled=false;
option3.disabled=false;


option1.classList.remove("correct","wrong");
option2.classList.remove("correct","wrong");
option3.classList.remove("correct","wrong");


}




option1.onclick=function(){

checkAnswer(0);

}


option2.onclick=function(){

checkAnswer(1);

}


option3.onclick=function(){

checkAnswer(2);

}





function checkAnswer(choice){


const song=songs[currentSong];


option1.disabled=true;
option2.disabled=true;
option3.disabled=true;



if(choice===song.answer){

document.querySelectorAll(".song-option")[choice]
.classList.add("correct");


}

else{


document.querySelectorAll(".song-option")[choice]
.classList.add("wrong");


document.querySelectorAll(".song-option")[song.answer]
.classList.add("correct");


}



feedback.innerHTML=song.message;

feedback.style.display="block";


nextBtn.style.display="inline-block";


}





nextBtn.onclick=function(){


currentSong++;


if(currentSong < songs.length){

loadSong();

}

else{


songCard.style.display="none";

resultBox.style.display="block";


}


}