// variables (arrays)
var submitElements      = Array.from (document.getElementsByClassName('btn-submit'));
var cancelElements      = Array.from (document.getElementsByClassName('btn-retour'));
var listHideElements    = Array.from (document.getElementsByClassName('hide'));
var modals              = Array.from (document.getElementsByClassName('modal'));
var form                = document.querySelectorAll('form');
//variables (simples)
var inscription         = document.getElementById('btn-inscription');
var connexion           = document.getElementById('connexion');
var deconnexion         = document.getElementById('deconnexion');
var signInElement       = document.querySelector('#signIn');
var signUpElement       = document.querySelector('#signUp');


//Affichage du modal signIn:
connexion.addEventListener('click', function () {
    signInElement.classList.replace("hidepop","active");
});

//Affichage du modal signUp + suppression affichage signIn:
inscription.addEventListener('mousedown', function () {
  signInElement.classList.replace("active","hidepop");
  signUpElement.classList.replace("hidepop","active");
});

// comportement des boutons submit
submitElements.forEach(function (e) {
  e.addEventListener('mousedown', function () {
    if (signInElement.classList.contains('active')) {
      signInElement.classList.replace("active" , "hidepop");
    }else{
      signUpElement.classList.replace("active", "hidepop");
    }
    listHideElements.forEach(function (e) {
      e.classList.replace("hide", "active");
    });
    connexion.classList.add('hide');
  });
});

//comportement des boutons retour
cancelElements.forEach(function (e){
  e.addEventListener('mousedown', function (e) {
    modals.forEach(function (e) {
      if(e.classList.contains('active')){
        e.classList.replace("active" , "hide");
        window.location.replace("index.html");
      }
    });      
  });
});


// comportement des submit events
Array.from(form).forEach(function (e) {
  e.addEventListener('submit', function (e) {
    e.preventDefault();
    if (signInElement.classList.contains('active')) {
      signInElement.classList.replace("active" , "hidepop");
    }else{
      signUpElement.classList.replace("active", "hidepop");
    }
    listHideElements.forEach(function (e) {
      e.classList.replace("hide", "active");
    });
    connexion.classList.add('hide');
  });
});

// comportement du bouton déconnexion
deconnexion.addEventListener('mousedown', function(e){
  window.location.replace("index.html");
});