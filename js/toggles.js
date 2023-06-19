const contacts = document.querySelectorAll(".contact");
const contactPan = document.querySelector("#contact-pan");

const footer = document.querySelector('#footer');
const footerMenu = document.querySelector('#footer-menu');

const banner = document.querySelector('#banner');
const titleBanner = document.querySelector('#title-banner');

const infoButton = document.querySelector('#info-button');
const contentContainer = document.querySelector('#content-container');

const liElements = document.querySelectorAll('.project-li-container');

contacts.forEach((contact) => {
  contact.addEventListener("click", function() {
    contactPan.classList.toggle('active');
  });
});

infoButton.addEventListener('click', function() {
  contentContainer.classList.toggle('info-active');

  if (contentContainer.classList.contains('info-active')) {
    infoButton.textContent = 'Gallery';
  } else {
    infoButton.textContent = 'Info';
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
    if (window.innerWidth < 800 && this.classList.contains('li-active')) {
      this.classList.remove('li-active');
    } else {
      liElements.forEach(function(li) {
        li.classList.remove('li-active');
      });

      this.classList.add('li-active');
    }
  });
});
