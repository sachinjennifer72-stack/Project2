document.addEventListener("DOMContentLoaded", () => {

    const seal = document.getElementById("seal");
    const envelope = document.querySelector(".envelope");
    const instruction = document.getElementById("instruction");

    const welcomeLetter = document.getElementById("welcomeLetter");
    const nextPage = document.getElementById("nextPage");

    // When AJ seal is clicked
    seal.addEventListener("click", () => {

        // Hide envelope
        envelope.style.display = "none";

        // Hide instruction
        instruction.style.display = "none";

        // Show letter
        welcomeLetter.style.display = "block";

    });

    });