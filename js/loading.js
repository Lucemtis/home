const textloads = document.querySelectorAll('.matrix-loading');

textloads.forEach((textload) => {
  const originalText = textload.innerHTML;
  let decryptInterval;
  let loopCounterEffect = 0;

  function matrixing() {
    if (decryptInterval) {
      clearInterval(decryptInterval);
    }

    const decryptedText = textload.innerHTML;
    textload.innerHTML = '_'; // Remplacer le texte par un seul underscore au début

    let decryptedIndex = 0;
    let loopCounter = 0; // Ajouter un compteur pour suivre le nombre de boucles effectuées
    decryptInterval = setInterval(() => {
      if (loopCounter < 2) {
        setTimeout(() => {
          const encryptedChar = getRandomChar(); // Générer un caractère chiffré aléatoire
          textload.innerHTML = textload.innerHTML.slice(0, -1) + encryptedChar; // Remplacer le dernier caractère affiché par le caractère chiffré
        }, 20);
        loopCounter++;
      } else if (decryptedIndex < decryptedText.length) {
        textload.innerHTML = textload.innerHTML.slice(0, -1);
        const decryptedChar = decryptedText[decryptedIndex];
        textload.innerHTML += decryptedChar;
        textload.innerHTML += "█";
        decryptedIndex++;
        loopCounter = 0; // Réinitialiser le compteur de boucles
      } else {
        textload.innerHTML = textload.innerHTML.slice(0, -1);
        clearInterval(decryptInterval);
        textload.innerHTML = originalText;

        setTimeout(() => {
            if(loopCounterEffect <= 5){
                matrixing();
                loopCounterEffect++;
            }
            else{
                loopCounterEffect = 0;
            }
          }, 500);


      }
    }, 30);
  }

  matrixing(); // Démarrer l'effet dès que la page est chargée
});

function getRandomChar() {
  const chars = 'Σ_—eAf4█7!@#$:~';
  const randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}
