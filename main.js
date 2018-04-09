// variables
var submitElements    = document.getElementsByClassName('btn-submit');
var cancelElements    = document.getElementsByClassName('btn-retour')
var listHideElements  = document.getElementsByClassName('hide');
var form              = document.querySelectorAll('form');
var signInElement     = document.querySelector('#signIn');
var signUpElement     = document.querySelector('#signUp');
var modals            = Array.from (document.getElementsByClassName('modal'));

console.log(typeof(Array.from(cancelElements)));

//Affichage du modal signIn:
document.getElementById('btn-connexion').addEventListener('click', function () {
    signInElement.classList.replace("hidepop","active");
});

//Affichage du modal signUp + suppression affichage signIn:
document.getElementById('btn-inscription').addEventListener('mousedown', function () {
  signInElement.classList.replace("active","hidepop");
  signUpElement.classList.replace("hidepop","active");
});

// comportement des boutons submit
Array.from(submitElements).forEach(function (e) {
  e.addEventListener('mousedown', function () {
    if (signInElement.classList.contains('active')) {
      signInElement.classList.replace("active" , "hidepop");
    }else{
      signUpElement.classList.replace("active", "hidepop");
    }
    Array.from(listHideElements).forEach(function (e) {
      e.classList.replace("hide", "active");
    });
  });
});

//comportement des bouttons retour
Array.from(cancelElements).forEach(function (e){
  e.addEventListener('mousedown', function (e) {
    modals.forEach(function (e) {
      // e.preventDefault();
      console.log(e);
      if(e.classList.contains('active')){
        e.classList.replace("active" , "hide");
        window.location.replace("index.html");
      }
    });      
  });
});


// comportement des submit event
Array.from(form).forEach(function (e) {
  e.addEventListener('submit', function (e) {
    e.preventDefault();
    if (signInElement.classList.contains('active')) {
      signInElement.classList.replace("active" , "hidepop");
    }else{
      signUpElement.classList.replace("active", "hidepop");
    }
    Array.from(listHideElements).forEach(function (e) {
      e.classList.replace("hide", "active");
      console.log(e.classList);
    });
  });
});
