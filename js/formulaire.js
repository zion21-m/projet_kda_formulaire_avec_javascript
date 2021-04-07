let prenom = document.querySelector('#prenom');
let nom = document.querySelector('#nom');
let groupe = document.querySelector('#groupe');
let biographie = document.querySelector('#biographie');
let boutonCreer = document.querySelector('#btnCreer');
let boutonReinitialiser = document.querySelector('.reinit');
let utilisateurs = [];


// image.src = URL.createObjectURL(image)
let selectionImage = document.querySelector('#selectionImage');
let avatar = document.querySelector('#img1');

let zoneUtilisateurs = document.querySelector('.zoneUtilisateurs');

let taille;

selectionImage.addEventListener("change", function (e) {
  e.preventDefault();
  if (this.files[0]) {
    avatar.src = URL.createObjectURL(this.files[0]);
  }
});

let clicked = function(e){
  e.preventDefault();

  utilisateurs.push({prenom:prenom.value, nom: nom.value, groupe: groupe.value, biographie:biographie.value})

    let lineUser = document.createElement('div');
    lineUser.classList.add('lineUser');
    zoneUtilisateurs.appendChild(lineUser);

    let colonneImage = document.createElement('div');
    colonneImage.classList.add('colonneImage');
    lineUser.appendChild(colonneImage);
    
    let img = document.createElement("img");
    img.setAttribute('src', avatar.src);
    img.setAttribute('alt', 'imageDuContact')
    // img.src = avatar.src;
    let src = colonneImage;
    src.appendChild(img);
    

    taille = utilisateurs.length-1;
    let coloneTexte = document.createElement('div');
    coloneTexte.classList.add('coloneTexte')
 
    lineUser.appendChild(coloneTexte);
       // les trois colonnnes de colonetexte qui seront en flex column
    

    let coloneTextePrenom = document.createElement('div')
    coloneTextePrenom.classList.add('coloneTextePrenom');
    coloneTexte.appendChild(coloneTextePrenom)
    coloneTextePrenom.appendChild(document.createTextNode(utilisateurs[taille].prenom + ' ' + utilisateurs[taille].nom))


    let coloneTexteGroupe = document.createElement('div');
    coloneTexteGroupe.classList.add('coloneTexteGroupe')
    coloneTexte.appendChild(coloneTexteGroupe)
    coloneTexteGroupe.appendChild(document.createTextNode(utilisateurs[taille].groupe))


    let coloneTexteBio = document.createElement('div');
    coloneTexteBio.classList.add('coloneTexteBio');
    coloneTexte.appendChild(coloneTexteBio);
    coloneTexteBio.appendChild(document.createTextNode(utilisateurs[taille].biographie));

    let colonneCroix = document.createElement('div');
    colonneCroix.classList.add('colonneCroix');
    colonneCroix.appendChild(document.createTextNode('X')) ;
    lineUser.appendChild(colonneCroix);

    colonneCroix.addEventListener('click', (e)=> {
      e.preventDefault();
      lineUser.remove();
    })
}


boutonCreer.addEventListener('click', clicked);



    
