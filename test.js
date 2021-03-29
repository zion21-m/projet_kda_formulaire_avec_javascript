let prenom = document.querySelector('#prenom');
let nom = document.querySelector('#nom');
let groupe = document.querySelector('#groupe');
let bio = document.querySelector('#bio');
let bouton = document.querySelector('#btnCreer');
let boutonReinitialiser = document.querySelector('.reinit');
let users = [];


// image.src = URL.createObjectURL(image)
let choiImage = document.querySelector('#choiImage');
let avatar = document.querySelector('#img1');

let zoneUsers = document.querySelector('.zone-users');

let taille;

choiImage.addEventListener("change", function (e) {
  e.preventDefault();
  if (this.files[0]) {
    avatar.src = URL.createObjectURL(this.files[0]);
  }
});

let clicked = function(e){
  e.preventDefault();

  users.push({prenom:prenom.value, nom: nom.value, groupe: groupe.value, bio:bio.value})

    let lineUser = document.createElement('div');
    lineUser.classList.add('lineUser');
    zoneUsers.appendChild(lineUser);

    let colonneImage = document.createElement('div');
    colonneImage.classList.add('colonneImage');
    lineUser.appendChild(colonneImage);
    
    let img = document.createElement("img");
    img.setAttribute('src', avatar.src);
    img.setAttribute('alt', 'imageDuContact')
    // img.src = avatar.src;
    let src = colonneImage;
    src.appendChild(img);
    

    taille= users.length-1;
    let coloneTexte = document.createElement('div');
    coloneTexte.classList.add('coloneTexte')
 
    lineUser.appendChild(coloneTexte);
       // les trois colonnnes de colonetexte qui seront en flex column
    

    let coloneTextePrenom = document.createElement('div')
    coloneTextePrenom.classList.add('coloneTextePrenom');
    coloneTexte.appendChild(coloneTextePrenom)
    coloneTextePrenom.appendChild(document.createTextNode(users[taille].prenom + ' ' + users[taille].nom))


    let coloneTexteGroupe = document.createElement('div');
    coloneTexteGroupe.classList.add('coloneTexteGroupe')
    coloneTexte.appendChild(coloneTexteGroupe)
    coloneTexteGroupe.appendChild(document.createTextNode(users[taille].groupe))


    let coloneTexteBio = document.createElement('div');
    coloneTexteBio = document.createElement('coloneTexteBio');
    coloneTexte.appendChild(coloneTexteBio);
    coloneTexteBio.appendChild(document.createTextNode(users[taille].bio));

    let colonneCroix = document.createElement('div');
    colonneCroix.classList.add('colonneCroix');
    colonneCroix.appendChild(document.createTextNode('X')) ;
    lineUser.appendChild(colonneCroix);

    colonneCroix.addEventListener('click', (e)=> {
      e.preventDefault();
      lineUser.remove();
    })
}

let reinialiser = function(e) {
  e.preventDefault();

  while (zoneUsers.firstChild) {
    zoneUsers.removeChild(zoneUsers.firstChild);
  }
}

bouton.addEventListener('click', clicked);
boutonReinitialiser.addEventListener('click', reinialiser);


    
