// Selects the button and fun fact paragraph from the HTML
const funFactButton = document.getElementById("fun-fact-button");
const funFact = document.getElementById("fun-fact");

// Shows or hides the fun fact when the button is clicked
funFactButton.addEventListener("click", function () {
    funFact.classList.toggle("hidden");

    if (funFact.classList.contains("hidden")) {
        funFactButton.textContent = "Show Fun Fact";
    } else {
        funFactButton.textContent = "Hide Fun Fact";
    }
});