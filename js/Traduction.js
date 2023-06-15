const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
  // Obtenir la langue sélectionnée à partir de la liste déroulante
  const selectedLanguage = languageSelect.value;

  // Construire l'URL de redirection en fonction de la langue sélectionnée
  let redirectURL = selectedLanguage + '.html';

  if (selectedLanguage === 'en') {
    // Pour la langue anglaise, rediriger vers index.html (langue par défaut)
    redirectURL = 'index.html';
  }

  // Effectuer la redirection vers la page HTML correspondante
  window.location.href = redirectURL;
});
