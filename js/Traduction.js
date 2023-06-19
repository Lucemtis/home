const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function() {
  // Obtenir la langue sélectionnée à partir de la liste déroulante de manière sécurisée
  const selectedLanguage = encodeURIComponent(languageSelect.value);

  // Construire l'URL de redirection en fonction de la langue sélectionnée
  let redirectURL = selectedLanguage + '.html';

  if (selectedLanguage === 'en') {
    // Pour la langue anglaise, rediriger vers index.html (langue par défaut)
    redirectURL = 'index.html';
  }

  // Valider l'URL de redirection avant d'effectuer la redirection
  if (isValidURL(redirectURL)) {
    // Effectuer la redirection vers la page HTML correspondante
    window.location.href = redirectURL;
  } else {
    // Gérer les URL non valides (redirection vers une page d'erreur, par exemple)
    console.error('URL de redirection non valide : ' + redirectURL);
  }
});

function isValidURL(url) {
  // Vérifier si l'URL a un format valide
  // Vous pouvez utiliser une logique de validation personnalisée ici
  return /^[\w-]+\.html$/.test(url);
}
