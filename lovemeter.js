const measureBtn = document.getElementById("measureBtn");

const result = document.getElementById("result");


measureBtn.addEventListener("click", function(){


    const name1 = document.getElementById("name1").value;

    const name2 = document.getElementById("name2").value;



    if(name1 === "" || name2 === ""){

        result.innerHTML = 
        "Please enter both names first 🤍";

        return;

    }



    // Cute fixed romantic score

    const score = 100;



    result.innerHTML = `

    💕 Calculating Love... 💕

    `;



    setTimeout(function(){


        result.innerHTML = `

        <div style="font-size:65px;">
        ❤️
        </div>


        <h2 style="color:#ffb4dd;">
        ${score}% Love Match
        </h2>


        <p>

        ${name1} & ${name2}

        <br><br>

        ✨ Perfect match! ✨

        <br>

        Your story is written in the stars 🌙🤍

        </p>

        `;



    },1500);



});