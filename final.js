const playButton = document.getElementById("playButton");

const intro = document.querySelector(".intro");

const title = document.querySelector("h1");

const videoSection = document.getElementById("videoSection");

const video = document.getElementById("ourVideo");

const endingMessage = document.getElementById("endingMessage");

playButton.addEventListener("click", function(){

    /* Fade out intro */

    title.style.opacity = "0";

    intro.style.opacity = "0";

    playButton.style.opacity = "0";

    title.style.transition = ".8s";
    intro.style.transition = ".8s";
    playButton.style.transition = ".8s";

    setTimeout(function(){

        title.style.display = "none";
        intro.style.display = "none";
        playButton.style.display = "none";

        videoSection.style.display = "block";

        video.play();

    },800);

});


video.addEventListener("ended", function(){

    // Hide the video

    videoSection.style.display = "none";

    // Show ending

    endingMessage.style.display = "block";

    endingMessage.animate(

        [

            {
                opacity:0,
                transform:"translateY(50px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],

        {

            duration:1200,

            fill:"forwards"

        }

    );

});