// Effectuer une requête HTTP pour récupérer le fichier JSON
fetch('json/allDatas.json')
  .then(response => response.json())
  .then(data => {
    // Stocker les données JSON dans la variable jsonData
    const jsonData = data;

    const lis = document.querySelectorAll('.project-li-container');

    lis.forEach(li => {
      li.addEventListener('click', function () {

        const contentContainer = document.getElementById('content-container');
        const gallery = document.querySelector('.gallery');
        const carousel = document.querySelector('.carousel');
        const info = document.querySelector('.info');
        const pbc = li.querySelector('.project-button-container');
        const siteRedirection = document.getElementById('site-redirection');
        const NavDetailButtons = document.getElementById('Nav-detail-buttons');
        const siteRedirectionNav = document.getElementById('site-redirection-nav');
        
        const dataText = this.getAttribute('data-text');
        const item = jsonData.find(item => item.title === dataText);

        if (window.innerWidth < 800) {
          pbc.appendChild(gallery);
          pbc.appendChild(info);
          pbc.appendChild(NavDetailButtons);
          
        }
        else{
          contentContainer.appendChild(gallery);
          contentContainer.appendChild(info);
        }

        if (item) {

          const imagesLines = carousel.querySelectorAll('.images-lines');

          // Supprimer les divs existants dans la classe "gallery"
          imagesLines.forEach(imagesLine => {
            carousel.removeChild(imagesLine);
          });

          const bannerThree = document.getElementById('bannerThree');
          const threeObject = document.getElementById('threeObject');
          const gallery = document.querySelector('.gallery');


          // Vérifier si l'élément contient la balise "image" dans le JSON
          if (item.image) {

            bannerThree.appendChild(threeObject);
            threeObject.classList.remove('no-images');
            
            let boolPairImpair = 0;

            for (let i = 0; i < item.image.length; i++) {
                const imagesLine = document.createElement('div'); // Crée une nouvelle div pour les images
                imagesLine.classList.add('images-lines'); // Ajoute la classe CSS 'images-lines' à la div
                

                if (boolPairImpair == 0) { // Vérifie si la div est paire
                    const img = document.createElement('img'); // Crée un élément img pour la première image
                    const figure = document.createElement('figure'); // Crée une nouvelle div pour les images
                    img.src = item.image[i]; // Définit la source de l'image à partir du tableau d'images
                    img.alt = '#'; // Définit l'attribut alt de l'image
                    figure.appendChild(img); // Ajoute l'image à la div
                    imagesLine.appendChild(figure); // Ajoute l'image à la div

                    boolPairImpair = 1;

                } else { // Si la div est impaire
                    const img1 = document.createElement('img'); // Crée un élément img pour la première image
                    const figure1 = document.createElement('figure'); // Crée une nouvelle div pour les images
                    img1.src = item.image[i]; // Définit la source de l'image à partir du tableau d'images
                    img1.alt = '#'; // Définit l'attribut alt de l'image
                    figure1.appendChild(img1); // Ajoute l'image à la div
                    imagesLine.appendChild(figure1); // Ajoute l'image à la div

                    if (i + 1 < item.image.length) { // Vérifie s'il y a une image suivante dans le tableau
                        i++;

                        const img2 = document.createElement('img'); // Crée un élément img pour la première image
                        const figure2 = document.createElement('figure'); // Crée une nouvelle div pour les images
                        img2.src = item.image[i]; // Définit la source de l'image à partir du tableau d'images
                        img2.alt = '#'; // Définit l'attribut alt de l'image
                        figure2.appendChild(img2); // Ajoute l'image à la div
                        imagesLine.appendChild(figure2); // Ajoute l'image à la div
                    }
                    
                    boolPairImpair = 0;
                }
            
                carousel.appendChild(imagesLine); // Ajoute la div d'images à la galerie
              }
            
          } else {
            threeObject.classList.add('no-images');
            gallery.appendChild(threeObject);
          }

          // Autres mises à jour à effectuer avec les autres données du JSON
          const description = document.querySelector('.description');
          const serviceDescription = document.querySelector('.service-description');
          const serviceStack = document.querySelector('.service-stack');
          const progress = document.getElementById('inProgress');

          if(item.link == "javascript:void(0);"){
            siteRedirection.removeAttribute("target");
          }
          else{
            siteRedirection.target = "_blank";
          }

          if(item.progress){
            progress.classList.add("active");
          }
          else{
            progress.classList.remove("active");
          }

          siteRedirection.href = item.link;
          siteRedirectionNav.href = item.link;
          description.textContent = item.description;
          serviceDescription.textContent = item.service;
          serviceStack.textContent = item.stack;
        }
      });
    });
  })
  .catch(error => {
    // Gérer les erreurs en cas d'échec de la récupération du fichier JSON
    console.error('Erreur lors de la récupération du fichier JSON:', error);
  });
