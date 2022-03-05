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

// touch glow
function removeGlow() {
  diceBackground.style.boxShadow = "none";
}

function addGlow() {
  diceBackground.style.boxShadow = "0px 0px 20px 5px #52ffa8";
}

dice.addEventListener("click", fetchData);
dice.addEventListener("touchstart", addGlow);
dice.addEventListener("touchend", removeGlow);
