/* ==========================================
   CHAPTER MAGIC EFFECTS
========================================== */


/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (4 + Math.random() * 5) + "s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },9000);

}


setInterval(createHeart,800);



/* =========================
   STAR TWINKLE RANDOMNESS
========================= */


const stars = document.querySelector(".stars");


for(let i=0;i<80;i++){

    let star=document.createElement("span");

    star.classList.add("star-dot");


    star.style.left =
    Math.random()*100 + "%";


    star.style.top =
    Math.random()*100 + "%";


    star.style.animationDelay =
    Math.random()*5 + "s";


    stars.appendChild(star);

}



/* =========================
   PAGE LOAD EFFECT
========================= */


window.addEventListener("load",()=>{

    document.querySelector(".chapter-container")
    .style.opacity="1";

});