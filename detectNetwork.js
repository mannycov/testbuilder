// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string

var detectNetwork = function(cardNumber) {
  var cardName = '';
  for (var i = 0; i < cardNumber.length; i++) {
    if (cardNumber[0] === '3' && Number(cardNumber[1]) >= 8) {
      if (cardNumber.length === 14) {
        cardName = "Diner's Club";
      }
    } else if (checkSwitch(cardNumber)) {
      cardName = 'Switch';
    } else if (cardNumber[0] === '3' && Number(cardNumber[1]) === 4 || Number(cardNumber[1]) === 7) {
        if (cardNumber.length === 15) {
          cardName = 'American Express';
        }
    }  else if (cardNumber[0] === '4') {
        if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
          cardName = 'Visa';
        }
    } else if (cardNumber.substring(0, 4) === '5018' || cardNumber.substring(0, 4) === '5020' || cardNumber.substring(0, 4) === '5038' || cardNumber.substring(0, 4) === '6304') {
        if (cardNumber.length >= 12 && cardNumber.length <= 19) {
          cardName = 'Maestro';
        }
    } else if (cardNumber[0] === '5' && 1 <= Number(cardNumber[1]) <= 5) {
        if (cardNumber.length === 16) {
          cardName = 'MasterCard';
        }
    } else if (cardNumber.substring(0, 4) === '6011') {
        if (cardNumber.length === 16 || cardNumber.length === 19) {
          cardName = 'Discover';
        }
    } else if (cardNumber.substring(0, 2) === '64') {
        if (Number(cardNumber[2]) >= 4 && Number(cardNumber[2]) <= 9) {
          if (cardNumber.length === 16 || cardNumber.length === 19) {
            cardName = 'Discover';
          }
        }
    } else if (cardNumber.substring(0, 2) === '65') {
        if (cardNumber.length === 16 || cardNumber.length === 19) {
          cardName = 'Discover';
        }
    } else if (checkChinaUnionPay(cardNumber)) {
      cardName = 'China UnionPay';
    } 
  }
  return cardName;
};

var checkChinaUnionPay = function(cardNumber) {
  for (var i = 0; i < cardNumber.length; i++)  {
    for (var j = 622126; j <= 622925; j++) {
      if (Number(cardNumber.substring(0, 6)) === j) {
        if (cardNumber.length >= 16 && cardNumber.length <= 19) {
          return true;
        }
      }
    }
    for (var k = 624; k <= 626; k++) {
      if (Number(cardNumber.substring(0, 3)) === k) {
        if (cardNumber.length >= 16 && cardNumber.length <= 19) {
          return true;
        }
      }
    }
    for (var l = 6282; l <= 6288; l++) {
      if (Number(cardNumber.substring(0, 4)) === l) {
        if (cardNumber.length >= 16 && cardNumber.length <= 19) {
          return true;
        }
      }
    }
  }
  return false;
}

var switchPrefixes = [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110];

var checkSwitch = function(cardNumber) {
  for (var i = 0; i < cardNumber.length; i++) {
    for (var j = 0; j < switchPrefixes.length; j++) {
      if (Number(cardNumber.substring(0, 4)) === switchPrefixes[j]) {
        if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
          return true;
        }
      } else if (Number(cardNumber.substring(0, 6)) === switchPrefixes[j]) {
          if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
            return true;
          }
        }
      }
    }
  return false;
}


