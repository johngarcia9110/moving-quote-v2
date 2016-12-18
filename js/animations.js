// This document contains all the UI functionality of the page
'use strict'

var buttonNext = document.getElementsByClassName('button-next');
var buttonPrev = document.getElementsByClassName('button-last');
var locationDots = document.getElementsByTagName('span');
var cards = document.getElementsByClassName('card-body');
var currentStep = 1;
var timer;

for(var i = 0; i < buttonNext.length; i++){
  buttonNext[i].addEventListener('click', function(){
    getCard('forwards');
  });
}

for(var i = 0; i < buttonPrev.length; i++){
  buttonPrev[i].addEventListener('click', function(){
    getCard('backwards');
  });
}

var getCard = function(direction){
  window.clearTimeout(timer);
  cards[currentStep - 1].classList.remove('animate-in');
  cards[currentStep - 1].classList.add('animate-out');
  timer = setTimeout(function(){
    if(direction === 'forwards'){
      for(var i = 0; i < cards.length; i++){
        cards[i].classList.remove('is-showing');
        cards[i].classList.remove('animate-in');
        cards[i].classList.remove('animate-out');
        locationDots[i].classList.remove('is-active');
      }
      cards[currentStep].classList.add('is-showing','animate-in');
      locationDots[currentStep].classList.add('is-active');
      currentStep++;
    }else if(direction === 'backwards'){
      currentStep -= 2;
      for(var i = 0; i < cards.length; i++){
        cards[i].classList.remove('is-showing');
        locationDots[i].classList.remove('is-active');
      }
      cards[currentStep].classList.add('is-showing', 'animate-in');
      locationDots[currentStep].classList.add('is-active');
      currentStep++;
    }else{
      console.log('Error: Card can not be found');
    }
  }, 500);
}

var showModal = function(){
  document.getElementById('modal').classList.add('show');
}

var hideModal = function(){
  document.getElementById('modal').classList.remove('show');
}
