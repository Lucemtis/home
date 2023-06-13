const contacts = document.querySelectorAll(".contact");
const contactPan = document.getElementById("contact-pan");

const footer = document.getElementById('footer');
const footerMenu = document.getElementById('footer-menu');

const banner = document.getElementById('banner');
const titleBanner = document.getElementById('title-banner');

const infoButton = document.getElementById('info-button');
const contentContainer = document.getElementById('content-container');

// Sélectionnez tous les éléments li avec la classe "project-li-container"
const liElements = document.querySelectorAll('.project-li-container');

contacts.forEach((contact) => {
  contact.addEventListener("click", function() {
    contactPan.classList.toggle('active');
  });
});

infoButton.addEventListener('click', function() {

  contentContainer.classList.toggle('info-active');

  if (contentContainer.classList.contains('info-active')) {
    infoButton.innerHTML = 'Gallery';
  } else {
    infoButton.innerHTML = 'Info';
  }

});

banner.addEventListener('click', function() {

  titleBanner.classList.toggle('collapsed');

});


footer.addEventListener('click', function() {
  footerMenu.classList.toggle('collapsed');
});

let home = document.getElementById('home');

home.addEventListener('click', function() {
  titleBanner.classList.toggle('collapsed');
  footerMenu.classList.toggle('collapsed');
});


liElements.forEach(function(li) {
  li.addEventListener('click', function() {
    // Vérifiez si l'élément li possède déjà la classe "active"
    if (this.classList.contains('li-active')) {
      // Supprimez la classe "active" de l'élément li
      this.classList.remove('li-active');
    } else {
      // Supprimez la classe "active" de tous les éléments li
      liElements.forEach(function(li) {
        li.classList.remove('li-active');
      });

      // Ajoutez la classe "active" à l'élément li sur lequel vous avez cliqué
      this.classList.add('li-active');
    }
  });
});
