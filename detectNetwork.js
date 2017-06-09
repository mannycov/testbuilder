// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

// Visa  4 13-16-19
// Diners Club - 38, 39 length = 14
// American Express  34, 37  length = 15
// MasterCard  51, 52, 53, 54, 55, 222100-272099 length = 16
// Discover  6011, 622126 to 622925, 644, 645, 646, 647, 648, 649, 65  length = 16-19
// Maestro 5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763  length = 16-19


var detectNetwork = function(cardNumber) {
  var cardName = '';
  for (var i = 0; i < cardNumber.length; i++) {
    if (cardNumber[0] === '4') {
      cardName = 'Visa';
    } else if (cardNumber.length === 14) {
      cardName = "The Diner's Club";
    } else if (cardNumber.length === 15) {
      cardName = "American Express"; 
    } else if (cardNumber[0] === '5' && Number(cardNumber[1]) >= 1) {
      cardName = 'MasterCard';
    }
  }
  return cardName;
};

