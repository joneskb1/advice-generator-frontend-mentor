const dice = document.querySelector(".dice");
const quoteText = document.querySelector(".quote-text");
const adviceText = document.querySelector(".advice-text");
const diceBackground = document.querySelector(".dice-background");

async function fetchData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    adviceText.textContent = `ADVICE #${data.slip.id}`;
    quoteText.textContent = `"${data.slip.advice}"`;
  } catch (err) {
    console.log(err);
  }
}

function removeGlow() {
  diceBackground.style.boxShadow = "none";
}

dice.addEventListener("click", fetchData);
dice.addEventListener("touchstart", fetchData);
dice.addEventListener("touchend", removeGlow);
