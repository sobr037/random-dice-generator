const rollButton = document.getElementById("roll-button");
const resultDiv = document.getElementById("result");

rollButton.addEventListener("click", () => {
  const numFaces = parseInt(document.getElementById("num-faces").value);
  const numDice = parseInt(document.getElementById("num-dice").value);
  
  let rollResults = [];
  
  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * numFaces) + 1;
    rollResults.push(roll);
  }
  
  let resultText = `You Rolled: ${rollResults.join(", ")}`;
  resultDiv.textContent = resultText;
});
