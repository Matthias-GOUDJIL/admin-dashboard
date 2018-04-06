// variables
var submitElements = document.getElementsByClassName('btn-submit');
var listHideElements = document.getElementsByClassName('hide');
var form = document.querySelectorAll('form');
var signInElement = document.querySelector('#signIn');
var signUpElement = document.querySelector('#signUp');

//Affichage du modal signIn:
document.getElementById('btn-connexion').addEventListener('click', function () {
    signInElement.classList.replace("hidepop","active");
});

//Affichage du modal signUp + suppression affichage signIn:
document.getElementById('btn-inscription').addEventListener('mousedown', function () {
  signInElement.classList.replace("active","hidepop");
  signUpElement.classList.replace("hidepop","active");
});

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

 
Array.from(form).forEach(function (e) {
  e.addEventListener('submit', function () {
    if (signInElement.classList.contains('active')) {
      signInElement.classList.replace("active" , "hidepop");
    }else{
      signUpElement.classList.replace("active", "hidepop");
    }
    Array.from(listHideElements).forEach(function (e) {
      e.classList.replace("hide", "active");
      console.log(e.classList);
    });
  }, false);
});
