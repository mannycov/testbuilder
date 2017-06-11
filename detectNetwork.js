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

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

var detectNetwork = function(cardNumber) {
  var cardName = '';
  for (var i = 0; i < cardNumber.length; i++) {
    if (cardNumber[0] === '3' && Number(cardNumber[1]) >= 8) {
      if (cardNumber.length === 14) {
        cardName = "Diner's Club";
      }
    } else if (cardNumber[0] === '3' && Number(cardNumber[1]) === 4 || Number(cardNumber[1]) === 7) {
        if (cardNumber.length === 15) {
          cardName = 'American Express';
        }
    } else if (cardNumber[0] === '4') {
        if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
          cardName = 'Visa';
        }
    } else if (cardNumber[0] === '5') {
        if (1 <= Number(cardNumber[1]) <= 5) {
          if (cardNumber.length === 16) {
            cardName = 'MasterCard';
          }
        }
    } else if (cardNumber.substring(0, 4) === '6011') {
        if (cardNumber.length === 16 || cardNumber.length === 19) {
          cardName = 'Discover';
        }
    } else if (cardNumber.substring(0, 2) === '64') {
        if (4 <= Number(cardNumber[2]) <= 9) {
          if (cardNumber.length === 16 || cardNumber.length === 19) {
            cardName = 'Discover';
          }
        }
    } else if (cardNumber.substring(0, 2) === '65') {
        if (cardNumber.length === 16 || cardNumber.length === 19) {
          cardName = 'Discover';
        }
    }
  }
  return cardName;
};


