const buttons = document.querySelectorAll('.matrix-button');

buttons.forEach((button) => {
  const elements = button.querySelectorAll('*');
  let buttonText = null;

  elements.forEach((element) => {
    if (element.classList.contains('matrix-text-selected')) {
      buttonText = element;
    }
  });

  if (!buttonText) {
    buttonText = button;
  }

  const originalText = buttonText.innerHTML;
  let decryptInterval;

  function matrixing() {
    if (decryptInterval) {
      clearInterval(decryptInterval);
    }

    const decryptedText = buttonText.innerHTML;
    buttonText.innerHTML = '_'; // Remplacer le texte par un seul underscore au début

    let decryptedIndex = 0;
    let loopCounter = 0; // Ajouter un compteur pour suivre le nombre de boucles effectuées
    decryptInterval = setInterval(() => {
      if (loopCounter < 2) {
        setTimeout(() => {
          const encryptedChar = getRandomChar(); // Générer un caractère chiffré aléatoire
          buttonText.innerHTML = buttonText.innerHTML.slice(0, -1) + encryptedChar; // Remplacer le dernier caractère affiché par le caractère chiffré
        }, 20);
        loopCounter++;
      } else if (decryptedIndex < decryptedText.length) {
        buttonText.innerHTML = buttonText.innerHTML.slice(0, -1);
        const decryptedChar = decryptedText[decryptedIndex];
        buttonText.innerHTML += decryptedChar;
        buttonText.innerHTML += "_";
        decryptedIndex++;
        loopCounter = 0; // Réinitialiser le compteur de boucles
      } else {
        buttonText.innerHTML = buttonText.innerHTML.slice(0, -1);
        clearInterval(decryptInterval);
        buttonText.innerHTML = originalText;
      }
    }, 30);
  }

  button.addEventListener('mouseenter', () => {
    matrixing();
  });
});

function getRandomChar() {
  const chars = 'Σ_—eAf4█7';
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}
