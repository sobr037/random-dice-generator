// Sets the rollButton & resultDiv consts:
const rollButton = document.getElementById("roll-button");
const resultDiv = document.getElementById("result");

// Rerieve button submit values:
rollButton.addEventListener("click", () => {
  const numFaces = parseInt(document.getElementById("num-faces").value);
  const numDice = parseInt(document.getElementById("num-dice").value);
  

  // Declaration for results:
  let rollResults = [];
  
  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * numFaces) + 1;
    rollResults.push(roll);
  }
  
  let resultText = `You Rolled: ${rollResults.join(", ")}`;
  resultDiv.textContent = resultText;
});
