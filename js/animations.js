// This document contains all the UI functionality of the page

var buttonNext = document.getElementsByClassName('button-next');
var buttonPrev = document.getElementsByClassName('button-last');
var cards = document.getElementsByClassName('card-body');
var currentStep = 1;

for(var i = 0; i < buttonNext.length; i++){
  buttonNext[i].addEventListener('click', function(){
    getNextCard();
  });
}

for(var i = 0; i < buttonPrev.length; i++){
  buttonPrev[i].addEventListener('click', function(){
    getPrevCard();
  });
}

var getNextCard = function(){
  for(var i = 0; i < cards.length; i++){
    cards[i].classList.remove('is-showing');
  }
  cards[currentStep].classList.add('is-showing');
  currentStep++;
}

var getPrevCard = function(){
  currentStep -= 2;
  for(var i = 0; i < cards.length; i++){
    cards[i].classList.remove('is-showing');
  }
  cards[currentStep].classList.add('is-showing');
  currentStep++;
}
