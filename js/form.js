// This document contains all the calculations made via submitted information
'use strict'

var fields = document.getElementsByClassName('field');
var submitButton = document.getElementById('submit');
var finalPrice = document.getElementById('price');
var valuesArray = {};

var calculatePrice = function(){
  buildValues();
  var totalPrice = (valuesArray.BasicPrinters.calcOwnPrice(19.99) +
                    valuesArray.MFPs.calcOwnPrice(161.50) +
                    valuesArray.computers.calcOwnPrice(161.50) +
                    valuesArray.monitors.calcOwnPrice(29.95) +
                    valuesArray.network.value +
                    valuesArray.server.calcOwnPrice(199.99) +
                    valuesArray.tv50.calcOwnPrice(161.50) +
                    valuesArray.tv5169.calcOwnPrice(191.50) +
                    valuesArray.tv70.calcOwnPrice(234.50)).toFixed(2);
  finalPrice.innerHTML = '$' + totalPrice;
}

var buildValues = function(){
  for(var i = 0; i<fields.length; i++){
    valuesArray[fields[i].name] = {value: parseInt(fields[i].value), calcOwnPrice: function(costPerUnit){
      return parseFloat((this.value * costPerUnit).toFixed(2));
    }};
  }
}

submitButton.addEventListener('click', function(){
  calculatePrice();
});
