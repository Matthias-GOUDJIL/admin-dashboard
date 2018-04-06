
// fonction hasClass, deux paramètres: element et classname
// utilisation:
// if (hasClass(element, "foo")) {do something};

function hasClass(el, cls) {
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

// variables
var submitElements = document.getElementsByClassName('btn-submit');
var listHideElements = document.querySelectorAll('.hide');
var signInElement = document.querySelector('#signIn');
var signUpElement = document.querySelector('#signUp');

document.getElementById('btn-connexion').addEventListener('click', function () {
  if (hasClass(signInElement, "hide")) {
    signInElement.classList.remove('hide');
    signInElement.classList.add('active');
  } else {
    signInElement.classList.remove('active');
    signInElement.classList.add('hide');
  }
});

document.getElementById('btn-inscription').addEventListener('click', function () {
  if (hasClass(signUpElement, "hide")) {
    signUpElement.classList.remove('hide');
    signUpElement.classList.add('active');
  } else {
    signUpElement.classList.remove('active');
    signUpElement.classList.add('hide');
  }
});

Array.from(submitElements).forEach(function (e) {
  e.addEventListener('click', function () {
    Array.from(listHideElements).forEach(function (e) {
      e.classList.add('active');
    });
  });
});