// Find number of vowels in a word
function getCount(str) {
    let result = 0
    let string = str.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u']
      for ( const letters of str) {
        if(vowels.includes(letters)) {
          result++
        }
  }
    return result
  }

//   const {assert} = require("chai");

// describe("Vowels Count Tests",function(){
//   it("should return 5 for 'abracadabra'",function(){
//     assert.strictEqual(getCount("abracadabra"), 5) ;
//   });
// });

//--------------------------------
// Return Positives
function positiveSum(arr) {
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        result += arr[i]
      }
    }
    return result;
  }

  // Example [1,-4,7,12] => 1 + 7 + 12 = 20
//------------------------

// Return Negative
function makeNegative(num) {
    let result = 0;
    if (num <= 0) {
      return num
    } else {
      return -Math.abs(num)
    }
}

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
//---------------

